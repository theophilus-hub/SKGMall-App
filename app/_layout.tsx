import {SplashScreen, Stack} from 'expo-router';
import {useFonts} from 'expo-font'
import { useEffect } from 'react';

import GlobalProvider from '../context/GlobalProvider';

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
      "Odin" : require("../assets/fonts/Odin-Bold.otf"),
      "Inter" : require("../assets/fonts/Inter Regular.ttf")
  })

  useEffect(() => {
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])


  if(!fontsLoaded && !error) return null;



  return (
    <GlobalProvider>
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}} />
            <Stack.Screen name='(auth)' options={{headerShown: false}} />
            <Stack.Screen name='(tabs)' options={{headerShown: false}} />
      </Stack> 
    </GlobalProvider>
  );
}

export default RootLayout

