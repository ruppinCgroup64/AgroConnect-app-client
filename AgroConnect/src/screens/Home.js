import { View, Text, Platform, SafeAreaView, ImageBackground, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';

// import Demo from './Demo';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { consumer } = useContext(UsersContext);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>

                    {/* Top Bar */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <RoundedImage url={consumer.profilePic} wid={width / 7.2} hei={height / 16} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={[style.m16, { color: theme.disable, }]}>שלום 👋</Text>
                            <Text style={[style.t1, { color: theme.txt, }]}>{consumer.firstName + " " + consumer.lastName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <Icons name='bell-outline' size={28} color={theme.txt} style={{}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Mywishlist')}>
                                <Icons name='heart-outline' size={28} color={theme.txt} style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }} nestedScrollEnabled={true}>

                        {/* ~~~~~~~~~~~~~~  מכרזים  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>מכרזים</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>

                                <View style={{ width: width / 2 }}>
                                    <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                            <ImageBackground source={require('../../assets/image/i1.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 5, flex: 1, marginTop: -25 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, }]}>Prayer Plant</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                            <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>4.8 |</Text>
                                        <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                            <Text style={[style.s10, { color: Colors.primary, }]}>4,268 Sold</Text>
                                        </View>
                                    </View>
                                    <Text style={[style.subtitle, { color: Colors.primary, }]}>$29</Text>
                                </View>

                                <View style={{ marginHorizontal: 10 }}></View>

                                <View style={{ width: width / 2 }}>
                                    <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                            <ImageBackground source={require('../../assets/image/i2.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 5, flex: 1, marginTop: -25 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, }]}>ZZ Plant</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                            <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>4.7 |</Text>
                                        <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                            <Text style={[style.s10, { color: Colors.primary, }]}>3,884 Sold</Text>
                                        </View>
                                    </View>
                                    <Text style={[style.subtitle, { color: Colors.primary, }]}>$25</Text>
                                </View>
                            </ScrollView>
                        </View>

                        {/* ~~~~~~~~~~~~~~  ירידים  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>ירידים</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>

                                <View style={{ width: width / 2 }}>
                                    <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                            <ImageBackground source={require('../../assets/image/i1.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 5, flex: 1, marginTop: -25 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, }]}>Prayer Plant</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                            <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>4.8 |</Text>
                                        <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                            <Text style={[style.s10, { color: Colors.primary, }]}>4,268 Sold</Text>
                                        </View>
                                    </View>
                                    <Text style={[style.subtitle, { color: Colors.primary, }]}>$29</Text>
                                </View>

                                <View style={{ marginHorizontal: 10 }}></View>

                                <View style={{ width: width / 2 }}>
                                    <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                            <ImageBackground source={require('../../assets/image/i2.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 5, flex: 1, marginTop: -25 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, }]}>ZZ Plant</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                            <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>4.7 |</Text>
                                        <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                            <Text style={[style.s10, { color: Colors.primary, }]}>3,884 Sold</Text>
                                        </View>
                                    </View>
                                    <Text style={[style.subtitle, { color: Colors.primary, }]}>$25</Text>
                                </View>
                            </ScrollView>
                        </View>


                        {/* ~~~~~~~~~~~~~~  נקודות מכירה  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>נקודות מכירה</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>

                                <View style={{ width: width / 2 }}>
                                    <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                            <ImageBackground source={require('../../assets/image/i1.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 5, flex: 1, marginTop: -25 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, }]}>Prayer Plant</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                            <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>4.8 |</Text>
                                        <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                            <Text style={[style.s10, { color: Colors.primary, }]}>4,268 Sold</Text>
                                        </View>
                                    </View>
                                    <Text style={[style.subtitle, { color: Colors.primary, }]}>$29</Text>
                                </View>

                                <View style={{ marginHorizontal: 10 }}></View>

                                <View style={{ width: width / 2 }}>
                                    <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                            <ImageBackground source={require('../../assets/image/i2.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 5, flex: 1, marginTop: -25 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, }]}>ZZ Plant</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                            <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                        </TouchableOpacity>
                                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>4.7 |</Text>
                                        <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                            <Text style={[style.s10, { color: Colors.primary, }]}>3,884 Sold</Text>
                                        </View>
                                    </View>
                                    <Text style={[style.subtitle, { color: Colors.primary, }]}>$25</Text>
                                </View>
                            </ScrollView>
                        </View>

                    </ScrollView>

                </View >
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}