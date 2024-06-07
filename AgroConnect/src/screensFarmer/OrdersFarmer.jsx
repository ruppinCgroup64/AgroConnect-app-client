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
import Order from '../components/Order';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const orders = [
    {
        img: "https://yt3.googleusercontent.com/8id-4DSTsdgehTHSZnkHr8md0Dsitgp_5xbbtdE8hcglXBmoEtzz-HtyotsNjR8fnDCqjYEK=s900-c-k-c0x00ffffff-no-rj",
        name: "אברהם טל",
        dateTime: "26/02/2024",
        products: [{
            name: "עגבניה",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/uploadedFiles/tomato.png",
            amount: "2",
            price: "14"
        },
        {
            name: "חציל",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/uploadedFiles/eggplant.png",
            amount: "1",
            price: "16"
        }]
    },
    {
        img: "https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/264429031_480835666739170_8502532355458902715_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P-6Z7fnc-BYQ7kNvgGGYf0b&_nc_ht=scontent.ftlv1-1.fna&oh=00_AYC_Wu6GZAKUcNtTY6dQAnzgh0jR2DuUn5dYG2ZYj7Ld0w&oe=66693085",
        name: "שחר חסון",
        dateTime: "02/03/2024",
        products: [{
            name: "עגבניה",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/uploadedFiles/tomato.png",
            amount: "1",
            price: "14"
        },
        {
            name: "חציל",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/uploadedFiles/eggplant.png",
            amount: "2",
            price: "16"
        }]
    }
]

export default function SalePointsFarmer() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const OrdersList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
            {orders.map((item, index) => (
                <View key={index} style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                    <Order
                        key={index}
                        img={item.img}
                        name={item.name}
                        dateTime={item.dateTime}
                        products={item.products}
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
                <Text style={[style.s18, { marginStart: (width / 7), color: theme.txt, fontSize: 25 }]}>הזמנות</Text>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

            {/* Tender Info */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <OrdersList />

                    {/* Total amount and checkout */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 60, }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('CreateSalePoint')}
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

}//OrdersFarmer