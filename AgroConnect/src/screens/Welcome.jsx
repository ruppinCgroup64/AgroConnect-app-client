//welcome after successful registration

import React, { useEffect, useContext } from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Welcome() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    //this screen appear for 2 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        //מעבר לעמוד הבית המתאים לפי האם צרכן או חקלאי
        navigation.navigate("MyTabs"); 
      }, 2000);
    }, [navigation]);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
        
          <View
            style={[styles.container, { backgroundColor: theme.bg, marginTop: 50 }]}
          >
              {/* <Image
                source={{uri:theme.a}}
                resizeMode="stretch"
                style={{
                  height: height / 6,
                  width: width / 1.2,
                  alignSelf: "center",
                }}
              ></Image> */}
                <Text
                  style={[
                    style.subtitle,
                    { color: theme.txt, textAlign: "center", paddingTop:20 },
                  ]}
                >
                  ברוכים הבאים!
                </Text>
                  <Text style={[style.m16, { color: theme.txt3, paddingBottom:20 }]}>
                  ההרשמה בוצעה בהצלחה
                </Text>
                {/* <Image
                source={theme.basket}
                resizeMode="stretch"
                style={{
                  height: height/3,
                  width: width/1.2
                }}
              ></Image> */}
          </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Use flex to take the whole screen
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
      backgroundColor: '#fff', // Optional: just for better visibility
    },
    text: {
      fontSize: 20, // Just for better readability
    },
  });