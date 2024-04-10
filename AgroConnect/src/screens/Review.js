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

export default function Review() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const categories = ['All', 'Monstera', 'Aloe', 'Palm', 'Yucca'];
    const [categoryIndex, setcategoryIndex] = useState(0)
    const Categorylist = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index}
                    activeOpacity={0.8}
                    onPress={() => setcategoryIndex(index)}>
                    <Text
                        key={index}
                        style={[[style.categoryText, { color: Colors.primary, backgroundColor: theme.bg }], categoryIndex == index && [style.categoryTextSelected, {}]]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        );
    };
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg ,marginTop:15}]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='4.6 (5,389 reviews)'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                        trailing={<TouchableOpacity >
                            <Icon name="search-outline" color={theme.txt} size={28} />
                        </TouchableOpacity>}
                    />

                    <View style={{ }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
                            <Categorylist />
                        </ScrollView>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                            <Avatar.Image source={require('../../assets/image/s1.png')} size={48}
                                style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b16, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Darlene Robertson</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Icon name='star' color={Colors.primary} size={15}></Icon>
                                    <Text style={[style.s14, { color: Colors.primary, marginLeft: 5 }]}>5</Text>
                                </View>
                                <Icon name='ellipsis-horizontal-circle' color={theme.txt} size={24} style={{ marginLeft: 5 }}></Icon>
                            </View>
                        </View>
                        <Text style={[style.r14, { color: theme.txt, marginTop: 5, }]}>The plant is very good, my son likes it very much and watching it every day 💯💯💯</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Icon name='heart' color={Colors.primary} size={24}></Icon>
                            <Text style={[style.m12, { color: Colors.primary, marginLeft: 5 }]}>729</Text>
                            <Text style={[style.m12, { color: theme.txt3, marginLeft: 15 }]}>6 days ago</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:15 }}>
                            <Avatar.Image source={require('../../assets/image/s2.png')} size={48}
                                style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b16, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Jane Cooper</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Icon name='star' color={Colors.primary} size={15}></Icon>
                                    <Text style={[style.s14, { color: Colors.primary, marginLeft: 5 }]}>4</Text>
                                </View>
                                <Icon name='ellipsis-horizontal-circle' color={theme.txt} size={24} style={{ marginLeft: 5 }}></Icon>
                            </View>
                        </View>
                        <Text style={[style.r14, { color: theme.txt, marginTop: 5, }]}>The seller is very fast in sending packet, I just bought it and the plant arrived in just 1 day! 👍👍</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Icon name='heart-outline' color={theme.txt} size={24}></Icon>
                            <Text style={[style.m12, { color: theme.txt, marginLeft: 5 }]}>625</Text>
                            <Text style={[style.m12, { color: theme.txt3, marginLeft: 15 }]}>6 days ago</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                            <Avatar.Image source={require('../../assets/image/s3.png')} size={48}
                                style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b16, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Jenny Wilson</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Icon name='star' color={Colors.primary} size={15}></Icon>
                                    <Text style={[style.s14, { color: Colors.primary, marginLeft: 5 }]}>4</Text>
                                </View>
                                <Icon name='ellipsis-horizontal-circle' color={theme.txt} size={24} style={{ marginLeft: 5 }}></Icon>
                            </View>
                        </View>
                        <Text style={[style.r14, { color: theme.txt, marginTop: 5, }]}>I just bought it and the plant is really good! I highly recommend it! 😁😁</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Icon name='heart' color={Colors.primary} size={24}></Icon>
                            <Text style={[style.m12, { color: Colors.primary, marginLeft: 5 }]}>578</Text>
                            <Text style={[style.m12, { color: theme.txt3, marginLeft: 15 }]}>6 days ago</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:15 }}>
                            <Avatar.Image source={require('../../assets/image/s4.png')} size={48}
                                style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b16, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Marvin McKinney</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Icon name='star' color={Colors.primary} size={15}></Icon>
                                    <Text style={[style.s14, { color: Colors.primary, marginLeft: 5 }]}>5</Text>
                                </View>
                                <Icon name='ellipsis-horizontal-circle' color={theme.txt} size={24} style={{ marginLeft: 5 }}></Icon>
                            </View>
                        </View>
                        <Text style={[style.r14, { color: theme.txt, marginTop: 5, }]}>The plant is very good, my son likes it very much and watching it every day 💯💯💯</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Icon name='heart-outline' color={theme.txt} size={24}></Icon>
                            <Text style={[style.m12, { color: theme.txt, marginLeft: 5 }]}>347</Text>
                            <Text style={[style.m12, { color: theme.txt3, marginLeft: 15 }]}>6 weeks ago</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:15 }}>
                            <Avatar.Image source={require('../../assets/image/s5.png')} size={48}
                                style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b16, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Theresa Webb</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Icon name='star' color={Colors.primary} size={15}></Icon>
                                    <Text style={[style.s14, { color: Colors.primary, marginLeft: 5 }]}>4</Text>
                                </View>
                                <Icon name='ellipsis-horizontal-circle' color={theme.txt} size={24} style={{ marginLeft: 5 }}></Icon>
                            </View>
                        </View>
                        <Text style={[style.r14, { color: theme.txt, marginTop: 5, }]}>The seller is very fast in sending packet, I just bought it and the plant arrived in just 1 day! 👍👍</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,marginBottom:20 }}>
                            <Icon name='heart-outline' color={theme.txt} size={24}></Icon>
                            <Text style={[style.m12, { color: theme.txt, marginLeft: 5 }]}>283</Text>
                            <Text style={[style.m12, { color: theme.txt3, marginLeft: 15 }]}>4 weeks ago</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}