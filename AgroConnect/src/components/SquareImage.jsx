import React, { useState } from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SquareImage({url, wid, hei}) {
  return (
    <View style={[styles.container, { width: wid, height: hei }]}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFF', 
    borderColor: '#000', 
    overflow: 'hidden', // Moved overflow style here
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Apply the same borderRadius to the Image component
  },
});
