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

export default function SearchR() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const categories = ['All', 'Cactus', 'Sansevieria', 'Palm', 'Yucca'];
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

    const categories1 = ['Popular', 'Most Recent', 'Price High', 'Price Low'];
    const [categoryIndex1, setcategoryIndex1] = useState(0)
    const Categorylist1 = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
            {categories1.map((item, index) => (
                <TouchableOpacity key={index}
                    activeOpacity={0.8}
                    onPress={() => setcategoryIndex1(index)}>
                    <Text
                        key={index}
                        style={[[style.categoryText, { color: Colors.primary, backgroundColor: theme.bg }], categoryIndex1 == index && [style.categoryTextSelected, {}]]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        );
    };

    const categories3 = ['5', '4', '3', '2', '1']
    const [categoryIndex3, setcategoryIndex3] = useState(0)

    const Categorylist3 = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, marginTop: 10 }]}>
            {categories3.map((item, index) => (
                <TouchableOpacity style={{ flexDirection: 'row' }}
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => setcategoryIndex3(index)}>
                    <View style={[
                        [style.categoryText,{backgroundColor:theme.bg,}],
                        categoryIndex3 == index && style.categoryTextSelected,
                        { flexDirection: 'row', alignItems: 'center' }
                    ]}>
                        <Icon name='star' style={[
                            style.ctext,
                            categoryIndex3 == index && style.cts,
                            { marginHorizontal: 5 }
                        ]} />

                        <Text
                            key={index}
                            style={[
                                style.ctext,
                                categoryIndex3 == index && style.cts,
                            ]}
                        >
                            {item}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg }]}>

                    <View style={[style.txtinput, { backgroundColor: theme.input, marginTop: 30, borderColor: theme.border, flexDirection: 'row', alignItems: 'center' }]}>
                        <Icon name="search" size={20} color={Colors.disable} />
                        <TextInput placeholder='Search...'
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.disable}
                            style={{ flex: 1, color: theme.txt, fontSize: 14, marginLeft: 10 }} />
                        <TouchableOpacity onPress={() => this.RBSheet.open()}>
                            <RBSheet ref={ref => {
                                this.RBSheet = ref;
                            }}
                                height={550}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: theme.bg2
                                    }
                                }}>
                                <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                                        <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Sort & Filter</Text>
                                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>
                                        <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Categories</Text>
                                        <View style={{ marginTop: 10 }}>
                                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
                                                <Categorylist />
                                            </ScrollView>
                                        </View>
                                        <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Price Range</Text>
                                        <Image source={theme.c1} style={{ width: width - 40, height: height / 8.5, resizeMode: 'stretch', marginTop: 15 }} />
                                        <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Sort by</Text>
                                        <View style={{ marginTop: 10 }}>
                                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
                                                <Categorylist1 />
                                            </ScrollView>
                                        </View>
                                        <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Rating</Text>
                                        <View style={{ marginTop: 10 }}>
                                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
                                                <Categorylist3 />
                                            </ScrollView>
                                        </View>
                                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>
                                        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                            <TouchableOpacity onPress={() => this.RBSheet.close()}
                                                style={[style.btn, { flex: 1, backgroundColor: theme.btn }]}>
                                                <Text style={[style.btntxt, { color: theme.btntxt, }]}>Reset</Text>
                                            </TouchableOpacity>
                                            <View style={{ margin: 5 }}></View>
                                            <TouchableOpacity onPress={() => this.RBSheet.close()}
                                                style={[style.btn, { flex: 1 }]}>
                                                <Text style={[style.btntxt, {}]}>Apply</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </ScrollView>
                                </View>
                            </RBSheet>
                            <Image source={require('../../assets/image/Filter.png')}
                                style={{ width: width / 19, height: height / 35, alignSelf: 'center', resizeMode: 'stretch' }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <Text style={[style.t1, { color: theme.txt, }]}>Results for "<Text style={[style.t1, { color: Colors.primary }]}>Sansevieria</Text>"</Text>
                        <Text style={[style.b16, { color: Colors.primary, }]}>12.75 founds</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>

                        <View style={{ marginTop: 15, flexDirection: 'row', }}>

                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail')} 
                                style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i15.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </TouchableOpacity>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sansevieria Trifasci...</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.9 |</Text>
                                    <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>5,399 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$33</Text>
                            </View>

                            <View style={{ marginHorizontal: 5 }}></View>

                            <View style={{ flex: 1, }}>
                                <TouchableOpacity onPress={() => navigation.navigate('ProDetail2')}
                                style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i16.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </TouchableOpacity>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sansevieria Cylindr..</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.8 |</Text>
                                    <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>5,382 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$32</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row', }}>

                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i17.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </TouchableOpacity>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sansevieria Robusta</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.5 |</Text>
                                    <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>6,372 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$35</Text>
                            </View>

                            <View style={{ marginHorizontal: 5 }}></View>

                            <View style={{ flex: 1, }}>
                                <TouchableOpacity style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i18.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </TouchableOpacity>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sansevieria Sunrise</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.3 |</Text>
                                    <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>4,387 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$29</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row', marginBottom: 20 }}>

                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i19.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </TouchableOpacity>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sansevieria Bird Nest</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.6 |</Text>
                                    <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>4,388 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$28</Text>
                            </View>

                            <View style={{ marginHorizontal: 5 }}></View>

                            <View style={{ flex: 1, }}>
                                <TouchableOpacity style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Icon name='heart-outline' size={24} color={Colors.primary}></Icon>
                                    </View>
                                    <ImageBackground source={require('../../assets/image/i20.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 6, flex: 1, marginTop: -25 }} />
                                </TouchableOpacity>
                                <Text style={[style.b18, { color: theme.txt, marginTop: 10, }]}>Sansevieria  Hahnii</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                                    <Text style={[style.m14, { color: theme.txt3, marginHorizontal: 10, }]}>4.5 |</Text>
                                    <View style={{ paddingHorizontal: 5, padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                        <Text style={[style.s10, { color: Colors.primary, }]}>5,331 Sold</Text>
                                    </View>
                                </View>
                                <Text style={[style.b18, { color: Colors.primary, }]}>$30</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}