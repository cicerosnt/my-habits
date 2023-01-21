import { FastifyInstance } from "fastify";
import {date, z} from 'zod'
import { prisma } from "./lib/prisma"

import dayjs from "dayjs";

interface Habits{
  title: string
}

export async function appRouts(app: FastifyInstance){
  app.get('/', async () => {
    const habits = await prisma.habit.findMany();
    
    return {habits};
  });
  
  app.get('/day', async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    })
    
    const {date} = getDayParams.parse(request.query)
    
    const parsedDate = dayjs(date).startOf('day')
    const weekDays = parsedDate.get('day')
    
    const possibleHabits = await prisma.habit.findMany({
      where:{
        created_at: {
          lte: date,
        },
        weekDays:{
          some:{
            week_day: weekDays
          }
        }
      }
    });
    
    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        dayHabits: true,
      }
    }) 
    
    const completedHabits = day?.dayHabits.map(dayHabit => {
      return dayHabit.habit_id
    });
    
    return {
      possibleHabits,
      completedHabits 
    }
  });
  
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      //title: z.string().nullable(),
      title: z.string(),
      weekDays: z.array(
        z.number().min(0).max(6)
      )
    })
    const { title, weekDays } = createHabitBody.parse(request.body);
    const today = dayjs().startOf('day').toDate()
    await prisma.habit.create({
      data:{
        title,
        created_at: today,
        weekDays:{
          create: weekDays.map(weekDay => {
            return{
              week_day: weekDay,
            }
          })
        }
      }
    })
  });
}