import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, SafeAreaView, LogBox} from "react-native";
import StackNavigator from "./src/navigator/StackNavigator";
import { I18nManager } from "react-native";
import UsersContextProvider from "./src/Context/UserContext";
import ProductContextProvider from "./src/Context/ProductsContext";
import SalePointContextProvider, { SalePointContext } from "./src/Context/SalePointContext";
import TenderContextProvider from "./src/Context/TenderContext";
import OrderContextProvider from "./src/Context/OrderContext";


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

  LogBox.ignoreLogs([
    'Require cycle:'
  ]);

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <OrderContextProvider>
    <TenderContextProvider>
    <SalePointContextProvider>
    <ProductContextProvider>
    <UsersContextProvider>
      <StackNavigator/>
    </UsersContextProvider>
    </ProductContextProvider>
    </SalePointContextProvider>
    </TenderContextProvider>
    </OrderContextProvider>
  );
}
