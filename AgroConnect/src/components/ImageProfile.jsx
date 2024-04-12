import React, { useState } from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageProfile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          // Placeholder content like an icon or text
          <View style={styles.iconPlaceholder}>
            {/* Insert your icon component here */}
            {/* Example: <YourIconComponent /> */}
          </View>
        )}
        <View style={styles.overlayButton}>
          {/* Your plus button component or icon */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconPlaceholder: {
    // Define your placeholder styles
  },
  overlayButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    // Define styles for your plus button or use an icon component
  },
});
