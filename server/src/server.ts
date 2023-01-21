import fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.register(cors, {
  origin: 'http://localhost:3333'
})

app.get('/bora', async () => {

  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith : 'Continuar'
      },
    },
  });
  return {habits};
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server runing');
  });
