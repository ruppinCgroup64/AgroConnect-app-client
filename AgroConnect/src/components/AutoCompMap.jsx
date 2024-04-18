import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { googleAPI1 } from "../../googleAPI";
import theme from "../theme/theme"; // Ensure these are correctly imported
import { Colors } from "../theme/color";
import style from "../theme/style";

export default function AutoCompMap({ setAddress, setPlacesModalVisible }) {
  const [inputValue, setInputValue] = useState(""); // For the input value of the autocomplete field
  const [latLon, setLatLon] = useState({ latitude: null, longitude: null }); // To store latitude and longitude

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="עיר, רחוב, מספר"
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        value={inputValue}
        onPress={(data, details = null) => {
          // This function is called when a dropdown item is selected
          if (details) {
            const addressName = details.formatted_address;
            const latitude = details.geometry.location.lat;
            const longitude = details.geometry.location.lng;

            setInputValue(addressName); // Set the text input to the full address
            setAddress(addressName); // Save the address name
            setLatLon({ latitude, longitude }); // Save latitude and longitude

            console.log("Selected Address:", addressName);
            console.log("Coordinates:", latitude, longitude);
          }
        }}
        onFail={error => console.error(error)}
        query={{
          key: googleAPI1,
          language: "he", // Language of the results
          types: "address", // Search only for addresses
        }}
        styles={{
          textInputContainer: {
            width: "100%",
            borderColor: theme.input,
            borderWidth: 1,
            backgroundColor: theme.input,
            marginTop: 20,
            zIndex: 10 // Try setting a high zIndex
          },
          
          textInput: {
            height: 38,
            color: theme.txt,
            fontSize: 16,
            textAlign: "right",
            padding: 10, // Ensure padding for internal spacing
            selectionColor: Colors.primary, // Color of the highlight on selection
            placeholderTextColor: Colors.disable, // Color of the placeholder text
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        textInputProps={{
          onChangeText: setInputValue, // Set the input value state on text change
          selectionColor: Colors.primary,
          placeholderTextColor: Colors.disable,
          style: [
            style.s14, // Make sure your theme/style file correctly defines s14
            {
              color: theme.txt,
              flex: 1,
              textAlign: "right",
              height: 50, // Adjust height as needed
            },
          ],
        }}
      />
      <TouchableOpacity style={[style.btnSave, { alignSelf: "center" }]}
      onPress={() => {
        setPlacesModalVisible(false);
      }}>
        <Text style={style.btntxt}>שמור</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
