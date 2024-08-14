import {
    View, Text,
    TouchableOpacity,
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import style from '../theme/style'

export default function Table() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(navTo)}>
            <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: "#000" }}>
                <Text></Text>
                <Text
                    style={[[style.categoryText, { color: Colors.primary, backgroundColor: theme.bg, borderWidth: 0 }]]}>
                    מקום  |  50₪  |  מארזים
                </Text>
            </View>
            <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: "#000" }}>
                <Text>  1  |  50₪  |  3  </Text>
            </View>
        </TouchableOpacity>
    );//return

}//Tables