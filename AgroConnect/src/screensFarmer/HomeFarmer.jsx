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

// import Demo from './Demo';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height



const tenders = [
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
        nav: 'Tender',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp9t0zqSSZd0kK2s8K_xXad6RYXHNXU41fqxC9LWxGg&s',
        title: '2 ק"ג עגבניה',
        address: 'רחוב מזה, פינת מפה',
        nav2: 'Review',
        rank: '4.8',
        timer: 'נותרו 1 ימים ו-13 שעות'
    },
    {
        nav: 'Tender',
        img: 'https://i5.walmartimages.com/asr/a83e3e11-9128-4d98-8f6f-8c144e0d8e5e.a5fafdef89b7430bd13cae9037294d87.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        title: 'אבטיח בינוני',
        address: 'אזור 51',
        nav2: 'Review',
        rank: '4.9',
        timer: 'נותרו 1 ימים ו-3 שעות'
    }
];//tenders

const fairs = [
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
    },
    {
        nav: 'ProDetail',
        img: 'https://scontent.ftlv27-1.fna.fbcdn.net/v/t39.30808-6/433611051_903026805164816_7769755400387813259_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jrCldMBMRjwQ7kNvgE_wJQG&_nc_ht=scontent.ftlv27-1.fna&oh=00_AYBqe4OXaZ9yMvhc-i5czcrxnK3tWSzVzExAP-Sg2bPO9g&oe=664BE032',
        title: 'שוק עמק חפר',
        address: '05.04.2024',
        nav2: 'Review',
        rank: '4.8',
        timer: 'עוד 3 ימים'
    },
];//fairs

// const salesPoints = [
//     {
//         nav: 'SalePointFarmer',
//         img: 'https://meshek-kirshner.co.il/wp-content/uploads/2022/02/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%A7-%D7%A7%D7%99%D7%A8%D7%A9%D7%A0%D7%A8.png',
//         title: 'האתרוג 2, נתניה',
//         address: '10.04.2024',
//         nav2: 'Review',
//         rank: '4.7',
//         timer: 'עוד 8 ימים'
//     },
//     {
//         nav: 'SalePointFarmer',
//         img: 'https://mesheq77.co.il/wp-content/uploads/2018/06/logo300.png',
//         title: 'החרוב 1, אחיטוב',
//         address: '15.04.2024',
//         nav2: 'Review',
//         rank: '4.4',
//         timer: 'עוד 13 ימים'
//     },
//     {
//         nav: 'SalePointFarmer',
//         img: 'https://michaelio.co.il/wp-content/uploads/2021/07/meshek_michaeli_logo.png',
//         title: 'משק מיכאלי',
//         address: '07.04.2024',
//         nav2: 'Review',
//         rank: '4.8',
//         timer: 'עוד 5 ימים'
//     },
// ];//salesPoints

const TenderList = () => {
    return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {tenders.map((item, index) => (
            <TouchableOpacity key={index}
                activeOpacity={0.8}>
                <TenderHomeElement key={index} nav={item.nav} img={item.img} title={item.title} address={item.address} nav2={item.nav2} rank={item.rank} timer={item.timer} />
                <View style={{ marginHorizontal: 115 }}></View>
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
                <View style={{ marginHorizontal: 115 }}></View>
            </TouchableOpacity>
        ))}
    </View>
    );
};



export default function HomeFarmer() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const { consumer } = useContext(UsersContext);
    const { salePoints, getSalePoints } = useContext(SalePointContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSalePoints = async () => {
            await getSalePoints();
            setLoading(false);
            console.log(salePoints[0]);
        };
        fetchSalePoints();
    }, []);

    if (loading) {
        return <View><Text>Loading...</Text></View>; // Render a loading state while fetching data
    }

    const SalePoiontsList = () => {
        return (
            <View style={[style.categorycontainer, { marginBottom: 10 }]}>
                {salePoints.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8}>
                        <TenderHomeElement
                            nav={'SalePointFarmer'}
                            img={(async () => { getFarmPic(item.farmNum)})}
                            title={item.address}
                            address={(item.dateHour.split(" "))[0]}
                            nav2={item.nav2}
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
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <Icons name='bell-outline' size={28} color={theme.txt} style={{}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Mywishlist')}>
                                <Icons name='heart-outline' size={28} color={theme.txt} style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <HomeTopBar farmer={true} />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }} nestedScrollEnabled={true}>

                        {/* ~~~~~~~~~~~~~~  נקודות מכירה  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>נקודות המכירה שלי</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]} onPress={() => navigation.navigate('SalePointsFarmer')}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <SalePoiontsList />
                            </ScrollView>
                        </View>


                        {/* ~~~~~~~~~~~~~~  מכרזים  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>המכרזים שלי</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <TenderList />
                            </ScrollView>
                        </View>


                        {/* ~~~~~~~~~~~~~~  ירידים  ~~~~~~~~~~~~~~ */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.t1, { color: theme.txt, }]}>ירידים</Text>
                            <TouchableOpacity >
                                <Text style={[style.b16, { color: Colors.primary, }]}>ראה עוד</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <FairsList />
                            </ScrollView>
                        </View>

                    </ScrollView>

                </View >
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}//HmoeFarmer

// ~ fixes the time format, so it can be manipulated
// INPUT → string that contains a date in the following format: 3/1/2024 12:00:00 AM
// OUTPUT → Date type varible that contains that date
const fixDate = (dateTimeString) => {
    // Split the date and time parts
    const [datePart, timePart, period] = dateTimeString.split(' ');

    // Split the date part into month, day, and year
    const [month, day, year] = datePart.split('/').map(Number);

    // Split the time part into hours, minutes, and seconds
    let [hours, minutes, seconds] = timePart.split(':').map(Number);

    // Adjust hours based on AM/PM
    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    // Create the Date object
    return new Date(year, month - 1, day, hours, minutes, seconds);
}//fixDate


// ~ gets the farm picture from the farmer's id
// INPUT → farmer id
// OUTPUT → the URL of the farm's picture
async function getFarmPic(farmerID) {
    let resFarm = await read("api/Farms/farmer/" + farmerID);

    if (resFarm && resFarm.length > 0) {
        return resFarm[0].mainPic;
    } else {
        return -1;
    }
}//getFarmPic