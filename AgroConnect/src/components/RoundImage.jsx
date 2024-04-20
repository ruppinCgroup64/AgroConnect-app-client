
import React, { useState } from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RoundedImage({url, wid, hei}) {

  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: wid,
        height: hei,
        backgroundColor: '#DEEAD8',
        borderRadius: 100,
        borderWidth: 0.5,  
        borderColor: '#000'}}>
          <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    backgroundColor: '#DEEAD8',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 0.5,  
    borderColor: '#000', 
    borderStyle: 'solid'
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: '#DEEAD8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 0.5,  
    borderColor: '#000', 
    borderStyle: 'solid'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
