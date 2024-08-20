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
    const [amounts, setAmounts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);
    const [image, setImage] = useState(null);
    const { salePoint, getSalePoint } = useContext(SalePointContext);
    const [farmPoint, setFarmPoint] = useState({});
    const { getProductsInPoint, productsInPoint } = useContext(ProductContext);
    const { allFarms, getAllFarms } = useContext(UsersContext);
    const [loadingHelper, setLoadingHelper] = useState(1);

    const init = async () => {
        // איפוס state לפני הטעינה
        setProductsList([]);
        setImage(null);
        setFarmPoint({});
        setTotal(0);
        setLoading(true); // התחל טעינה

        try {
            // טעינת נתונים
            await getSalePoint(item.id);
            await getProductsInPoint(item.id);
            await getAllFarms();

            // עיבוד הנתונים לאחר הטעינה
            manipulateData();
        } catch (error) {
            console.error("Error in init function:", error);
            setLoading(false); // עצור טעינה במקרה של שגיאה
        }
    };

    const manipulateData = () => {
        if (!productsInPoint || !Array.isArray(productsInPoint)) {
            setProductsList([]); // אם אין מוצרים, ודא שהרשימה ריקה
            setLoading(false);
        } else {
            const tempProducts = productsInPoint.map((product, index) => ({
                i: index,
                id: product.id,
                title: product.name,
                price: product.price,
                uri: product.pic
            }));

            setProductsList(tempProducts);
        }

        if (Array.isArray(allFarms)) {
            const farm = allFarms.find(farm => farm.id === item.farmNum);
            if (farm) {
                setImage({ uri: farm.mainPic });
                setFarmPoint(farm);
            }
        }

        setLoading(false); // סיום טעינה
    };

    useFocusEffect(
        useCallback(() => {
            init();
        }, [item, loadingHelper]) // וודא שהפונקציה init מתבצעת מחדש בכל מעבר לנקודת מכירה אחרת
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingHelper(0); // שנה את הערך ל-0 אחרי 2 שניות
        }, 1000);

        return () => clearTimeout(timer); // נקה את הטיימר אם הקומפוננטה לא מורצת
    }, []); // הפעל את הקוד הזה רק פעם אחת כשהקומפוננטה מוטענת

    if (loading) {
        return <Loading />;
    }

    const dateHour = salePoint?.dateHour ? salePoint.dateHour.split(" ")[0] : "N/A";

    const ProductList = () => {
        if (!productsList || productsList.length === 0) {
            return <Text style={[style.s18, { color: theme.txt, textAlign: 'center', marginTop: 20 }]}>No Products were found</Text>;
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
                        <Text style={[style.subtitle, { color: theme.txt }]}>{salePoint?.address}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5, marginEnd: 10 }]}>{dateHour}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RoundedImage url={farmPoint?.mainPic} wid={width / 7.2} hei={height / 16} />
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5 }]}>  {farmPoint?.name}</Text>
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
                            <TouchableOpacity onPress={() => navigation.navigate('Payment1', { total, item, productsList, amounts })}
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
