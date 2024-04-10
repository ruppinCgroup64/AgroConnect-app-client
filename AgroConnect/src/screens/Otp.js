import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext,useRef } from 'react'
import { useFonts } from 'expo-font';
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'

// import OTPInputView from '@twotalltotems/react-native-otp-input'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false)
    const [isvisible, setisvisible] = useState(false)

    const e1 = useRef();
    const e2 = useRef();
    const e3 = useRef();
    const e4 = useRef();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Create New PIN'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Profilefill')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        } />

                    <Text style={[style.r18, { color: theme.txt, textAlign: 'center', marginTop: 30, }]}>Add a PIN number to make your account more secure.</Text>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", paddingTop: 50 }}>
                        <TextInput ref={e1}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e2.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e2}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e3.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e3}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e4}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus();
                                }
                            }}
                        />

                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Fingerprint')}
                            style={style.btn}>
                            <Text style={[style.btntxt, {}]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}