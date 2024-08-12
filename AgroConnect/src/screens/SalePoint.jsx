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
import React, { useState, useContext, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Colors } from '../theme/color';
import style from '../theme/style';
import themeContext from '../theme/themeContex';
import { useNavigation } from '@react-navigation/native';
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

const product = [
    {
        title: "עגבנייה",
        measure: 'ק"ג',
        price: 12,
        uri: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/tomato.png",
    },
    {
        title: "חציל",
        measure: 'ק"ג',
        price: 35,
        uri: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/eggplant.png",
    },
    {
        title: "תפוז",
        measure: 'ק"ג',
        price: 14,
        uri: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/orange.png",
    },
];

export default function SalePoint({ route }) {
    const { salePointID } = route.params;
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { getProductsInPoint, getProducts } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const [amounts, setAmounts] = useState([0, 0, 0]);
    const [total, setTotal] = useState(0);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { salePoint, getSalePoint } = useContext(SalePointContext);
    const [loading, setLoading] = useState(true);
    const [farm, setFarm] = useState(null);
    const productsInPoint = getProductsInPoint();
    const allProducts = getProducts();
    const products = [];
    i = 0;
    productsInPoint.forEach(product => {
        j = 0;
        while (product.productInFarmNum != allProducts[i].id) {
            j++;
        }
        products[i] = {
            i: i,
            salePointNum: salePoint.id,
            productInFarmNum: allProducts[j],
            productAmount: 0,
            unitPrice: product.unitPrice
        };
        i++;
    });

    useEffect(() => {
        const fetchSalePointFarm = async () => {
            try {
                await getSalePoint(salePointID);
                if (salePoint && salePoint.farmNum) {
                    const fetchedFarm = await getFarm(salePoint.farmNum);
                    setFarm(fetchedFarm);
                }
            } catch (error) {
                console.error("Failed to fetch sale point or farm data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSalePointFarm();
    }, [salePointID, getSalePoint, salePoint]);

    if (loading) {
        return <Loading></Loading>
    }

    const image = farm ? { uri: farm.mainPic } : null;
    const dateHour = salePoint?.dateHour ? salePoint.dateHour.split(" ")[0] : "N/A"; // Use default "N/A" if dateHour is null

    const ProductList = () => {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                {products.map((item, index) => (
                    <View key={index} style={{ width: "100%" }}>
                        <SalePointProduct
                            i={index}
                            title={item.title}
                            price={item.price}
                            measure={item.measure}
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
                    {farm && (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RoundedImage url={farm.mainPic} wid={width / 7.2} hei={height / 16} />
                            <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5 }]}>  {farm.name}</Text>
                        </View>
                    )}
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star-half-sharp' size={30} color={Colors.primary} style={{ marginHorizontal: 10 }} />
                            <Text style={[style.m14, { color: theme.txt3, fontSize: 24 }]}>{salePoint.rankPrice}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='logo-whatsapp' size={30} color={Colors.primary} />
                        </View>
                    </View> */}

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
                            <TouchableOpacity onPress={() => navigation.navigate('Payment1', { total })}
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
        let sum = 0;
        for (let i = 0; i < amounts.length; i++) {
            sum += amounts[i] * product[i].price;
        }
        setTotal(sum);
    }
}

const getFarm = async (farm_ID) => {
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

    return farm;
};
