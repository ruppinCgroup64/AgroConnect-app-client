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
import { Avatar, RadioButton } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ChooseShip() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Choose Shipping'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                               <Avatar.Image source={require('../../assets/image/s6.png')} size={40} style={{backgroundColor:theme.bg}} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Economy</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Estimated Arrival, Dec 20-23</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.b18, { color: Colors.primary, marginRight: 5 }]}>$10</Text>
                                    <RadioButton
                                        value="first"
                                        status={checked === 'first' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('first')}
                                        color={Colors.primary}
                                        uncheckedColor={Colors.primary}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                               <Avatar.Image source={require('../../assets/image/s6.png')} size={40} style={{backgroundColor:theme.bg}} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Regular</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Estimated Arrival, Dec 20-22</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.b18, { color: Colors.primary, marginRight: 5 }]}>$15</Text>
                                    <RadioButton
                                        value="second"
                                        status={checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('second')}
                                        color={Colors.primary}
                                        uncheckedColor={Colors.primary}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                               <Avatar.Image source={require('../../assets/image/s7.png')} size={40} style={{backgroundColor:theme.bg}} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Cargo</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Estimated Arrival, Dec 19-20</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.b18, { color: Colors.primary, marginRight: 5 }]}>$20</Text>
                                    <RadioButton
                                        value="third"
                                        status={checked === 'third' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('third')}
                                        color={Colors.primary}
                                        uncheckedColor={Colors.primary}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                               <Avatar.Image source={require('../../assets/image/s8.png')} size={40} style={{backgroundColor:theme.bg}} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Express</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Estimated Arrival, Dec 18-19</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.b18, { color: Colors.primary, marginRight: 5 }]}>$30</Text>
                                    <RadioButton
                                        value="fourth"
                                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('fourth')}
                                        color={Colors.primary}
                                        uncheckedColor={Colors.primary}
                                    />
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}
                        style={[style.btn, { marginVertical: 20 }]}>
                        <Text style={[style.btntxt, {}]}>Apply</Text>
                    </TouchableOpacity>
                    
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}