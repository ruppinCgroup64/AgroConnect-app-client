import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/SimpleLineIcons";

import MyCart from "../screens/MyCart";
import OrderTab from "../screens/OrderTab";
import MyWallet from "../screens/MyWallet";
import HomeFarmer from "../screensFarmer/HomeFarmer";
import SettingsFarmer from "../screensFarmer/SettingsFarmer";
import OrdersFarmer from "../screensFarmer/OrdersFarmer";
import SalePointsFarmer from "../screensFarmer/SalePointsFarmer";
import MapScreenFarm from "../screensFarmer/MapScreenFarm";

const Tab = createBottomTabNavigator();

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function MyTabsFarmer() {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState("false");

  return (
    <Tab.Navigator
    initialRouteName="HomeFarmer"
    
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { position: "absolute", height: 60, paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="OrdersFarmer"
        component={OrdersFarmer}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Medium",
                fontSize: 10,
              }}
            >
              {focused ? "" : ""}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
             
              <Image
                source={
                  focused
                    ? require("../../assets/image/b1d.png")
                    : require("../../assets/image/b1.png")
                }
                style={{
                  height: height / 30,
                  width: width / 15,
                  resizeMode: "stretch",
                }}
              />
            );
          },
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="OrderTab"
        component={OrderTab}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Medium",
                fontSize: 10,
              }}
            >
              {focused ? "" : ""}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={28}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="MapFarmer"
        component={MapScreenFarm}
        options={{
          exptabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Medium",
                fontSize: 10,
              }}
            >
              {focused ? "" : ""}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Icons
                name="map"
                size={30}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="HomeFarmer"
        component={HomeFarmer}
        options={{
          exptabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Medium",
                fontSize: 10,
              }}
            >
              {focused ? "" : ""}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Icons
                name={focused ? "home" : "home-outline"}
                size={30}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      {/* <Tab.Screen
        name="MyWallet"
        component={MyWallet}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Medium",
                fontSize: 10,
              }}
            >
              {focused ? "" : ""}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Icons
                name={focused ? "wallet" : "wallet-outline"}
                size={26}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      /> */}

      <Tab.Screen
        name="Profile"
        component={SettingsFarmer}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? Colors.primary : Colors.disable,
                fontFamily: "Urbanist-Medium",
                fontSize: 10,
              }}
            >
              {focused ? "" : ""}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return (
              <Icons
                name="account-outline"
                size={30}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
