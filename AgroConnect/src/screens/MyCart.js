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

export default function MyCart() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='My Cart'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<Image source={require('../../assets/image/Logo.png')} style={{ height: height / 24, width: width / 12, resizeMode: 'stretch' }} />
                        }
                        trailing={<TouchableOpacity >
                            <Icon name="search-outline" color={theme.txt} size={28} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 3.7 }}>
                                    <ImageBackground source={require('../../assets/image/i1.png')}
                                        resizeMode='stretch' style={{ height: height / 8, flex: 1, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Prayer Plant</Text>
                                    <Text style={[style.b18, { color: Colors.primary, }]}>$29</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon name='remove' size={12} color={Colors.primary}></Icon>
                                            <Text style={[style.b14, { color: Colors.primary, marginHorizontal: 10 }]}>2</Text>
                                            <Icon name='add' size={12} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => this.RBSheet1.open()}>

                                            <RBSheet ref={ref => {
                                                this.RBSheet1 = ref;
                                            }}
                                                height={300}
                                                openDuration={100}
                                                customStyles={{
                                                    container: {
                                                        borderTopRightRadius: 20,
                                                        borderTopLeftRadius: 20,
                                                        backgroundColor: theme.bg2
                                                    }
                                                }}>
                                                <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                                    <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Remove From Cart ?</Text>
                                                    <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>

                                                    <View style={{ padding: 5, marginTop: 10 }}>
                                                        <View style={[style.shadow, { backgroundColor: theme.bg, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                                                            <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 3.7 }}>
                                                                <ImageBackground source={require('../../assets/image/i9.png')}
                                                                    resizeMode='stretch' style={{ height: height / 8, }} />
                                                            </View>
                                                            <View style={{ marginLeft: 10, flex: 1 }}>
                                                                <Text style={[style.b18, { color: theme.txt }]}>Rubber Fig Plant</Text>
                                                                <Text style={[style.b18, { color: Colors.primary, }]}>$99</Text>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', }}>
                                                                        <Icon name='remove' size={12} color={Colors.primary}></Icon>
                                                                        <Text style={[style.b14, { color: Colors.primary, marginHorizontal: 10 }]}>3</Text>
                                                                        <Icon name='add' size={12} color={Colors.primary}></Icon>
                                                                    </View>
                                                                    <TouchableOpacity>
                                                                        <Icons name='delete-outline' size={24} color={theme.txt}></Icons>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>

                                                    <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>
                                                    <View style={{ flexDirection: 'row', marginVertical: 20, }}>
                                                        <TouchableOpacity onPress={() => this.RBSheet1.close()}
                                                            style={[style.btn, { flex: 1, backgroundColor: theme.btn }]}>
                                                            <Text style={[style.btntxt, { color: theme.btntxt, }]}>Cancel</Text>
                                                        </TouchableOpacity>
                                                        <View style={{ margin: 5 }}></View>
                                                        <TouchableOpacity onPress={() => this.RBSheet1.close()}
                                                            style={[style.btn, { flex: 1 }]}>
                                                            <Text style={[style.btntxt, {}]}>Yes,Remove</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </RBSheet>

                                            <Icons name='delete-outline' size={24} color={theme.txt}></Icons>
                                        </TouchableOpacity>
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
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon name='remove' size={12} color={Colors.primary}></Icon>
                                            <Text style={[style.b14, { color: Colors.primary, marginHorizontal: 10 }]}>3</Text>
                                            <Icon name='add' size={12} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => this.RBSheet1.open()}>
                                            <Icons name='delete-outline' size={24} color={theme.txt}></Icons>
                                        </TouchableOpacity>
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
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon name='remove' size={12} color={Colors.primary}></Icon>
                                            <Text style={[style.b14, { color: Colors.primary, marginHorizontal: 10 }]}>2</Text>
                                            <Icon name='add' size={12} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => this.RBSheet1.open()}>
                                            <Icons name='delete-outline' size={24} color={theme.txt}></Icons>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10, marginBottom: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 15, }]}>
                                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 3.7 }}>
                                    <ImageBackground source={require('../../assets/image/i21.png')}
                                        resizeMode='stretch' style={{ height: height / 8, flex: 1, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Airtight Cactus</Text>
                                    <Text style={[style.b18, { color: Colors.primary, }]}>$72</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', }}>
                                            <Icon name='remove' size={12} color={Colors.primary}></Icon>
                                            <Text style={[style.b14, { color: Colors.primary, marginHorizontal: 10 }]}>2</Text>
                                            <Icon name='add' size={12} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => this.RBSheet1.open()}>
                                            <Icons name='delete-outline' size={24} color={theme.txt}></Icons>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 60, }}>
                        <View>
                            <Text style={[style.m12, { color: theme.txt3, }]}>Total price</Text>
                            <Text style={[style.apptitle, { color: theme.txt, }]}>$250</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Checkout')}
                                style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={[style.btntxt, { marginRight: 5 }]}>Checkout</Text>
                                <Icons name='arrow-right-thin' size={20} color={Colors.secondary}></Icons>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}