import { useRoute } from "@react-navigation/native";
import { ScrollView, View, Text } from "react-native";
import { BackButton } from "../components/BackButton";
import dayjs from 'dayjs';
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";

interface Params {
  date: string;
}

export function Habit(){
  const route = useRoute();
  const {date} = route.params as Params;
  const parseDate = dayjs(date);
  const dayOfWeek = parseDate.format('dddd');
  const dayAndMoth = parseDate.format('DD/MM');
  return (
  
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
      >
        
        <BackButton/>
        
        <Text className="mt-6 text-zinc-400 font-semibold text-basee lowercase">
          {dayOfWeek}
        </Text>
        <Text className="text-white font-extrabold text-3xl">
          {dayAndMoth}
        </Text>
        
        <ProgressBar progress={50}/>
        
        <View className="mt-6">
          <CheckBox 
            title="Beber uma caçacinha"
            cheked={false}
          />
          <CheckBox 
            title="Beber uma caçacinha de leve"
            cheked={true}
          />
        </View>
        
      
      </ScrollView>
    </View>
    
  );
}