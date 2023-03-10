import './src/lib/dayjs';

import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import { StatusBar } from 'react-native';

import { Loading } from './src/components/Loading';
import { Rooutes } from './src/routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });
  
  
  if(!fontLoaded){
    return (
      <Loading/>
    );
  }
  
  return (
    <>
      <Rooutes/>
      <StatusBar barStyle='light-content' backgroundColor="transparent" translucent={true}/>
    </>
  );
}