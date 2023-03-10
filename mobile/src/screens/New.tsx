import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import {Feather} from '@expo/vector-icons';
import colors from "tailwindcss/colors";

const avaliableWeekDays = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado',]

export function New(){
const [weekDays, setWeekDays] = useState<number[]>([]);

function handleToggleWeekDay(weekDayIndex: number){
  if(weekDays.includes(weekDayIndex)){
    setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
  }else{
    setWeekDays(prevState => [...prevState, weekDayIndex]);
  }
}
  return (
  
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        
        <BackButton/>
        
        <Text className='mt-6 text-white font-extrabold text-3xl'>
          Criar hábito
        </Text>
        <Text className='mt-6 text-white font-semibold text-base'>
          Qual o seu comprometimento?
        </Text>
        
        <TextInput
          className="h-12 pl-4 rounded-lg mt-2 bg-zinc-900 text-white border-1 border-zinc-800 focus:border-green-600"
          placeholder="Exercicio, Dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
        /> 
        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>
        {
          avaliableWeekDays.map((weekDay, index) => (
            <CheckBox
              key={`${index}-${weekDay}`}
              title={weekDay}
              cheked={weekDays.includes(index)}
              onPress={ ()=> handleToggleWeekDay(index)}
            />
          ))
        }
        
        <TouchableOpacity
          className="w-full h-12 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          activeOpacity={0.7}
        >
          <Feather 
            name="check"
            size={20}
            color={colors.white}
          />
          <Text 
            className="font-semibold text-base text-white ml-2"
          >
            Blz, confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    
  );
}