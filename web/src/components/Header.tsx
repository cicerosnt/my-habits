import { Plus } from "phosphor-react";
import logoImage from '../assets/logo.svg';

export function Header(){
  return (
    <div className="w-full mx-w-3xl mx-auto flex items-center justify-between">
          <img src={logoImage} alt="Logo My Habits"/>
          <button 
            type="button"
            className="
              flex
              items-center
              border 
              border-violet-500
              font-semibold
              rounded-xl
              px-6
              py-4
              gap-4
              hover:border-violet-900
            "
          >
            <Plus size={20} 
              className="text-violet-500" 
              weight="fill" 
            />
            Novo hábito
          </button>
        </div>
  )
}