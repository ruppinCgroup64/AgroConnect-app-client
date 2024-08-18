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
} from 'react-native';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Colors } from '../theme/color';
import style from '../theme/style';
import themeContext from '../theme/themeContex';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';
import TenderHomeElement from '../components/TenderHomeElement';
import SquareImage from '../components/SquareImage';
import SalePointProduct from '../components/SalePointProduct';
import { SalePointContext } from '../Context/SalePointContext';
import { create, read, update, remove } from "../api";
import Loading from '../components/Loading';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function SalePoint({ route }) {
    const { item } = route.params;
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { getProductsInPoint, getProducts, allProducts, productsInPoint } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const [amounts, setAmounts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [total, setTotal] = useState(0);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { salePoint, getSalePoint } = useContext(SalePointContext);
    const [loading, setLoading] = useState(true);
    const { farmPoint, getFarmBySalePoint } = useContext(UsersContext);
    const [productsList, setProductsList] = useState(null);
    const [image, setImage] = useState(null);

    useFocusEffect(useCallback(() => {
        init();
    }, []))

    const init = async () => {
        await getProducts();
    }//init

    useEffect(() => {
        if (allProducts) {
            init2();
        }
    }, [allProducts])

    const init2 = async () => {
        await getSalePoint(item.id);
    }//init

    useEffect(() => {
        if (salePoint) {
            init3();
        }
    }, [salePoint])

    const init3 = async () => {
        await getProductsInPoint(item.id);
    }//init

    useEffect(() => {
        if (productsInPoint) {
            init4();
        }
    }, [productsInPoint])

    const init4 = async () => {
        await getFarmBySalePoint(item.id);
        if (farmPoint?.mainPic) {
            setImage({ uri: farmPoint.mainPic });
        }
    }//init

    useEffect(() => {
        if (image != null) {
            manipulateData();
        }
    }, [image])

    const manipulateData = () => {
        if (!productsInPoint || !Array.isArray(productsInPoint) || !allProducts || !Array.isArray(allProducts)) {
            console.error("productsInPoint or allProducts is not an array or is undefined");
            return;
        }

        let tempProducts = [];
        for (let i = 0; i < productsInPoint.length; i++) {
            if (!productsInPoint[i] || !productsInPoint[i].productInFarmNum) {
                console.error(`productsInPoint[${i}] is undefined or missing productInFarmNum`);
                continue;
            }
            for (let j = 0; j < allProducts.length; j++) {
                if (!allProducts[j] || !allProducts[j].id) {
                    console.error(`allProducts[${j}] is undefined or missing id`);
                    continue;
                }
                if (productsInPoint[i].productInFarmNum == allProducts[j].id) {
                    tempProducts[i] = {
                        i: i,
                        id: allProducts[j].id,
                        title: allProducts[j].name,
                        price: productsInPoint[i].unitPrice,
                        uri: allProducts[j].pic
                    };
                }
            }
        }
        console.log("tempProducts: ", tempProducts);
        setProductsList(tempProducts);
        setLoading(false);
    }//manipulateData

    if (loading) {
        return <Loading />;
    }

    const dateHour = salePoint?.dateHour ? salePoint.dateHour.split(" ")[0] : "N/A"; // Use default "N/A" if dateHour is null

    const ProductList = () => {
        if (!productsList || !Array.isArray(productsList) || productsList.length === 0) {
            return <Text>No products available</Text>;
        }

        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                {productsList.map((item, index) => (
                    <View key={index} style={{ width: "100%" }}>
                        <SalePointProduct
                            i={index}
                            title={item.title}
                            price={item.price}
                            measure={'ק"ג'}
                            uri={item.uri}
                            amounts={amounts}
                            setAmounts={setAmounts}
                            newTotal={newTotal}
                        />
                    </View>
                ))}
            </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={{ backgroundColor: theme.bg3, flex: 1 }}>
                <ImageBackground source={image} resizeMode='cover' style={{ height: height / 2.2, flex: 1 }}>
                    <AppBar
                        elevation={0}
                        style={{ paddingHorizontal: 20, backgroundColor: 'transparent', paddingTop: 15 }}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon
                                name="arrow-forward"
                                color={theme.txt}
                                size={30}
                                style={{
                                    padding: 10,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    borderRadius: 10,
                                }}
                            />
                        </TouchableOpacity>}
                    />
                </ImageBackground>
            </View>

            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>{salePoint.address}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5, marginEnd: 10 }]}>{(dateHour)}</Text>
                    </View>
                    {farmPoint && (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RoundedImage url={farmPoint.mainPic} wid={width / 7.2} hei={height / 16} />
                            <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5 }]}>  {farmPoint.name}</Text>
                        </View>
                    )}

                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, marginRight: 10 }]}>מוצרים</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ProductList />
                    </View>

                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 60 }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Payment1', { total, salePoint, productsInPoint, amounts })}
                                style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={[style.btntxt, { marginRight: 5 }]}>ביצוע קנייה</Text>
                                <Icons name='cart-outline' size={20} color={Colors.secondary} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[style.m12, { color: theme.txt3 }]}>מחיר כולל</Text>
                            <Text style={[style.apptitle, { color: theme.txt }]}>₪{total}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );

    async function newTotal() {
        if (!productsList || !Array.isArray(productsList) || productsList.length === 0) return;

        let sum = 0;
        for (let i = 0; i < productsList.length; i++) {
            sum += amounts[i] * productsList[i].price;
        }
        setTotal(sum);
    }
}
