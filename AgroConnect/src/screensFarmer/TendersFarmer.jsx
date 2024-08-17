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
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';
import SalePointProductFarmerReadOnly from '../components/SalePointProductFarmerReadOnly';
import TenderShowMoreElement from '../components/TenderShowMoreElement';
import { SalePointContext } from '../Context/SalePointContext';
import Loading from '../components/Loading';
import { read } from '../api';
import { TenderContext } from '../Context/TenderContext';
import SquareImage from '../components/SquareImage';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function TendersFarmer() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { products } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const [amounts, setAmounts] = useState([0, 0, 0]);
    const [total, setTotal] = useState(0);
    const [prices, setPrices] = useState([0, 0, 0]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { farm } = useContext(UsersContext);
    const { TendersFarm, getTendersFarm, getTendersByFarm} = useContext(TenderContext);
    const [farmPictures, setFarmPictures] = useState({});
    const [loading, setLoading] = useState(true);
    const [TendersFarmList, setTendersFarmList] = useState([]);

    useFocusEffect(useCallback(() => {
        loadTendersFarm();
    }, []))

    const formatDate = (dateString) => {
        const [month, day, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };
    
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

    async function loadTendersFarm(){
        var result= await getTendersByFarm(farm.id);
        if(result!={}){
            setTendersFarmList(result);
            setLoading(false);
            console.log('result',result)
        }
    }

    if (loading) {
        return <Loading></Loading> // Render a loading state while fetching data
    }

    const TendersList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
            {TendersFarmList.length!=0?TendersFarmList
            // .filter(item => Math.floor(((fixDate(item.closeDateHour)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)) > 0)
            .map((item, index) => (
                <TouchableOpacity item={TendersFarmList[index]} key={index} style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                        <TenderShowMoreElement
                        key={index}
                        item={TendersFarmList[index]}
                        nav={'TenderFarmer'}
                        img={item.productPic}
                        title={item.productName}
                        place={item.collectAddress}
                        address={formatDate(item.closeDateHour.split(" ")[0])}
                        timer={calculateTimeRemaining(item.closeDateHour)}
                        style={{ flex: 1 }} />
                </TouchableOpacity>  
            )):null}
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
                <Text style={[style.s18, { marginStart: (width / 7), color: theme.txt, fontSize: 25 }]}>המכרזים שלי</Text>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 0, }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateTender')}
                        style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={[style.btntxt, { marginRight: 5 }]}>יצירת מכרז</Text>
                        <Icons name='plus-circle' size={20} color={Colors.secondary}></Icons>
                    </TouchableOpacity>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                </View>
            </View>

            {/* Sale Points */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
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