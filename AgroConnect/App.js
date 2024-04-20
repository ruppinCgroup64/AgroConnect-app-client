import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StackNavigator from "./src/navigator/StackNavigator";
import { I18nManager } from "react-native";
import UsersContextProvider from "./src/Context/UserContext";
import ProductContextProvider from "./src/Context/ProductsContext";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Heebo-SemiBold": require("./assets/fonts/Heebo-SemiBold.ttf"),
    "Heebo-Thin": require("./assets/fonts/Heebo-Thin.ttf"),
    "Heebo-ExtraBold": require("./assets/fonts/Heebo-ExtraBold.ttf"),
    "Heebo-Bold": require("./assets/fonts/Heebo-Bold.ttf"),
    "Heebo-Regular": require("./assets/fonts/Heebo-Regular.ttf"),
    "Heebo-Light": require("./assets/fonts/Heebo-Light.ttf"),
    "Heebo-Medium": require("./assets/fonts/Heebo-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <ProductContextProvider>
    <UsersContextProvider>
      <StackNavigator/>
    </UsersContextProvider>
    </ProductContextProvider>
  );
}
