import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
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
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ProDetail() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={{ backgroundColor: theme.bg3, flex: 1 }}>
                <ImageBackground source={require('../../assets/image/i21.png')} resizeMode='stretch' style={{ height: height / 2.2, flex: 1, }} >
                    <AppBar
                        elevation={0}
                        style={{ paddingHorizontal: 20, backgroundColor: 'transparent', paddingTop: 15 }}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                    />
                </ImageBackground>
            </View>
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[style.subtitle, { color: theme.txt, }]}>Airtight Cactus</Text>
                        <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <View style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 5, borderWidth: 1, borderColor: theme.btn, backgroundColor: theme.btn }}>
                            <Text style={[style.s10, { color: Colors.primary, }]}>3,284 Sold</Text>
                        </View>
                        <Icon name='star-half-sharp' size={20} color={Colors.primary} style={{ marginHorizontal: 10, }}></Icon>
                        <Text style={[style.m14, { color: theme.txt3, }]}>4.9 (4,795 reviews)</Text>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <Text style={[style.b18, { color: theme.txt, }]}>Description</Text>
                    <Text style={[style.r14, { color: theme.txt2, marginTop: 5 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Quantity</Text>
                        <View style={{ marginLeft: 10, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', }}>
                            <Icon name='remove' size={24} color={Colors.primary}></Icon>
                            <Text style={[style.b18, { color: Colors.primary, marginHorizontal: 10 }]}>2</Text>
                            <Icon name='add' size={24} color={Colors.primary}></Icon>
                        </View>
                    </View>
                </ScrollView>
                
                <View style={[style.divider, { backgroundColor: theme.border, marginTop: 15 }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 ,paddingVertical:10}}>
                    <View>
                        <Text style={[style.m12, { color: theme.txt3, }]}>Total price</Text>
                        <Text style={[style.apptitle, { color: theme.txt, }]}>$72</Text>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={[style.btn,{flexDirection:'row',alignItems:'center',justifyContent:'center'}]}>
                            <Icon1 name='handbag' size={20} color={Colors.secondary}></Icon1>
                            <Text style={[style.btntxt, {marginLeft:8}]}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}