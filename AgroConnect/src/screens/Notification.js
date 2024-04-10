import { View, Text, Platform, Dimensions, SafeAreaView, TextInput, FlatList, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Notification() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                <AppBar
                    color={theme.bg}
                    title='Notification'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name="arrow-back"
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity >
                        <Icon name="ellipsis-horizontal-circle"
                            color={theme.txt} size={30}
                        /></TouchableOpacity>
                    } />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Today</Text>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { shadowColor: Colors.active, flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginTop: 10 }]}>
                            <Image source={require('../../assets/image/n1.png')}
                                resizeMode='stretch'
                                style={{ height: height / 16, width: width / 7 }}></Image>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[style.b18, { color: theme.txt }]}>30% Special Discount!</Text>
                                <Text style={[style.r14, { width: width / 1.5, color: theme.txt2 }]}>Special promotion only valid today</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={[style.b16, { color: theme.txt, marginTop: 20, marginBottom: 10 }]}>Yesterday</Text>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { shadowColor: Colors.active, flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginVertical: 10 }]}>
                            <Image source={require('../../assets/image/n2.png')}
                                resizeMode='stretch'
                                style={{ height: height / 16, width: width / 7 }}></Image>
                            <View style={{ marginLeft: 10, }}>
                                <Text style={[style.b18, { color: theme.txt }]}>Top Up E-Wallet Successful!</Text>
                                <Text style={[style.r14, { width: width / 1.5, color: theme.txt2 }]}>You have to top up your e-wallet</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { shadowColor: Colors.active, flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginTop: 10 }]}>
                            <Image source={require('../../assets/image/n3.png')}
                                resizeMode='stretch'
                                style={{ height: height / 16, width: width / 7 }}></Image>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[style.b18, { color: theme.txt }]}>New Services Available!</Text>
                                <Text style={[style.r14, { width: width / 1.5, color: theme.txt2 }]}>Now you can track orders in real time</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={[style.b16, { color: theme.txt, marginTop: 20, marginBottom: 10 }]}>December 22, 2024</Text>

                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { shadowColor: Colors.active, flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginVertical: 10 }]}>
                            <Image source={require('../../assets/image/n4.png')}
                                resizeMode='stretch'
                                style={{ height: height / 16, width: width / 7 }}></Image>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[style.b18, { color: theme.txt }]}>Credit Card Connected!</Text>
                                <Text style={[style.r14, { width: width / 1.5, color: theme.txt2 }]}>Credit Card has been linked!</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{ padding: 5 }}>
                        <View style={[style.shadow, { shadowColor: Colors.active, flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginTop: 10 }]}>
                            <Image source={require('../../assets/image/n5.png')}
                                resizeMode='stretch'
                                style={{ height: height / 16, width: width / 7 }}></Image>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[style.b18, { color: theme.txt }]}>Account Setup Successful!</Text>
                                <Text style={[style.r14, { width: width / 1.5, color: theme.txt2 }]}>Your account has been created!</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}