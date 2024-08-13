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
import { OrderContext } from '../Context/OrderContext';
import Loading from '../components/Loading';
import { read } from '../api';
import Order from '../components/Order';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SalePointsFarmer({ route }) {

    const { salePointID } = route.params;
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { farm } = useContext(UsersContext);
    const { salePoint, getSalePoint } = useContext(SalePointContext);
    const [loading, setLoading] = useState(true);
    const [productsList, setProductsList] = useState(null);
    const { getProductsInPoint, getProducts, allProducts, productsInPoint } = useContext(ProductContext);
    const { getAllConsumers, allConsumers } = useContext(UsersContext);
    const { orders, getOrders, ordersInPoint, getOrdersInPoint } = useContext(OrderContext);
    const [AllOrders, setAllOrders] = useState(null);

    const OrdersList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
            {AllOrders.map((item, index) => (
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

        await getOrders();

        await getOrdersInPoint();

        //get all products
        await getProducts();

        //get all combine
        await getProductsInPoint(salePointID);

        await getAllConsumers();
    }//init

    const manipulateData = () => {
        // console.log('allProducts', allProducts);
        // console.log('salePoint', salePoint);
        // console.log('farmPoint', farmPoint);
        // console.log('productsInPoint', productsInPoint);
        console.log('allConsumers', allConsumers);
        console.log('orders', orders);
        console.log('ordersInPoint', ordersInPoint);

        for (i = 0; i < orders.length; i++) {
            let cNum = null;
            for (k = 0; k < allConsumers.length; k++) {
                if (orders[i].consumerNum == allConsumers[k].id)
                    cNum = k;
            }//for -> k
            let tempProducts = [];
            let Count = 0;
            for (j = 0; j < ordersInPoint.length; j++) {
                if (orders[i].id == ordersInPoint[j].orderNum) {
                    let product = findProduct(ordersInPoint[j]);
                    let productInPoint = findProductInPoint(ordersInPoint[j]);
                    tempProducts[Count] = {
                        name: product.name,
                        pic: product.pic,
                        amount: ordersInPoint[j].amount,
                        price: productInPoint.unitPrice
                    }//tempProducts
                    count++;
                }//if
            }//for -> j
            newOrders = AllOrders;
            total = calTotal(tempProducts);
            newOrders[i] = {
                key: index,
                img: allConsumers[cNum].profilePic,
                name: allConsumers[cNum].firstName + " " + allConsumers[cNum].lastName,
                dateTime: orders[i].dateHour,
                products: tempProducts,
                total: total
            };
            setAllOrders(newOrders);
        }//for -> i
        
        setLoading(false);
    }//manipulateData

    const findProduct = (product) => {
        for (i = 0; i < allProducts.length; i++) {
            if(allProducts[i].id == product.productInFarmNum)
                return allProducts[i]
        }//for -> i
    }//findProducts

    const findProductInPoint = (product) => {
        for (i = 0; i < productsInPoint.length; i++) {
            if(productsInPoint[i].id == product.productInFarmNum)
                return productsInPoint[i]
        }//for -> i
    }//findProducts

    const calTotal = (p) => {
        let total = 0;
        for(i=0;i<p.length;i++){
            total+= (p.amount * p.price);
        }//for -> i
    }//calTotal

    useEffect(() => {
        if (allProducts.length != 0 && productsInPoint.length && salePoint.address) {
            manipulateData();
        }
    }, [allProducts, salePoint, productsInPoint])
    useFocusEffect(useCallback(() => {
        init();
    }, []))

    if (loading)
        return <Loading></Loading>

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

            {/* Orders */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <OrdersList />
                </ScrollView>

            </View>
        </SafeAreaView>
    )//return

}//OrdersFarmer