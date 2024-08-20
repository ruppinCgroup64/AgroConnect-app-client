import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    ScrollView,
} from 'react-native';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Colors } from '../theme/color';
import style from '../theme/style';
import themeContext from '../theme/themeContex';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundedImage from '../components/RoundImage';
import SalePointProductFarmerReadOnly from '../components/SalePointProductFarmerReadOnly';
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
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
    const [productsList, setProductsList] = useState([]);
    const [image, setImage] = useState(null);
    const { getProductsInPoint, getProducts, productsInPoint } = useContext(ProductContext);
    const [loadingHelper, setLoadingHelper] = useState(1);

    const init = async () => {
        // איפוס state לפני הטעינה
        setProductsList([]);
        setImage(null);
        setLoading(true); // התחל טעינה

        try {
            // טעינת נתונים
            await getSalePoint(item.id);
            await getProductsInPoint(item.id);

            // הצגת תמונת המשק ופרטים
            if (farm && farm.mainPic) {
                setImage({ uri: farm.mainPic });
            }

            // עיבוד נתונים לאחר הטעינה
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
            return;
        }

        const tempProducts = productsInPoint.map((product, index) => ({
            i: index,
            id: product.id,
            title: product.name,
            price: product.price,
            amount: product.amount,
            uri: product.pic
        }));

        setProductsList(tempProducts);
        setLoading(false); // סיום טעינה
    };

    useEffect(() => {
        if (productsInPoint.length && salePoint.address) {
            manipulateData();
        }
    }, [productsInPoint, salePoint]);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            init();
        }, [item.id, loadingHelper]) // וודא שהפונקציה init מתבצעת מחדש בכל מעבר לנקודת מכירה אחרת
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingHelper(0); // שנה את הערך ל-0 אחרי 2 שניות
        }, 750);

        return () => clearTimeout(timer); // נקה את הטיימר אם הקומפוננטה לא מורצת
    }, []); // הפעל את הקוד הזה רק פעם אחת כשהקומפוננטה מוטענת

    if (loading) {
        return <Loading />;
    }

    const ProductList = () => {
        if (!productsList || productsList.length === 0) {
            return <Text style={[style.s18, { color: theme.txt, textAlign: 'center', marginTop: 20 }]}>No Products were found</Text>;
        }

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

    const dateHour = salePoint?.dateHour ? salePoint.dateHour.split(" ")[0] : "N/A";

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
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RoundedImage url={farm.mainPic} wid={width / 7.2} hei={height / 16} />
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5 }]}>  {farm.name}</Text>
                    </View>
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
                            <TouchableOpacity onPress={() => navigation.navigate('OrdersFarmer', { id: salePoint.id })}
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
