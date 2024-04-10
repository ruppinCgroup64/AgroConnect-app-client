import { View, Text, Platform, SafeAreaView, ImageBackground,KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
// import Demo from './Demo';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {

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
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Avatar.Image source={require('../../assets/image/u1.png')} size={48}></Avatar.Image>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.m16, { color: theme.disable, }]}>Good Morning 👋</Text>
                        <Text style={[style.t1, { color: theme.txt, }]}>Andrew Ainsley</Text>
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

                <View style={[style.txtinput, { backgroundColor: theme.input, marginTop: 20, borderColor: theme.border, flexDirection: 'row', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Icon name="search" size={20} color={Colors.disable} />
                    </TouchableOpacity>
                    <TextInput placeholder='Search...'
                        selectionColor={Colors.primary}
                        placeholderTextColor={Colors.disable}
                        style={{ flex: 1, color: theme.txt, fontSize: 14, marginLeft: 10 }} />
                    <Image source={require('../../assets/image/Filter.png')}
                        style={{ width: width / 19, height: height / 35, alignSelf: 'center' }}></Image>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }} nestedScrollEnabled={true}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={[style.t1, { color: theme.txt, }]}>Special Offers</Text>
                        <TouchableOpacity >
                            <Text style={[style.b16, { color: Colors.primary, }]}>See All</Text>
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, }}>
                        <Text style={[style.t1, { color: theme.txt, }]}>Most Popular</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Popular')}>
                            <Text style={[style.b16, { color: Colors.primary, }]}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
                            <Categorylist />
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: 15, flexDirection: 'row', }}>

                        <View style={{ flex: 1 }}>
                            <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                <ImageBackground source={require('../../assets/image/i3.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                    </TouchableOpacity>
                            </View>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sansevieria Trifasci...</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.5 |</Text>
                                <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Text style={[style.s10, { color: Colors.primary, }]}>5,277 Sold</Text>
                                </View>
                            </View>
                            <Text style={[style.b18, { color: Colors.primary, }]}>$32</Text>
                        </View>

                        <View style={{ marginHorizontal: 5 }}></View>

                        <View style={{ flex: 1, }}>
                            <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                <ImageBackground source={require('../../assets/image/i4.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                    </TouchableOpacity>
                            </View>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sago Palm Plant</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.7 |</Text>
                                <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Text style={[style.s10, { color: Colors.primary, }]}>2,378 Sold</Text>
                                </View>
                            </View>
                            <Text style={[style.b18, { color: Colors.primary, }]}>$28</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 15, flexDirection: 'row', }}>

                        <View style={{ flex: 1 }}>
                            <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                <ImageBackground source={require('../../assets/image/i5.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                    </TouchableOpacity>
                            </View>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Fiddle Leaf Fig</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.3 |</Text>
                                <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Text style={[style.s10, { color: Colors.primary, }]}>4,387 Sold</Text>
                                </View>
                            </View>
                            <Text style={[style.b18, { color: Colors.primary, }]}>$36</Text>
                        </View>

                        <View style={{ marginHorizontal: 5 }}></View>

                        <View style={{ flex: 1, }}>
                            <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                <ImageBackground source={require('../../assets/image/i6.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                    </TouchableOpacity>
                            </View>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Chinese Money</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.9 |</Text>
                                <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Text style={[style.s10, { color: Colors.primary, }]}>2,381 Sold</Text>
                                </View>
                            </View>
                            <Text style={[style.b18, { color: Colors.primary, }]}>$34</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 15, flexDirection: 'row', marginBottom: 70 }}>

                        <View style={{ flex: 1 }}>
                            <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                <ImageBackground source={require('../../assets/image/i7.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                    </TouchableOpacity>
                            </View>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Ear Cactus Plant</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.6 |</Text>
                                <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Text style={[style.s10, { color: Colors.primary, }]}>5,389 Sold</Text>
                                </View>
                            </View>
                            <Text style={[style.b18, { color: Colors.primary, }]}>$27</Text>
                        </View>

                        <View style={{ marginHorizontal: 5 }}></View>

                        <View style={{ flex: 1, }}>
                            <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
                                <ImageBackground source={require('../../assets/image/i8.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                    </TouchableOpacity>
                            </View>
                            <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Zebra Arrow Head</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                                <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                </TouchableOpacity>
                                <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.5 |</Text>
                                <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Text style={[style.s10, { color: Colors.primary, }]}>5,276 Sold</Text>
                                </View>
                            </View>
                            <Text style={[style.b18, { color: Colors.primary, }]}>$39</Text>
                        </View>
                    </View>

                </ScrollView>

            </View >
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}