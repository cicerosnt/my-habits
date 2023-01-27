import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";
import { FormEvent, useState } from 'react';

const avaliableWeekDays = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado',]

export function NewHabitForm(){

const [title, setTitle] = useState('');
const [weekDays, setWeekDays] = useState<number[]>([]);

function createNewHabit(event: FormEvent){
  event.preventDefault();
  
  
  console.log(title, weekDays);
}
function handleToggleWeekDay(weekDay: number){
  if(weekDays.includes(weekDay)){
    //const weekDayIndex = weekDays.findIndex(day => day === weekDay); 
    const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay);
    setWeekDays(weekDaysWithRemovedOne);
  }else{
    const weekDaysWithRemovedOne = [...weekDays, weekDay]
    setWeekDays(weekDaysWithRemovedOne);
  }
}
  return (
    <form
    onSubmit={createNewHabit}
      className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual o seu compromentimento?
      </label>
      <input 
        type="text" name="title" id="title" placeholder="Ex.: Exercicio, dormir bem, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        onChange={event => setTitle(event.target.value)}    
      />
      <label htmlFor="" className='mt-4 leading-tight font-extrabold'>
        Recorrência?
      </label>
      
      <div className='mt-2 flex flex-col gap-2' >
        {avaliableWeekDays.map((weekDay, index) => {
          return (
              <Checkbox.Root
                key={weekDay}
                className='flex items-center gap-3 group'
                onCheckedChange={() => handleToggleWeekDay(index)}
              >
                <div className='h-8 w-8 rounded-lg flex justify-center items-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                  <Checkbox.CheckboxIndicator >
                    <Check size={20} className='text-white'/>
                  </Checkbox.CheckboxIndicator>
                </div>
                
                <span className='text-white leading-tight'>
                  {weekDay}
                </span>
              </Checkbox.Root>
          )
        })}
      </div>
      
      
      
      <button 
        type="submit"
        className="
        mt-6 
        rounded-lg 
        p-4 flex 
        items-center 
        gap-3 
        font-semibold
        bg-green-600 
        justify-center
        hover:bg-green-600"
      >
        <Check size={20} weight="bold"/>
        Confirmar
      </button>
    </form>
  )
}