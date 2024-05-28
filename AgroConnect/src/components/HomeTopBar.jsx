import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { useFonts } from 'expo-font';
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function HomeTopBar({ farmer }) {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    t = "קונים כחול לבן    ";
    if (farmer)
        t = "תומכים בחקלאי ישראל    ";

    return (
        <View style={{ padding: 5, marginTop: 10 }}>
            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                <View style={{ marginLeft: 10, flex: 1, alignItems: 'center' }}>
                    <Text style={[style.b18, { color: Colors.primary }]}>{t}<Icons name='star-david' size={20} color={Colors.primary} /></Text>
                </View>
            </View>
        </View>
    );//return

}//HomeTopBar