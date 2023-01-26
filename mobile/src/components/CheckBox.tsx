import { Text, TouchableOpacity, View, TouchableHighlightProps } from "react-native";
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors"; 

interface Props extends TouchableHighlightProps {
  title: string,
  cheked?: boolean
}

export function CheckBox({title, cheked = false, ...rest}: Props){
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      className='flex-row mb-2 items-center'
      {...rest}
    >
    {cheked ? 
      <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
        <Feather 
          name="check"
          size={20}
          color={colors.white}
        />
      </View>
    :
    
    <View className="h-8 w-8 bg-zinc-500 rounded-lg "/>
    }
    
    <Text className="text-white text-base ml-3 font-semibold">
      {title}
    </Text>
     
    </TouchableOpacity>
  );
}