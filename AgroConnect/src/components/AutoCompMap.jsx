//Using auto complete google maps for adding existing address in registration and edit details

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { googleAPI1 } from "../../googleAPI";
import theme from "../theme/theme"; //Ensure these are correctly imported
import { Colors } from "../theme/color";
import style from "../theme/style";

export default function AutoCompMap({ setAddress, setLatitude, setLongitude, setPlacesModalVisible }) {
  const [inputValue, setInputValue] = useState(""); // For the input value of the autocomplete field

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="עיר, רחוב, מספר"
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        keepResultsAfterBlur={true}
        onPress={(data, details = null) => {
          if (details) {
            setAddress(details.formatted_address)
            setLatitude(details.geometry.location.lat)
            setLongitude(details.geometry.location.lng)
          }
        }}
        onFail={error => console.error(error)}
        query={{
          key: googleAPI1,
          language: "he",  
          types: "address", 
        }}
        styles={{
          textInputContainer: {
            width: "100%",
            borderColor: theme.input,
            borderWidth: 1,
            backgroundColor: theme.input,
            marginTop: 20,
            zIndex: 10 
          },
          
          textInput: {
            height: 38,
            color: theme.txt,
            fontSize: 16,
            textAlign: "right",
            padding: 10, 
            selectionColor: Colors.primary, 
            placeholderTextColor: Colors.disable, 
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        textInputProps={{
          onChangeText: setInputValue,
          selectionColor: Colors.primary,
          placeholderTextColor: Colors.disable,
          style: [
            style.s14, 
            {
              color: theme.txt,
              flex: 1,
              textAlign: "right",
              height: 50, 
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
