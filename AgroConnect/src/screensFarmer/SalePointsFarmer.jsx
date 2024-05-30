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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SalePointsFarmer() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { products } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const [amounts, setAmounts] = useState([0, 0, 0]);
    const [total, setTotal] = useState(0);
    const [prices, setPrices] = useState([0, 0, 0]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { farm } = useContext(UsersContext);

    const salesPoints = [
        {
            nav: 'SalePointFarmer',
            img: 'https://meshek-kirshner.co.il/wp-content/uploads/2022/02/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%A7-%D7%A7%D7%99%D7%A8%D7%A9%D7%A0%D7%A8.png',
            title: 'האתרוג 2, נתניה',
            address: '10.04.2024',
            nav2: 'Review',
            rank: '4.7',
            timer: 'עוד 8 ימים'
        },
        {
            nav: 'SalePointFarmer',
            img: 'https://mesheq77.co.il/wp-content/uploads/2018/06/logo300.png',
            title: 'החרוב 1, אחיטוב',
            address: '15.04.2024',
            nav2: 'Review',
            rank: '4.4',
            timer: 'עוד 13 ימים'
        },
        {
            nav: 'SalePointFarmer',
            img: 'https://michaelio.co.il/wp-content/uploads/2021/07/meshek_michaeli_logo.png',
            title: 'משק מיכאלי',
            address: '07.04.2024',
            nav2: 'Review',
            rank: '4.8',
            timer: 'עוד 5 ימים'
        },
    ];//salesPoints

    const SalePoiontsList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
            {salesPoints.map((item, index) => (
                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                    <TenderShowMoreElement key={index} nav={item.nav} img={item.img} title={item.title} address={item.address} nav2={item.nav2} rank={item.rank} timer={item.timer} style={{ flex: 1 }} />
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
                <Text style={[style.s18, { marginStart: (width / 7), color: theme.txt, fontSize: 25 }]}>נקודות המכירה שלי</Text>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 0, }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateSalePoint')}
                        style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={[style.btntxt, { marginRight: 5 }]}>יצירת נקודת מכירה</Text>
                        <Icons name='plus-circle' size={20} color={Colors.secondary}></Icons>
                    </TouchableOpacity>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                </View>
            </View>

            {/* Tender Info */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <SalePoiontsList />

                    {/* Total amount and checkout */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 60, }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Payment1')}
                                style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={[style.btntxt, { marginRight: 5 }]}>הזמנות</Text>
                                <Icons name='cart-outline' size={20} color={Colors.secondary}></Icons>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )//return

    async function newTotal() {
        sum = 0;
        for (i = 0; i < amounts.length; i++) {
            sum += amounts[i] * product[i].price;
        }//for
        setTotal(sum);
    }//newTotal

}//SalePointsFarmer