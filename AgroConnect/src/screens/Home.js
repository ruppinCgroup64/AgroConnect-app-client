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
import TenderHomeElement from '../components/TenderHomeElement';

// import Demo from './Demo';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const tenders = [
    {
        nav: 'ProDetail',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp9t0zqSSZd0kK2s8K_xXad6RYXHNXU41fqxC9LWxGg&s',
        title: '2 ק"ג עגבניה',
        address: 'רחוב מזה, פינת מפה',
        nav2: 'Review',
        rank: '4.8',
        timer: 'נותרו 1 ימים ו-13 שעות'
    },
    {
        nav: 'ProDetail',
        img: 'https://yogisorganic.com/cdn/shop/products/Pineapple_600x@2x.jpg?v=1496866405',
        title: '3 יחידות אננס',
        address: 'אחד העם 101',
        nav2: 'Review',
        rank: '4.3',
        timer: 'נותרו 12 שעות ו-36 דקות'
    },
    {
        nav: 'ProDetail',
        img: 'https://i5.walmartimages.com/asr/a83e3e11-9128-4d98-8f6f-8c144e0d8e5e.a5fafdef89b7430bd13cae9037294d87.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        title: 'אבטיח בינוני',
        address: 'אזור 51',
        nav2: 'Review',
        rank: '4.9',
        timer: 'נותרו 1 ימים ו-3 שעות'
    }
];

const fairs = [
    {
        nav: 'ProDetail',
        img: 'https://scontent.ftlv27-1.fna.fbcdn.net/v/t39.30808-6/434410289_810442257776382_7307582090524435555_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_lGRTslQw40Q7kNvgH2M48v&_nc_ht=scontent.ftlv27-1.fna&oh=00_AYCp9CMOX94-Pr_THSSt8gEk7ArF5nhQ-OqQVNOtyHBuqQ&oe=6645C4FE',
        title: 'שוק עמק חפר',
        address: '05.04.2024',
        nav2: 'Review',
        rank: '4.8',
        timer: 'עוד 3 ימים'
    },
    {
        nav: 'ProDetail',
        img: 'https://www.panoramacenter.co.il/wp-content/uploads/2017/07/shook-608x608.jpg',
        title: 'שוק איכרים',
        address: '12.04.2024',
        nav2: 'Review',
        rank: '4.6',
        timer: 'עוד 10 ימים'
    },
    {
        nav: 'ProDetail',
        img: 'https://media.reshet.tv/image/upload/t_image_article_800/v1699546480/uploads/2023/903796167.jpg',
        title: 'שוק צוק הדסה',
        address: '11.04.2024',
        nav2: 'Review',
        rank: '4.8',
        timer: 'עוד 9 ימים'
    }
];

const TenderList = () => {
    return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {tenders.map((item, index) => (
            <TouchableOpacity key={index}
                activeOpacity={0.8}>
                <TenderHomeElement key={index} nav={item.nav} img={item.img} title={item.title} address={item.address} nav2={item.nav2} rank={item.rank} timer={item.timer} />
                <View style={{ marginHorizontal: 105 }}></View>
            </TouchableOpacity>
        ))}
    </View>
    );
};

const FairsList = () => {
    return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {fairs.map((item, index) => (
            <TouchableOpacity key={index}
                activeOpacity={0.8}>
                <TenderHomeElement key={index} nav={item.nav} img={item.img} title={item.title} address={item.address} nav2={item.nav2} rank={item.rank} timer={item.timer} />
                <View style={{ marginHorizontal: 105 }}></View>
            </TouchableOpacity>
        ))}
    </View>
    );
};

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
                                <TenderList/>
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
                                <FairsList/>
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