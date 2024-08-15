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
import React, { useState, useContext, useEffect } from 'react'
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
import TenderShowMoreElementCons from '../components/TenderShowMoreElementCons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Tenders() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { getTenders} = useContext(TenderContext);
    const [loading, setLoading] = useState(true);
    const [tendersList, setTendersList] = useState([]);

    const formatDate = (dateString) => {
        const [month, day, year] = dateString.split('/');
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        loadTendersFarm();
    }, []);

    async function loadTendersFarm(){
        var result= await getTenders();
        if(result!={}){
            setTendersList(result);
            setLoading(false);
            console.log('result',result)
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