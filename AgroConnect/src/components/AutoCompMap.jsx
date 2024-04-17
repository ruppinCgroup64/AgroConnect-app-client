import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import debounce from "lodash.debounce";
import style from "../theme/style";
import theme from "../theme/theme";

export default function AutoCompMap({ setAddress }) {
  const [query, setQuery] = useState("");
  const [addresses, setAddresses] = useState([]);

  // Debounced function to handle search
  const handleSearch = async (text) => {
    if (text.length > 2) {
      try {
        const apiKey = "uGpXju6Fa1hGcV99GZdH4hbJsDCtjGAR"; // Replace with your TomTom API key
        const response = await axios.get(
          `https://api.tomtom.com/search/2/search/${text}.json?key=${apiKey}&limit=5`
        );
        setAddresses(response.data.results);
        setAddress(response.data.results); // Assuming setAddress can handle array of results
      } catch (error) {
        console.error(error);
        setAddresses([]); // Clear addresses on error
        setAddress([]); // Clear address state on error
      }
    } else {
      setAddresses([]);
      setAddress([]);
    }
  };

  // Debouncing the search input
  const debouncedSearch = debounce(handleSearch, 300);

  // Update query and trigger debounced search
  const handleChange = (text) => {
    setQuery(text);
    debouncedSearch(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="עיר, רחוב, מספר"
        value={query}
        onChangeText={handleChange}
        placeholderTextColor="grey" // Customize as needed
        selectionColor="blue" // Customize as needed
      />
      <FlatList
        data={addresses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => setQuery(item.address.freeformAddress)}
          >
            <Text>{item.address.freeformAddress}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: [
    ,
    {
      flex: 1,
      marginTop: 50,
      marginHorizontal: 10,
    },
  ],
  input: [
    style.txtinput,
    style.s14,
    {
      height: 40,
      padding: 10,
      marginBottom: 10,
      textAlign: "right", // Align text to the right
    },
    { borderColor: theme.input, backgroundColor: theme.input, marginTop: 20 },
  ],
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
});
