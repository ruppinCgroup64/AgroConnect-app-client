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
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';
import SalePointProductFarmerReadOnly from '../components/SalePointProductFarmerReadOnly';
import { SalePointContext } from '../Context/SalePointContext';
import Loading from '../components/Loading';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function SalePointFarmer({ route }) {
    const { item } = route.params;
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { farm } = useContext(UsersContext);
    const { salePoint, getSalePoint } = useContext(SalePointContext);
    const [loading, setLoading] = useState(true);
    const [productsList, setProductsList] = useState(null);
    const { getProductsInPoint, getProducts, allProducts, productsInPoint } = useContext(ProductContext);
    const [image,setImage] = useState(null);

    const init = async () => {
        //get all products
        await getProducts();

        //get  all sales points 
        await getSalePoint(item.id);

        //get all sales points 
        await getSalePoint(item.id);

        //get all combine
        await getProductsInPoint(item.id);

        //loads the farm's picture
        await setImage({ uri: farm.mainPic });
    }//init

    const manipulateData = () => {

        //loads the products info.
        let tempProducts = [];
        for (i = 0; i < productsInPoint.length; i++) {
            for (j = 0; j < allProducts.length; j++) {
                if (productsInPoint[i].productInFarmNum == allProducts[j].id)
                    tempProducts[i] = {
                        i: i,
                        title: allProducts[j].name,
                        price: productsInPoint[i].unitPrice,
                        uri: allProducts[j].pic,
                        amount: productsInPoint[i].productAmount,
                        price: productsInPoint[i].unitPrice
                    };
            }//for -> j
        }//for -> i
        setProductsList(tempProducts);
        setLoading(false);
    }//manipulateData

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

    const ProductList = () => {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                {productsList.map((product, index) => (
                   <View key={index} style={{ width: "100%" }}>
                   <SalePointProductFarmerReadOnly
                       i={index}
                       title={product.title}
                       measure={'ק"ג'}
                       uri={product.uri}
                       amount={product.amount}
                       price={product.price}
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
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5, marginEnd: 10 }]}>{(salePoint.dateHour.split(" "))[0]}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RoundedImage url={farm.mainPic} wid={width / 7.2} hei={height / 16} />
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5 }]}>  {farm.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star-half-sharp' size={30} color={Colors.primary} style={{ marginHorizontal: 10 }} />
                            <Text style={[style.m14, { color: theme.txt3, fontSize: 24 }]}>{salePoint.rankPrice}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='logo-whatsapp' size={30} color={Colors.primary} />
                        </View>
                    </View>

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
                            <TouchableOpacity onPress={() => navigation.navigate('OrdersFarmer',item.id)}
                                style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={[style.btntxt, { marginRight: 5 }]}>הזמנות</Text>
                                <Icons name='cart-outline' size={20} color={Colors.secondary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
