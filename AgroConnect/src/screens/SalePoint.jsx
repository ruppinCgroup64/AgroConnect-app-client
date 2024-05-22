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
import React, { useState, useContext } from 'react'
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
import TenderHomeElement from '../components/TenderHomeElement';
import SquareImage from '../components/SquareImage';
import SalePointProduct from '../components/SalePointProduct';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SalePoint() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { products } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { farm } = useContext(UsersContext);
    const image = { uri: 'https://meshek-kirshner.co.il/wp-content/uploads/2022/02/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%A7-%D7%A7%D7%99%D7%A8%D7%A9%D7%A0%D7%A8.png' };

    //Products
    const Categorylist = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
            {products.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8}>
                    <View key={index}
                        style={[[style.categoryText, { flexDirection: 'row', color: Colors.primary, backgroundColor: theme.bg }], categoryIndex == index && [style.categoryTextSelected, {}]]}>
                        <RoundedImage url={item.url} wid={width / 10.8} hei={height / 24} />
                        <Text
                            key={index}
                            style={[[style.categoryText, { color: Colors.primary, backgroundColor: theme.bg, borderWidth: 0 }], categoryIndex == index && [style.categoryTextSelected, {}]]}>
                            {item.name}
                        </Text>

                    </View>
                </TouchableOpacity>
            ))}
        </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={{ backgroundColor: theme.bg3, flex: 1 }}>
                <ImageBackground source={image} resizeMode='cover' style={{ height: height / 2.2, flex: 1, }} >
                    <AppBar
                        elevation={0}
                        style={{ paddingHorizontal: 20, backgroundColor: 'transparent', paddingTop: 15 }}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="arrow-forward" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                    />
                </ImageBackground>
            </View>

            {/* Tender Info */}
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={[style.subtitle, { color: theme.txt, }]}>האתרוג 2, נתניה</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5, marginEnd: 10 }]}>10.04.2024</Text>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5 }]}>|</Text>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5, marginStart: 15 }]}>9:00-13:00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RoundedImage url={farm.mainPic} wid={width / 7.2} hei={height / 16} />
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5 }]}>  {farm.address}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star-half-sharp' size={30} color={Colors.primary} style={{ marginHorizontal: 10, }}></Icon>
                            <Text style={[style.m14, { color: theme.txt3, fontSize: 24 }]}>4.9</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='logo-whatsapp' size={30} color={Colors.primary}></Icon>
                        </View>
                    </View>

                    {/* Products */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, marginRight: 10 }]}>מוצרים</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <SalePointProduct title="עגבניה" price="16" measure='ק"ג' uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWp9t0zqSSZd0kK2s8K_xXad6RYXHNXU41fqxC9LWxGg&s" />
                        <SalePointProduct title="אננס" price="40" measure="יח'" uri="https://bellvillemarket.co.za/wp-content/uploads/2020/11/pineapples.jpg" />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <SalePointProduct title="אבטיח" price="55" measure="יח'" uri="https://i5.walmartimages.com/asr/a83e3e11-9128-4d98-8f6f-8c144e0d8e5e.a5fafdef89b7430bd13cae9037294d87.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
                    </View>

                    {/* Total amount and checkout */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginBottom: 60, }}>
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Checkout')}
                                style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={[style.btntxt, { marginRight: 5 }]}>ביצוע קנייה</Text>
                                <Icons name='cart-outline' size={20} color={Colors.secondary}></Icons>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[style.m12, { color: theme.txt3, }]}>מחיר כולל</Text>
                            <Text style={[style.apptitle, { color: theme.txt, }]}>₪250</Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )//return
}//SalePoint