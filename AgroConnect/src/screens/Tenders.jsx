import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Switch,
} from 'react-native'
import React, { useState, useContext, useEffect, useCallback } from 'react'
import { useFonts } from 'expo-font';
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import { ProductContext } from "../Context/ProductsContext";
import RoundedImage from '../components/RoundImage';
import SalePointProductFarmerReadOnly from '../components/SalePointProductFarmerReadOnly';
import TenderShowMoreElement from '../components/TenderShowMoreElement';
import { SalePointContext } from '../Context/SalePointContext';
import Loading from '../components/Loading';
import { read } from '../api';
import { TenderContext } from '../Context/TenderContext';
import { UsersContext } from '../Context/UserContext';
import SquareImage from '../components/SquareImage';
import TenderShowMoreElementCons from '../components/TenderShowMoreElementCons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Tenders() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { getTenders, getWinTenders, getBidTenders} = useContext(TenderContext);
    const { consumer} = useContext(UsersContext);
    const [loading, setLoading] = useState(true);
    const [tendersList, setTendersList] = useState([]);
    const [bidTendersList, setBidTendersList] = useState([]);
    const [winTendersList, setWinTendersList] = useState([]);


    //sort the tenders from the closest location
    function haversineDistance(lat1, lon1, lat2, lon2) {
        const toRad = (x) => x * Math.PI / 180;
    
        const R = 6371; // רדיוס כדור הארץ בקילומטרים
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
    
        return d;
    }
    
    function sortTendersByDistance(tenders, currentLat, currentLon) {
        return tenders.sort((a, b) => {
            const distanceA = haversineDistance(currentLat, currentLon, parseFloat(a.latitude), parseFloat(a.longitude));
            const distanceB = haversineDistance(currentLat, currentLon, parseFloat(b.latitude), parseFloat(b.longitude));
            return distanceA - distanceB;
        });
    }


    const formatDate = (dateString) => {
        const [month, day, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };

    useFocusEffect(useCallback(() => {
        loadTendersFarm();
    }, []))

    async function loadTendersFarm(){
        let result1= await getTenders();
        let result2= await getWinTenders(consumer.id);
        let result3= await getBidTenders(consumer.id);

        console.log('result',result1)
        if(result1.length>0){
            const sortedTenders = sortTendersByDistance(result1, consumer.latitude, consumer.longitude); 
            setTendersList(sortedTenders);
            setLoading(false);
            console.log('result',result1)
        }

        if(result2.length>0){
            setWinTendersList(result2);
            console.log('result2',result2)
        }

        if(result3.length>0){
            setBidTendersList(result3);
            console.log('result3',result3)
        }
    }

    if (loading) {
        return <Loading></Loading> // Render a loading state while fetching data
    }

    const calculateTimeRemaining = (dateTime) => {
        const now = new Date();
        const targetDate = fixDate(dateTime);
        const timeDifference = targetDate.getTime() - now.getTime();
    
        if (timeDifference <= 0) {
            return "הזמן עבר";
        }
    
        const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
        return `נותרו ${daysRemaining} ימים ${hoursRemaining} שעות`;
    };
    
    const TendersList = () => {
        return (
            <View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
                {tendersList.length !== 0 ? tendersList.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                        
                        <TenderShowMoreElementCons
                            item={item}
                            nav={'Tender'}
                            img={item.productPic}
                            title={item.productName}
                            Fname={item.farmName}
                            place={item.collectAddress}
                            address={formatDate(item.closeDateHour.split(" ")[0])}
                            timer={calculateTimeRemaining(item.closeDateHour)}
                            style={{ flex: 1 }} 
                        />
                    </TouchableOpacity>  
                )) : null}
            </View>
        );
    };

    const TendersListBid = () => {
        return (
            <View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
                {bidTendersList.length !== 0 ? bidTendersList.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                        
                        <TenderShowMoreElementCons
                           item={item}
                           nav={'Tender'}
                           img={item.productPic}
                           title={item.productName}
                           Fname={item.farmName}
                           place={item.collectAddress}
                           address={formatDate(item.closeDateHour.split(" ")[0])}
                           timer={calculateTimeRemaining(item.closeDateHour)}
                           style={{ flex: 1 }} 
                        />
                    </TouchableOpacity>  
                )) : null}
            </View>
        );
    };

    const TendersListWin = () => {
        return (
            <View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
                {winTendersList.length !== 0 ? winTendersList.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                        
                        <TenderShowMoreElementCons
                            item={item}
                            nav={'Tender'}
                            img={item.productPic}
                            title={item.productName}
                            Fname={item.farmName}
                            place={item.collectAddress}
                            address={formatDate(item.closeDateHour.split(" ")[0])}
                            timer={calculateTimeRemaining(item.closeDateHour)}
                            style={{ flex: 1 }} 
                        />
                    </TouchableOpacity>  
                )) : null}
            </View>
        );
    };

    

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            {/* Top Bar */}
            <View style={{ flexDirection: 'row', paddingTop: 15, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-forward" color={theme.txt} size={30} />
                </TouchableOpacity>
                <Text style={[style.s18, { color: theme.txt, fontSize: 25, textAlign: 'center', flex: 1 }]}>מכרזים</Text>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
            {/* Tenders */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                {bidTendersList.length > 0 ? (
                <View>
                    <Text style={[style.m18, { color: theme.txt, fontSize: 15, textAlign: 'left', flex: 1, marginLeft: 5, textDecorationLine: 'underline' }]}>
                        מכרזים אליהם הגשתי הצעה
                    </Text>
                    <TendersListBid />
                </View>
            ) : null}
                {winTendersList.length>0 ? (
                <View>
                <Text style={[style.m18, { color: theme.txt, fontSize: 15, textAlign: 'left', flex: 1, marginLeft: 5, textDecorationLine: 'underline' }]}>
                   מכרזים שזכיתי בהם
                </Text>
                <TendersListWin />
            </View>
                ) : null}
                <Text style={[style.m18, { color: theme.txt, fontSize: 15, textAlign: 'left', flex: 1, marginLeft: 5, textDecorationLine: 'underline' }]}
                >כל המכרזים</Text>
                    <TendersList />
                </ScrollView>
            </View>
        </SafeAreaView>
    )//return

}//TendersFarmFarmer

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

    const farm = resFarms.find(item => item.id === farm_ID);
    if (!farm) {
        console.error("Farm not found.");
        return null;
    }

    return farm.mainPic;
};//getFarmPic