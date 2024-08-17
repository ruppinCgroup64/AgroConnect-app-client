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
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';
import SalePointProductFarmerReadOnly from '../components/SalePointProductFarmerReadOnly';
import TenderShowMoreElement from '../components/TenderShowMoreElement';
import { SalePointContext } from '../Context/SalePointContext';
import Loading from '../components/Loading';
import { read } from '../api';
import Order from '../components/Order';
import { OrderContext } from '../Context/OrderContext';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const order = [
    {
        img: "https://yt3.googleusercontent.com/8id-4DSTsdgehTHSZnkHr8md0Dsitgp_5xbbtdE8hcglXBmoEtzz-HtyotsNjR8fnDCqjYEK=s900-c-k-c0x00ffffff-no-rj",
        name: "אברהם טל",
        dateTime: "26/02/2024",
        total: 44,
        products: [{
            name: "עגבניה",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/tomato.png",
            amount: "2",
            price: "14"
        },
        {
            name: "חציל",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/eggplant.png",
            amount: "1",
            price: "16"
        }]
    },
    {
        img: "https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/264429031_480835666739170_8502532355458902715_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P-6Z7fnc-BYQ7kNvgGGYf0b&_nc_ht=scontent.ftlv1-1.fna&oh=00_AYC_Wu6GZAKUcNtTY6dQAnzgh0jR2DuUn5dYG2ZYj7Ld0w&oe=66693085",
        name: "שחר חסון",
        dateTime: "02/03/2024",
        total: 46,
        products: [{
            name: "עגבניה",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/tomato.png",
            amount: "1",
            price: "14"
        },
        {
            name: "חציל",
            pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/eggplant.png",
            amount: "2",
            price: "16"
        }]
    }
]

export default function Orders() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { consumer, allFarms, getAllFarms } = useContext(UsersContext);
    const { getOrdersByConsumer, orders, orderInPoint, getOrderInPoint } = useContext(OrderContext);
    const [orderDetails, setOrderDetails] = useState(null);
    const { products, getProducts } = useContext(ProductContext);
    const [loading, setLoading] = useState(true);
    const [currentFarm, setCurrentFarm] = useState();

    const OrdersList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
            {orderDetails.map((item, index) => (
                <View key={index} style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                    <Order
                        key={index}
                        img={item.img}
                        name={item.name}
                        dateTime={item.dateTime}
                        products={item.products}
                        total={item.total}
                        style={{ flex: 1 }} />
                </View>
            ))}
        </View>
        );
    };

    const init = async () => {
        await getOrdersByConsumer(consumer.id);
        await getProducts();
        await getAllFarms();
    }//init

    const manipulateData = async () => {
        let newOrders = [];
        console.log("orders before length:", orders);
        for (i = 0; i < orders.length; i++) {
            let newProducts = await addOrderInPoint(orders[i].id);
            newOrder = {
                key: i,
                img: "",
                name: orders[i].id,
                dateTime: orders[i].dateHour,
                products: newProducts,
                total: orders[i].total,
                style: { flex: 1 }
            }//newOrder
            newOrders[i] = newOrder;
        }//for -> i
        setOrderDetails(newOrders);
        setLoading(false);
    }//manipulateData

    const addOrderInPoint = async (o) => {
        let newProducts = [];
        await getOrderInPoint(o);
        console.log("orderInPoint before length:", orderInPoint);
        for (j = 0; j < orderInPoint.length; j++) {
            if (orderInPoint[j].orderNum == o.id) {
                product = products.find(product => product.id === orderInPoint[j].productInFarmNum);
                productInPoint = {
                    name: product.name,
                    pic: product.pic,
                    amount: orderInPoint[j].amount,
                    price: ""
                }//productInPoint
                setCurrentFarm(allFarms.find(farm => farm.id === orderInPoint[j]));
                newProducts[j] = product;
            }//if
        }//for -> j

        if (newProducts.length == 0) {
            newProducts[0] = {
                name: "לא נמאו מוצרים",
                pic: "../../assets/image/a4.png",
                amount: "",
                price: ""
            }
        }//if -> newProducts.length

        return newProducts;
    }//addOrderInPoint

    useEffect(() => {
        if (orders) {
            manipulateData();
        }//useEffect
    }, [orders])
    useFocusEffect(useCallback(() => {
        init();
    }, []))

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            {/* Top Bar */}
            <View style={{ flexDirection: 'row', paddingTop: 15, paddingHorizontal: 20 }}>
                <Text style={[style.s18, { marginStart: (width / 7), color: theme.txt, fontSize: 25 }]}>הזמנות</Text>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

            {/* Orders */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <OrdersList />
                </ScrollView>

            </View>
        </SafeAreaView>
    )//return

}//Orders