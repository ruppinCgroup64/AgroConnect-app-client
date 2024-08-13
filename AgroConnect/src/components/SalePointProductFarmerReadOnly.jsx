import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import Icon from "react-native-vector-icons/Ionicons";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export default function SalePointProductFarmerReadOnly({
  i,
  title,
  measure,
  uri,
  amount,
  price,
}) {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const image = { uri };

  return (
    <View style={{ padding: 5, marginTop: 10, width: "100%" }}>
      <View
        style={[
          style.shadow,
          {
            backgroundColor: theme.bg,
            shadowColor: Colors.active,
            padding: 10,
            borderRadius: 15,
            width: "100%",
            flexDirection: "row", // Arrange items in a row
            alignItems: "center",
          },
        ]}
      >
        <View
          style={{ flexDirection: "column", alignItems: "center", flex: 1 }}
        >
          <Text
            style={[
              style.b18,
              { color: theme.txt, textAlign: "center", marginBottom: 5 },
            ]}
          >
            {title}
          </Text>
          <View
            style={{
              backgroundColor: theme.bg3,
              borderRadius: 20,
              width: width / 5.55,
              overflow: "hidden",
              marginBottom: 5,
            }}
          >
            <ImageBackground
              source={image}
              resizeMode="stretch"
              style={{ height: height / 12 }}
            />
          </View>
        </View>
        <View style={{ flex: 2, paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={[style.b18, { color: Colors.primary, fontSize: 14 }]}>
              מחיר ל{measure}
            </Text>
            <Text
              style={{
                width: width / 5.55,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 15,
                backgroundColor: theme.bg3,
                color: Colors.primary,
                fontSize: 18,
                textAlign: "center",
                marginLeft: 10,
              }}>{price}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[style.b18, { color: Colors.primary, fontSize: 14 }]}>
              כמות סחורה ב{measure}
            </Text>
            <Text
              style={{
                width: width / 5.55,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 15,
                backgroundColor: theme.bg3,
                color: Colors.primary,
                fontSize: 18,
                textAlign: "center",
                marginLeft: 10,
              }}>
              {amount}
            </Text>
          </View>
        </View>
      </View>
    </View>
  ); //return

} //SalePointProductFarmer