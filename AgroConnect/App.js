import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigator/StackNavigator';


// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-Medium': require('./assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist-SemiBold': require('./assets/fonts/Urbanist-SemiBold.ttf'),
  });

  // useEffect( () => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  // else{
  //   SplashScreen.hideAsync();
  // }
  return (
    <StackNavigator/>
  );
}

