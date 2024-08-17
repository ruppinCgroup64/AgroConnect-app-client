import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/SimpleLineIcons";

import Home from "../screens/Home";
import MyCart from "../screens/MyCart";
import OrderTab from "../screens/OrderTab";
import MyWallet from "../screens/MyWallet";
import Settings from "../screens/Settings";
import SalePoints from "../screens/SalePoints";
import Orders from "../screens/Orders";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function MyTabs() {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState("false");

  return (
    <Tab.Navigator
    initialRouteName="Home"
    
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { position: "absolute", height: 60, paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="Orders"
        component={Orders}
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
        name="Map"
        component={MapScreen}
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
        name="Home"
        component={Home}
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
        component={Settings}
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
