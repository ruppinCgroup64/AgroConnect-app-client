import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { googleAPI1 } from "../../googleAPI";
import theme from "../theme/theme"; // Ensure these are correctly imported
import { Colors } from "../theme/color";
import style from "../theme/style";

export default function AutoCompMap({ setAddress, setLatitude, setLongitude, setPlacesModalVisible }) {
  const [inputValue, setInputValue] = useState(""); // For the input value of the autocomplete field
  const [latLon, setLatLon] = useState({ latitude: null, longitude: null }); // To store latitude and longitude

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="עיר, רחוב, מספר"
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        keepResultsAfterBlur={true}
        onPress={(data, details = null) => {
          console.log(data)
          // This function is called when a dropdown item is selected
          if (details) {
            setAddress(details.formatted_address)
            setLatitude(details.geometry.location.lat)
            setLongitude(details.geometry.location.lng)
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
