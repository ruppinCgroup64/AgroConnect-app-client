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

export default function Orders() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { consumer, allFarms, getAllFarms } = useContext(UsersContext);
    const { getOrdersByConsumer, orders, orderInPoint, getOrdersConsumerView } = useContext(OrderContext);
    const [orderDetails, setOrderDetails] = useState([{}]);
    const { products, getProducts } = useContext(ProductContext);
    const [loading, setLoading] = useState(true);
    const [currentFarm, setCurrentFarm] = useState();
    const [status, setStatus] = useState(false);
    const [loadingHelper, setLoadingHelper] = useState(1);

    const OrdersList = () => {
        if (status) {
            return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
                {
                    orderDetails.map((item, index) => (
                        <View key={index} style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                            <Order
                                key={index}
                                farmPic={item.farmPic}
                                salePointAddress={item.salePointAddress}
                                salePointDateHour={item.salePointDateHour}
                                orderDateHour = {item.orderDateHour}
                                farmName={item.farmName}
                                products={item.products}
                                total={item.total} />
                        </View>
                    ))}
            </View>
            );
        }//if -> status
        else {
            return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
                <Text style={[style.s10, { color: theme.txt, fontSize: 18, textAlign: 'center' }]}>
                    עוד לא קניתם? למה אתה מחכים?
                </Text>
                <Text style={[style.s10, { color: Colors.primary, fontSize: 22, textAlign: 'center' }]}>
                    תתחילו לקנות ולהנות!
                </Text>
            </View>
            );
        }//else
    };//orders list

    const init = async () => {
        await getOrdersConsumerView(consumer.id);
    }//init

    const manipulateData = async () => {
        if (orders.length == 0 || orders == null) {
            setLoading(false);
            return;
        }//if -> orders null
        let newOrders = [];
        let currentOrderID = orders[0].ordersId;
        let newProducts = [{}];
        let productsCount = 0;
        let ordersCount = 0;
        let total = 0;
        for (i = 0; i < orders.length; i++) {
            if (currentOrderID != orders[i].ordersId) {
                newOrders[ordersCount] = {
                    farmPic: orders[i].farmPic,
                    salePointAddress: orders[i].salePointAddress,
                    salePointDateHour: orders[i].salePointDateHour,
                    orderDateHour:  orders[i].orderDateHour,
                    farmName: orders[i].farmName,
                    products: newProducts,
                    total: total
                }// add order
                currentOrderID = orders[i].ordersId;
                productsCount = 0;
                ordersCount++;
                total = 0;
                newProducts = [{}];
            }//if -> new order
            newProducts[productsCount] = {
                name: orders[i].productName,
                pic: orders[i].productPic,
                amount: orders[i].productOrderAmount,
                price: orders[i].unitPriceForSale
            }//new product
            total += (orders[i].unitPriceForSale * orders[i].productOrderAmount);
            productsCount++;
        }//for -> i
        newOrders[ordersCount] = {
            farmPic: orders[orders.length - 1].farmPic,
            salePointAddress: orders[orders.length - 1].salePointAddress,
            salePointDateHour: orders[orders.length - 1].salePointDateHour,
            orderDateHour:  orders[orders.length - 1].orderDateHour,
            farmName: orders[orders.length - 1].farmName,
            products: newProducts,
            total: total
        }// add final order
        setStatus(true);
        setOrderDetails(newOrders);
        setLoading(false);
    }//manipulateData

    useEffect(() => {
        if (orders) {
            manipulateData();
        }//useEffect
    }, [orders])
    useFocusEffect(useCallback(() => {
        init();
    }, [loadingHelper]))

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingHelper(prevValue => (prevValue === 1 ? 0 : 1)); // שנה את הערך בין 1 ל-0
        }, 1000); // הפוך את הערך כל 5 שניות

        return () => clearInterval(interval); // נקה את ה-interval אם הקומפוננטה לא מורצת
    }, []); // הפעל את הקוד הזה רק פעם אחת כשהקומפוננטה מוטענת

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            {/* Top Bar */}
            <View style={{ flexDirection: 'row', paddingTop: 15, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[style.s18, { color: theme.txt, fontSize: 25, textAlign: 'center' }]}>הזמנות</Text>
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