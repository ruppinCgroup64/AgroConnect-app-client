import { View, Text, Platform, SafeAreaView, ImageBackground, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { create, read, update, remove } from "../api";
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
import HomeTopBar from '../components/HomeTopBar';
import { SalePointContext } from '../Context/SalePointContext';
import Loading from '../components/Loading';
import { TenderContext } from '../Context/TenderContext';

// import Demo from './Demo';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const theTenders = [
    {
        nav: 'Tender',
        img: 'https://bellvillemarket.co.za/wp-content/uploads/2020/11/pineapples.jpg',
        title: '3 יחידות אננס',
        address: 'אחד העם 101',
        nav2: 'Tender',
        rank: '4.3',
        timer: 'נותרו 12 שעות ו-36 דקות'
    },
    {
        nav: '',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp9t0zqSSZd0kK2s8K_xXad6RYXHNXU41fqxC9LWxGg&s',
        title: '2 ק"ג עגבניה',
        address: 'רחוב מזה, פינת מפה',
        nav2: 'Review',
        rank: '4.8',
        timer: 'נותרו 1 ימים ו-13 שעות'
    },
    {
        nav: '',
        img: 'https://i5.walmartimages.com/asr/a83e3e11-9128-4d98-8f6f-8c144e0d8e5e.a5fafdef89b7430bd13cae9037294d87.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        title: 'אבטיח בינוני',
        address: 'אזור 51',
        nav2: 'Review',
        rank: '4.9',
        timer: 'נותרו 1 ימים ו-3 שעות'
    }
];//tenders


export default function Home() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { consumer } = useContext(UsersContext);
    const { salePoints, getSalePoints } = useContext(SalePointContext);
    const { getTenders } = useContext(TenderContext);
    const [farmPictures, setFarmPictures] = useState({});
    const [loading, setLoading] = useState(true);
    const [tenders, settenders] = useState([]);

    async function loadTenders() {
        let res = await getTenders();
        settenders(res);
    }

    useEffect(() => {
        const fetchSalePointsAndPictures = async () => {
            await getSalePoints(); // Assuming getSalePoints sets salePoints state
            const fetchedSalePoints = await read("api/SalePoints"); // Adjust based on your actual API and context
            const pictures = {};
            for (const point of fetchedSalePoints) {
                const pic = await getFarmPic(point.farmNum);
                pictures[point.farmNum] = pic;
            }
            setFarmPictures(pictures);
            setLoading(false);
        };
        fetchSalePointsAndPictures();
        loadTenders();
    }, []);

    const TenderList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
            {theTenders.map((item, index) => (
                <TouchableOpacity key={index}
                    activeOpacity={0.8}>
                    <TenderHomeElement key={index} nav={item.nav} img={item.img} title={item.title} address={item.address} nav2={item.nav2} rank={item.rank} timer={item.timer} />
                    <View style={{ marginHorizontal: 115 }}></View>
                </TouchableOpacity>
            ))}
        </View>
        );
    };

    if (loading) {
        return <Loading></Loading> // Render a loading state while fetching data
    }



    const SalePoiontsList = () => {
        return (
            <View style={[style.categorycontainer, { marginBottom: 10 }]}>
                {salePoints
                    .filter(item => Math.floor(((fixDate(item.dateHour)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)) > 0)
                    .map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.8}>
                            <TenderHomeElement
                                nav={'SalePoint'}
                                img={farmPictures[item.farmNum]} // Use preloaded picture
                                title={item.address}
                                address={(item.dateHour.split(" "))[0]}
                                nav2={item.id}
                                rank={item.rankPrice}
                                timer={"עוד " + Math.floor(((fixDate(item.dateHour)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)) + " ימים"}
                            />
                            <View style={{ marginHorizontal: 115 }}></View>
                        </TouchableOpacity>
                    ))}
            </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>

                    {/* Top Bar */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <RoundedImage url={consumer.profilePic} wid={width / 7.2} hei={height / 16} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={[style.m16, { color: theme.disable, textAlign: "left" }]}>שלום 👋</Text>
                            <Text style={[style.t1, { color: theme.txt, textAlign: "left" }]}>{consumer.firstName + " " + consumer.lastName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Icons name='bell-outline' size={28} color={theme.txt} style={{}} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icons name='heart-outline' size={28} color={theme.txt} style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <HomeTopBar />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }} nestedScrollEnabled={true}>

                        {/* ~~~~~~~~~~~~~~  נקודות מכירה  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>נקודות מכירה</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]} onPress={() => navigation.navigate('SalePoints')}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <SalePoiontsList />
                            </ScrollView>
                        </View>

                        {/* ~~~~~~~~~~~~~~  מכרזים  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>מכרזים</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <TenderList />
                            </ScrollView>
                        </View>

                    </ScrollView>

                </View >
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}//Home

const fixDate = (dateTimeString) => {
    const [datePart, timePart, period] = dateTimeString.split(' ');
    const [month, day, year] = datePart.split('/').map(Number);
    let [hours, minutes, seconds] = timePart.split(':').map(Number);

    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    return new Date(year, month - 1, day, hours, minutes, seconds);
}//fixDate

const getFarmPic = async (farm_ID) => {
    const resFarms = await read("api/Farms");
    if (!resFarms || resFarms.length === 0) {
        console.error("No farms data available or failed to fetch.");
        return null;
    }

    const farm = await resFarms.find(item => item.id === farm_ID);
    if (!farm) {
        console.error("Farm not found.");
        return null;
    }

    return farm.mainPic;
};