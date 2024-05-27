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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SalePointsFarmer() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { products } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const [amounts, setAmounts] = useState([0, 0, 0]);
    const [total, setTotal] = useState(0);
    const [prices, setPrices] = useState([0, 0, 0]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { farm } = useContext(UsersContext);
    const image = { uri: 'https://meshek-kirshner.co.il/wp-content/uploads/2022/02/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%A7-%D7%A7%D7%99%D7%A8%D7%A9%D7%A0%D7%A8.png' };

    //Products
    const product = [
        {
            title: "אבטיח",
            measure: 'ק"ג',
            uri: "https://i5.walmartimages.com/asr/a83e3e11-9128-4d98-8f6f-8c144e0d8e5e.a5fafdef89b7430bd13cae9037294d87.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        },
        {
            title: "עגבניה",
            measure: 'ק"ג',
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp9t0zqSSZd0kK2s8K_xXad6RYXHNXU41fqxC9LWxGg&s",
        },
        {
            title: "אננס",
            measure: "יח'",
            uri: "https://bellvillemarket.co.za/wp-content/uploads/2020/11/pineapples.jpg",
        },
    ];//product

    const ProductList = () => {
        return (<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
            {products.map((product, index) => (
                <View key={index} style={{ width: "100%" }}>
                    <SalePointProductFarmerReadOnly
                        i={index}
                        title={product.name}
                        measure={'ק"ג'}
                        uri={product.pic}
                        amounts={amounts}
                        setAmounts={setAmounts}
                        prices={prices}
                        setPrices={setPrices}
                    />
                </View>
            ))}
        </View>
        );//return
    };//ProduceList

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            {/* Top Bar */}
            <View style={{ flexDirection: 'row', paddingTop: 15, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-forward" color={theme.txt} size={30} />
                </TouchableOpacity>
                <Text style={[style.s18, { marginStart: (width / 4) - 15, color: theme.txt, fontSize: 25 }]}>נקודות מכירה</Text>
            </View>

            {/* Tender Info */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>

                    {/* Products */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, marginRight: 10 }]}>מוצרים</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <ProductList />
                    </View>

                    {/* Total amount and checkout */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 60, }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Payment1')}
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

    async function newTotal() {
        sum = 0;
        for (i = 0; i < amounts.length; i++) {
            sum += amounts[i] * product[i].price;
        }//for
        setTotal(sum);
    }//newTotal

}//SalePointsFarmer