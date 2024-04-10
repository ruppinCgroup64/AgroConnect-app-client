import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function MyWallet() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 10 }]}>

                <AppBar
                    color={theme.bg}
                    title='My Wallet'
                    titleStyle={[style.subtitle, { color: theme.txt }]}
                    // centerTitle={true}
                    elevation={0}
                    leading={<Image source={require('../../assets/image/Logo.png')}
                        resizeMode='stretch'
                        style={{ width: width / 8.5, height: height / 20 }}></Image>}
                    trailing={<TouchableOpacity onPress={() => navigation.navigate('Bookmark')}>
                        <Icon name="ellipsis-horizontal-circle"
                            color={theme.txt} size={30}
                        /></TouchableOpacity>
                    } />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Amount')}>
                            <Image source={require('../../assets/image/a16.png')}
                                resizeMode='stretch'
                                style={{ width: width - 40, height: height / 4.5 }}>
                            </Image>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Transaction History</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('TransactionHistory')}>
                            <Text style={[style.b16, { color: Colors.primary }]}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ height: 60, width: 60, backgroundColor: theme.bg3, borderRadius: 30 ,justifyContent:'center',alignItems:'center'}} >
                            <Image source={require('../../assets/image/i1.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6, alignSelf: 'center' }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b18, { color: theme.txt }]}>Prayer Plant</Text>
                                <Text style={[style.b16, { color: Colors.primary, }]}>$29</Text>
                            </View>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={[style.m14, { color: theme.txt3 }]}>Dec 15, 2024 | 10:00 AM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                                    <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 60, width: 60, alignSelf: 'center' }} />
                        <View style={{ flex: 1 }}>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b18, { color: theme.txt }]}>Top Up Wallet</Text>
                                <Text style={[style.b16, { color: Colors.primary, }]}>$100</Text>
                            </View>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={[style.m14, { color: theme.txt3 }]}>Dec 14, 2024 | 16:42 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Top Up</Text>
                                    <Icons name="arrow-down-box" color={Colors.primary} size={20} style={{ marginLeft: 5 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ height: 60, width: 60, backgroundColor: theme.bg3, borderRadius: 30 ,justifyContent:'center',alignItems:'center'}} >
                            <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6, alignSelf: 'center' }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b18, { color: theme.txt }]}>Rubber Fig Plant</Text>
                                <Text style={[style.b16, { color: Colors.primary, }]}>$99</Text>
                            </View>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={[style.m14, { color: theme.txt3 }]}>Dec 14, 2024 | 11:39 AM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                                    <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ height: 60, width: 60, backgroundColor: theme.bg3, borderRadius: 30 ,justifyContent:'center',alignItems:'center' }} >
                            <Image source={require('../../assets/image/i2.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6, alignSelf: 'center' }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b18, { color: theme.txt }]}>ZZ Plant</Text>
                                <Text style={[style.b16, { color: Colors.primary, }]}>$50</Text>
                            </View>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={[style.m14, { color: theme.txt3 }]}>Dec 13, 2024 | 14:46 PM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                                    <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom:70 }}>
                        <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 60, width: 60, alignSelf: 'center' }} />
                        <View style={{ flex: 1 }}>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[style.b18, { color: theme.txt }]}>Top Up Wallet</Text>
                                <Text style={[style.b16, { color: Colors.primary, }]}>$75</Text>
                            </View>
                            <View style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                <Text style={[style.m14, { color: theme.txt3 }]}>Dec 12, 2024 | 09:27 AM</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>Top Up</Text>
                                    <Icons name="arrow-down-box" color={Colors.primary} size={20} style={{ marginLeft: 5 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}