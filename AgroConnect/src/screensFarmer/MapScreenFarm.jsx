import { AppBar } from "@react-native-material/core";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import theme from "../theme/theme";
import { TenderContext } from "../Context/TenderContext";
import { SalePointContext } from "../Context/SalePointContext";
import style from "../theme/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { UsersContext } from "../Context/UserContext";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function MapScreenFarm() {
  const { allFarms, consumer } = useContext(UsersContext);
  const navigation = useNavigation();

  const addMarkers = () => {
    let FarmsMarkers = allFarms.map((item) => {
      return {
        id: item.id,
        latitude: item.latitude,
        longitude: item.longitude,
        color: "green",
        item: item,
      };
    });
    return FarmsMarkers;
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg || "#fff" }]}>
      <AppBar
        color={theme.bg || "#fff"}
        title="מפת משקים"
        titleStyle={{
          color: theme.txt,
          fontFamily: "Heebo-Bold",
          fontSize: 17,
          textAlign: "center",
        }}
        elevation={0}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: consumer.latitude, // Set initial latitude
          longitude: consumer.longitude, // Set initial longitude
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {addMarkers().map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            pinColor={marker.color}
            onPress={() =>
              navigation.navigate(
                "FarmPage",
                { item: marker.item.id }
              )
            }
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: width,
    height: height,
  },
});
