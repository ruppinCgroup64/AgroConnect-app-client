import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import style from '../theme/style';
import themeContext from '../theme/themeContex';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({ item }) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={{ width: width, backgroundColor: theme.bg1, }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{ flex: 2.3, marginTop: 20, backgroundColor: theme.bg1, }}>
                <Image source={item.img} resizeMode='stretch' style={{ width: width / 1.2, height: height / 2, alignSelf: 'center', marginTop: 40 }} />
            </View>
            <View style={{
                flex: 1,
                backgroundColor: theme.bg,
                paddingHorizontal: 18,
                paddingTop: 15,
            }}>
                <Text style={[style.title, { textAlign: 'center', color: theme.txt, }]}>{item.title1}</Text>
            </View>
        </SafeAreaView>
    )
}