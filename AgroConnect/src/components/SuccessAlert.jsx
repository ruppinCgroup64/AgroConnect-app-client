//Get show and setShow state and content to present in green alert

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function SuccessAlert({ show, setShow, content }) {
  const opacity = useRef(new Animated.Value(0)).current; // Use useRef to maintain the animated value

  useEffect(() => {
    if (show) {
      fadeIn();
    }
  }, [show]); // Dependency on show

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      // Wait for 2 seconds and then fade out
      setTimeout(() => {
        fadeOut();
      }, 1000);
    });
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      setShow(false); // Update the parent's state to ensure reusability
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.alertBox, { opacity }]}>
        <Text style={styles.alertText}>{content}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '50%', // Position at the top
    left: 0,
    right: 0,
    alignItems: 'center', // Center horizontally
    zIndex: 1000, // Make sure it's on top of other elements
  },
  alertBox: {
    backgroundColor: '#BDE0AC',
    padding: 30,
    borderRadius: 5,
  },
  alertText: {
    color: 'white',
    fontFamily: 'Heebo-Medium'
  }
});
