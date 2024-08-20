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
import { OrderContext } from '../Context/OrderContext';
import OrderFarmer from '../components/OrderFarmer';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function OrdersFarmer({ route }) {
    const { id } = route.params;
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { consumer, allFarms, getAllFarms } = useContext(UsersContext);
    const { getOrdersByConsumer, orders, orderInPoint, getOrdersFarmerView } = useContext(OrderContext);
    const [orderDetails, setOrderDetails] = useState([]);
    const { products, getProducts } = useContext(ProductContext);
    const [loading, setLoading] = useState(true);
    const [currentFarm, setCurrentFarm] = useState();
    const [status, setStatus] = useState(false);

    const OrdersList = () => {
        if (orderDetails.length > 0) {
            return (
                <View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
                    {
                        orderDetails.map((item, index) => (
                            <View key={index} style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between' }}>
                                <OrderFarmer
                                    key={index}
                                    consumerPic={item.consumerPic}
                                    consumerName={item.consumerName}
                                    orderDateHour={item.orderDateHour}
                                    products={item.products}
                                    total={item.total} />
                            </View>
                        ))
                    }
                </View>
            );
        } else {
            return (
                <View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
                    <Text style={[style.s10, { color: theme.txt, fontSize: 18, textAlign: 'center' }]}>
                        עוד לא בוצעו הזמנות בנקודת מכירה זו
                    </Text>
                </View>
            );
        }
    };

    const init = async () => {
        await getOrdersFarmerView(id);
    };

    const manipulateData = async () => {
        console.log("orders",orders);
        if (!orders || orders.length === 0) {
            setLoading(false);
            return;
        }
        let newOrders = [];
        let currentOrderID = orders[0].ordersId;
        let newProducts = [];
        let productsCount = 0;
        let ordersCount = 0;
        for (let i = 0; i < orders.length; i++) {
            if (currentOrderID !== orders[i].ordersId) {
                newOrders.push({
                    consumerPic: orders[i].consumerPic,
                    consumerName: orders[i].consumerName,
                    orderDateHour: orders[i].orderDateHour,
                    products: newProducts,
                    total: orders[i].orderTotalPrice
                });
                currentOrderID = orders[i].ordersId;
                productsCount = 0;
                ordersCount++;
                newProducts = [];
            }
            newProducts.push({
                name: orders[i].productName,
                pic: orders[i].productPic,
                amount: orders[i].orderAmount,
                price: orders[i].unitpriceForSale
            });
            productsCount++;
        }
        newOrders.push({
            consumerPic: orders[orders.length - 1].consumerPic,
            consumerName: orders[orders.length - 1].consumerName,
            orderDateHour: orders[orders.length - 1].orderDateHour,
            products: newProducts,
            total: orders[orders.length - 1].orderTotalPrice
        });
        console.log("newOrders",newOrders);
        setStatus(true);
        setOrderDetails(newOrders);
        setLoading(false);
    };

    useEffect(() => {
        if (orders) {
            manipulateData();
        }
    }, [orders]);

    useFocusEffect(useCallback(() => {
        init();
    }, [id]));

    if (loading) {
        return <Loading />;
    }

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            {/* Top Bar */}
            <View style={{ flexDirection: 'row', paddingTop: 15, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-forward" color={theme.txt} size={30} />
                </TouchableOpacity>
                <Text style={[style.s18, { marginStart: (width / 3.5), color: theme.txt, fontSize: 25 }]}>הזמנות</Text>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

            {/* Orders */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <OrdersList />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
