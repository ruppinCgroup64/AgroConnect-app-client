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

export default function Mywishlist() {
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
                <View style={[style.main, { backgroundColor: theme.bg,marginTop:15 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='My Wishlist'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                        trailing={<TouchableOpacity >
                            <Icon name="search-outline" color={theme.txt} size={28} />
                        </TouchableOpacity>}
                    />

                    <View style={{  }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
                            <Categorylist />
                        </ScrollView>
                    </View>


                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

                        <View style={{ marginTop: 15, flexDirection: 'row', }}>

                            <View style={{ flex: 1 }}>
                                <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i9.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </View>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Rubber Fig Plant</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.6 |</Text>
                                    <View style={{ paddingHorizontal:5,padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>5,378 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$33</Text>
                            </View>

                            <View style={{ marginHorizontal: 5 }}></View>

                            <View style={{ flex: 1, }}>
                                <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i10.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </View>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Dracaena Plant</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.8 |</Text>
                                    <View style={{paddingHorizontal:5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>5,287 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$29</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row', }}>

                            <View style={{ flex: 1 }}>
                                <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i11.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </View>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Yucca Plant</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.8 |</Text>
                                    <View style={{paddingHorizontal:5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>4,992 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$35</Text>
                            </View>

                            <View style={{ marginHorizontal: 5 }}></View>

                            <View style={{ flex: 1, }}>
                                <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i12.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </View>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Aspidistra Elatior</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.5 |</Text>
                                    <View style={{paddingHorizontal:5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>3,178 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$27</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row', marginBottom: 20 }}>

                            <View style={{ flex: 1 }}>
                                <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i13.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </View>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Latispinus Cactus</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.9 |</Text>
                                    <View style={{paddingHorizontal:5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>4,377 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$28</Text>
                            </View>

                            <View style={{ marginHorizontal: 5 }}></View>

                            <View style={{ flex: 1, }}>
                                <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i14.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </View>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Thimble Cactus</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.5 |</Text>
                                    <View style={{ paddingHorizontal:5,padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>3,921 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$25</Text>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}