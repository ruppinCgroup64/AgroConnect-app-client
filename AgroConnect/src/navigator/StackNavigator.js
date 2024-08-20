import { View, Text, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventRegister } from "react-native-event-listeners";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import Login from "../screens/Login";
import Signup from "../screens/Signup-no";

import Splash from "../screens/Splash";
import Letsin from "../screens/Letsin";
import CreateAccount from "../screens/CreateAccount";
import ForgotPass from "../screens/ForgotPass";
import NewPass from "../screens/NewPass";
import Notification from "../screens/Notification";
// import Otp from '../screens/Otp';
import Introduction from "../screens/Introduction";
import Fingerprint from "../screens/Fingerprint";
import Search from "../screens/Search";
import OrderTab from "../screens/OrderTab";
import OrderTrack from "../screens/OrderTrack";
import TopUpMethod from "../screens/TopUpMethod";
import Helpcenter from "../screens/Helpcenter";
import CustomerService from "../screens/CustomerService";
import Settings from "../screens/Settings";
import Address from "../screens/Address";
import Notification1 from "../screens/Notification1";
import Payment from "../screens/Payment";
import NewCard from "../screens/NewCard";
import Security from "../screens/Security";
import Language from "../screens/Language";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import Invited from "../screens/Invited";
import Ticket from "../screens/Ticket";
import TransactionHistory from "../screens/TransactionHistory";
import Amount from "../screens/Amount";
import MyWallet from "../screens/MyWallet";
import ConfirmPin from "../screens/ConfirmPin";
import Payment1 from "../screens/Payment1";
import MyCart from "../screens/MyCart";
import Profilefill from "../screens/Profilefill";
import ProfilefillFarmer from "../screens/ProfilefillFarmer";
import EditProfileFarm from "../screens/EditProfileFarm";

import Otp from "../screens/Otp";
import Mywishlist from "../screens/Mywishlist";
import MyTabs from "./BottomNavigator";
import Popular from "../screens/Popular";
import SearchR from "../screens/SearchR";
import Home from "../screens/Home";

import ProDetail from "../screens/ProDetail";
import Review from "../screens/Review";
import Checkout from "../screens/Checkout";
import ShippingAdd from "../screens/ShippingAdd";
import ChooseShip from "../screens/ChooseShip";
import Promo from "../screens/Promo";
import Otp2 from "../screens/Otp2";
import Otp3 from "../screens/Otp3";
import NewAddress from "../screens/NewAddress";
import Otp1 from "../screens/Otp1";
import ProDetail2 from "../screens/ProDetail2";
import EditProfile from "../screens/EditProfile";
import Welcome from "../screens/Welcome";
import CreateTender from "../screensFarmer/CreateTender/";
import TenderFarmer from "../screensFarmer/TenderFarmer/";
import SettingsFarmer from "../screensFarmer/SettingsFarmer/";
import Farmer from "../screensFarmer/Farmer/";
import About from "../screens/About";
import CreateSalePoint from "../screensFarmer/CreateSalePoint";
import Tender from "../screens/Tender";
import SalePoint from "../screens/SalePoint";
import SalePointFarmer from "../screensFarmer/SalePointFarmer";
import HomeFarmer from "../screensFarmer/HomeFarmer";
import MyTabsFarmer from "./BottomNavigatorFarmer";
import SalePointsFarmer from "../screensFarmer/SalePointsFarmer";
import SalePoints from "../screens/SalePoints";
import OrdersFarmer from "../screensFarmer/OrdersFarmer";
import TendersFarmer from "../screensFarmer/TendersFarmer";
import Orders from "../screens/Orders";
import Tenders from "../screens/Tenders";
import MapScreen from "../screens/MapScreen";
import FarmPage from "../screensFarmer/FarmPage";
import MapScreenFarm from "../screensFarmer/MapScreenFarm";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });

    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);
  }, []);
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <StatusBar
          backgroundColor={darkMode === true ? Colors.active : Colors.secondary}
          barStyle={darkMode === true ? "light-content" : "dark-content"}
          translucent={false}
        />
        <Stack.Navigator>
          {showSplashScreen ? (
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          ) : null}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateTender"
            component={CreateTender}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TenderFarmer"
            component={TenderFarmer}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="FarmPage"
            component={FarmPage}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Tenders"
            component={Tenders}
            options={{ headerShown: false }}
          />
               <Stack.Screen
            name="TendersFarmer"
            component={TendersFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MapScreenFarm"
            component={MapScreenFarm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="MyTabsFarmer"
            component={MyTabsFarmer}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfileFarm"
            component={EditProfileFarm}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProfilefillFarmer"
            component={ProfilefillFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profilefill"
            component={Profilefill}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Farmer"
            component={Farmer}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SettingsFarmer"
            component={SettingsFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tender"
            component={Tender}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateSalePoint"
            component={CreateSalePoint}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SalePoint"
            component={SalePoint}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SalePointFarmer"
            component={SalePointFarmer}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="CreateTender"
            component={CreateTender}
            options={{ headerShown: false }}
          /> */}

          {/* <Stack.Screen
            name="Introduction"
            component={Introduction}
            options={{ headerShown: false }}
          /> */}

          {/* <Stack.Screen
            name="Letsin"
            component={Letsin}
            options={{ headerShown: false }}
          /> */}

          {/* <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          /> */}

          <Stack.Screen
            name="ProDetail2"
            component={ProDetail2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewAddress"
            component={NewAddress}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp3"
            component={Otp3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp2"
            component={Otp2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Promo"
            component={Promo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChooseShip"
            component={ChooseShip}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShippingAdd"
            component={ShippingAdd}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Review"
            component={Review}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProDetail"
            component={ProDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp1"
            component={Otp1}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SearchR"
            component={SearchR}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Popular"
            component={Popular}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mywishlist"
            component={Mywishlist}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyCart"
            component={MyCart}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen
            name="ConfirmPin"
            component={ConfirmPin}
            options={{ headerShown: false }}
          /> */}

          <Stack.Screen
            name="Payment1"
            component={Payment1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyWallet"
            component={MyWallet}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Amount"
            component={Amount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ticket"
            component={Ticket}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Invited"
            component={Invited}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Language"
            component={Language}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Security"
            component={Security}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewCard"
            component={NewCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification1"
            component={Notification1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Address"
            component={Address}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CustomerService"
            component={CustomerService}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Helpcenter"
            component={Helpcenter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TopUpMethod"
            component={TopUpMethod}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderTrack"
            component={OrderTrack}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fingerprint"
            component={Fingerprint}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewPass"
            component={NewPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPass"
            component={ForgotPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeFarmer"
            component={HomeFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SalePointsFarmer"
            component={SalePointsFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SalePoints"
            component={SalePoints}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrdersFarmer"
            component={OrdersFarmer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
