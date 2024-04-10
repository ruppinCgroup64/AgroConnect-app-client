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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Checkout() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Checkout'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                        trailing={<TouchableOpacity >
                            <Icon name="ellipsis-horizontal-circle" color={theme.txt} size={28} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={[style.t1, { color: theme.txt, marginTop: 10 }]}>Shipping Address</Text>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ShippingAdd')}
                            style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#01B76310', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#01B763', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='location' size={18} color={Colors.secondary}></Icon>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Home</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>61480 Sunbrook Park, PC 5679</Text>
                                </View>
                                <Icons name='pencil' size={24} color={Colors.primary}></Icons>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>
                        <Text style={[style.t1, { color: theme.txt, marginTop: 10 }]}>Order list</Text>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 3.7 }}>
                                    <ImageBackground source={require('../../assets/image/i1.png')}
                                        resizeMode='stretch' style={{ height: height / 8, flex: 1, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Prayer Plant</Text>
                                    <Text style={[style.b18, { color: Colors.primary, }]}>$29</Text>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: theme.bg3, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.b14, { color: Colors.primary, }]}>1</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 3.7 }}>
                                    <ImageBackground source={require('../../assets/image/i9.png')}
                                        resizeMode='stretch' style={{ height: height / 8, flex: 1, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Rubber Fig Plant</Text>
                                    <Text style={[style.b18, { color: Colors.primary, }]}>$99</Text>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: theme.bg3, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.b14, { color: Colors.primary, }]}>3</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 3.7 }}>
                                    <ImageBackground source={require('../../assets/image/i2.png')}
                                        resizeMode='stretch' style={{ height: height / 8, flex: 1, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>ZZ Plant</Text>
                                    <Text style={[style.b18, { color: Colors.primary, }]}>$50</Text>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: theme.bg3, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.b14, { color: Colors.primary, }]}>2</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 3.7 }}>
                                    <ImageBackground source={require('../../assets/image/i21.png')}
                                        resizeMode='stretch' style={{ height: height / 8, flex: 1, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Airtight Cactus</Text>
                                    <Text style={[style.b18, { color: Colors.primary, }]}>$72</Text>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: theme.bg3, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.b14, { color: Colors.primary, }]}>2</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>
                        <Text style={[style.t1, { color: theme.txt, marginTop: 10 }]}>Choose Shipping</Text>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ChooseShip')}
                            style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <Icons name='truck' size={25} color={Colors.primary}></Icons>
                                <Text style={[style.b18, { marginLeft: 10, flex: 1, color: theme.txt }]}>Choose Shipping Type</Text>
                                <Icons name='chevron-right' size={24} color={theme.txt}></Icons>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>
                        <Text style={[style.t1, { color: theme.txt, marginTop: 10 }]}>Promo Code</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View style={[style.txtinput, { flex: 1, backgroundColor: theme.input, borderColor: theme.border, }]}>
                                <TextInput placeholder='Enter Promo Code'
                                    selectionColor={Colors.primary}
                                    placeholderTextColor={Colors.disable}
                                    style={{ flex: 1, color: theme.txt, fontSize: 14, marginLeft: 10 }} />
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Promo')}
                            style={{ height: 48, width: 48, borderRadius: 24, backgroundColor: Colors.primary, marginLeft: 8, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='add' size={25} color={Colors.secondary}></Icon>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 5, marginTop: 10, marginBottom: 20 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor:Colors.active, padding: 10, borderRadius: 12 }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={[style.m14, { color: theme.txt3, }]}>Amount</Text>
                                    <Text style={[style.s16, { color: theme.txt2, }]}>$250</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                                    <Text style={[style.m14, { color: theme.txt3, }]}>Shipping</Text>
                                    <Text style={[style.s16, { color: theme.txt2, }]}>-</Text>
                                </View>
                                <View style={[style.divider, { backgroundColor: theme.border, marginTop: 8 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                                    <Text style={[style.m14, { color: theme.txt3, }]}>Total</Text>
                                    <Text style={[style.s16, { color: theme.txt2, }]}>-</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                    <View style={{ paddingVertical: 10, backgroundColor: theme.bg }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Payment1')}
                            style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={[style.btntxt, { marginRight: 5 }]}>Continue to Payment</Text>
                            <Icons name='arrow-right-thin' size={20} color={Colors.secondary}></Icons>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}