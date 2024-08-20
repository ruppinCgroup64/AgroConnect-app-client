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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SalePoints() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { products } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const [amounts, setAmounts] = useState([0, 0, 0]);
    const [total, setTotal] = useState(0);
    const [prices, setPrices] = useState([0, 0, 0]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { farm } = useContext(UsersContext);
    const { salePoints, getSalePoints } = useContext(SalePointContext);
    const [farmPictures, setFarmPictures] = useState({});
    const [loading, setLoading] = useState(true);

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
    }, []);

    if (loading) {
        return <Loading></Loading> // Render a loading state while fetching data
    }

    const SalePoiontsList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
            {salePoints
                .filter(item => Math.floor(((fixDate(item.dateHour)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)) > 0)
                .map((item, index) => (
                    <View key={index} style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 15 }}>
                        <TenderShowMoreElement
                            key={index}
                            nav={'SalePoint'}
                            img={farmPictures[item.farmNum]}
                            title={item.address}
                            address={(item.dateHour.split(" "))[0]}
                            nav2={item.nav2}
                            rank={item.rank}
                            timer={"עוד " + Math.floor(((fixDate(item.dateHour)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)) + " ימים"}
                            style={{ flex: 1 }} />
                    </View>
                ))}
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
                <Text style={[style.s18, { marginStart: (width / 4.5), color: theme.txt, fontSize: 25 }]}>נקודות מכירה</Text>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

            {/* Sale Points */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <SalePoiontsList />
                </ScrollView>

            </View>
        </SafeAreaView>
    )//return

}//SalePoints

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