import { StatusBar } from 'expo-status-bar';
import {
    View, Text, Dimensions,
    SafeAreaView,
    Image
} from 'react-native'
import React, {  useContext,useState } from 'react';
import { useFonts } from 'expo-font';
import { BallIndicator, } from 'react-native-indicators'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {
    
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { color: theme.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{
                flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
            }}>
                <Image source={require('../../assets/image/Logo.png')} style={{ height:  height/8, width:width/ 3.5, resizeMode: 'stretch' }} />
            </View>
            <View style={{
                flex: 1, alignItems: 'center',
            }}>
                <View style={{marginBottom:50}}>
                <BallIndicator size={30} color={Colors.primary} />
                </View>
            </View>
        </SafeAreaView>
    )
}