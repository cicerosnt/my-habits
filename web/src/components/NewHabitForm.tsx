import { Check } from "phosphor-react";


export function NewHabitForm(){
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual o seu compromentimento?
      </label>
      <input 
        type="text" 
        name="title" 
        id="title" 
        placeholder="Ex.: Exercicio, dormir bem, etc..."
        autoFocus
        className="
        p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900
        "
      />
      <label htmlFor="">
        Recorrência?
      </label>
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