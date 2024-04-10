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

export default function Promo() {
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
                        title='Add Promo'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                        trailing={<TouchableOpacity >
                            <Icon name="search-outline" color={theme.txt} size={28} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor:Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <Image source={require('../../assets/image/s9.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch' }} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Special 25% Off</Text>
                                    <Text style={[style.m14, { color: theme.txt3, marginTop: 3 }]}>Special promo only today!</Text>
                                </View>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <Image source={require('../../assets/image/s9.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch' }} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Discount 30% Off</Text>
                                    <Text style={[style.m14, { color: theme.txt3, marginTop: 3 }]}>New user special promo</Text>
                                </View>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 11, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <Image source={require('../../assets/image/s9.png')} style={{ height: height / 10, width: width / 5, resizeMode: 'stretch' }} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Special 20% Off</Text>
                                    <Text style={[style.m14, { color: theme.txt3, marginTop: 3 }]}>Special promo only today!</Text>
                                </View>
                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <Image source={require('../../assets/image/s9.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch' }} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Discount 40% Off</Text>
                                    <Text style={[style.m14, { color: theme.txt3, marginTop: 3 }]}>Special promo only valid today!</Text>
                                </View>
                                <RadioButton
                                    value="fourth"
                                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fourth')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <Image source={require('../../assets/image/s9.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch' }} />
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Discount 35% Off</Text>
                                    <Text style={[style.m14, { color: theme.txt3, marginTop: 3 }]}>Special promo only today!</Text>
                                </View>
                                <RadioButton
                                    value="fifth"
                                    status={checked === 'fifth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fifth')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}
                            style={[style.btn, { marginVertical: 20 }]}>
                            <Text style={[style.btntxt, {}]}>Apply</Text>
                        </TouchableOpacity>

                    </ScrollView>


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}