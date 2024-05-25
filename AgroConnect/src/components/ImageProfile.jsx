//1. Get a image uri (its not must) and setProfilePic of the user (must!)
//2. Show circle frame with image or option to add image or delete it
//3. setProfilePic of the user only if it changed
//If there is an image it will appear at the circle frame, if not, it will allow to add an image(sent in base64).

import React, { useState } from "react";
import { Image, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ImageProfile({
  userImageURI,
  setProfilePic
}) {
  const [selectedImage, setSelectedImage] = useState(
    () => userImageURI || null
  );

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
      setProfilePic(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setProfilePic(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <View style={styles.iconPlaceholder}>
            <Icon name="add" size={24} color="#000" />
            <Text style={{ fontFamily: "Heebo-Thin" }}>הוסף תמונה</Text>
          </View>
        )}
      </TouchableOpacity>
      {selectedImage && (
        <TouchableOpacity onPress={removeImage} style={styles.deleteIcon}>
          <Icon name="delete" size={24} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    backgroundColor:"#fff",
    //"#DEEAD8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#000",
    borderStyle: "solid",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  iconPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
