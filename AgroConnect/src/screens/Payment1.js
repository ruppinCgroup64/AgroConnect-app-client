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
    ScrollView
} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';
import SuccessAlert from "../components/SuccessAlert";
import { UsersContext } from '../Context/UserContext';
import { OrderContext } from '../Context/OrderContext';



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const now = new Date();
const formattedDateHour = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

export default function Payment1({ route }) {
    const { total, item, productsList, amounts } = route.params;
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);
    const [content, setContent] = useState("");
    const [navContinue, setNavContinue] = useState(false);
    const { consumer } = useContext(UsersContext);
    const { order, orders, createOrder, createOrderInPoint, orderInPoint, getOrdersByConsumer } = useContext(OrderContext);

    useEffect(() => {
        if (navContinue) {
            setContent("ההזמנה בוצעה בהצלחה"); //שליטה בתוכן לפי מה שהשרת יחזיר
        }
    }, [navContinue]);

    useEffect(() => {
        if (navContinue) {
            setShow(true);
        }
    }, [content]);

    useEffect(() => {
        if (navContinue) {
            const timer = setTimeout(() => {
                navigation.navigate("MyTabs");
            }, 2000);
        }
    }, [show]);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const makeOrder = async () => {
        const newOrder =
        {
            id: 0,
            dateHour: formattedDateHour,
            status: "שולם",
            totalPrice: total,
            consumerNum: consumer.id
        };
        await createOrder(newOrder);
        await console.log("new order: ", order);
        await getOrdersByConsumer(consumer.id);
        await delay(1000);
        await makeProductsOrder();
    }//makeOrder

    const makeProductsOrder = async () => {
        let l = orders.length;
        await console.log("orders: ", orders);
        for (i = 0; i < productsList.length; i++) {
            const newOrderInPoint = [{
                id: 0,
                salePointNum: item.id,
                productInFarmNum: productsList[i].id,
                orderNum: orders[l - 1].id,
                amount: amounts[i],
                rankProduct: 0
            }]
            await createOrderInPoint(newOrderInPoint);
            await console.log("orderInPoint ", orderInPoint);
        }//for -> i
        setNavContinue(true);
    }//makeProductsOrder

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 10 }]}>
                <AppBar
                    color={theme.bg}
                    title='תשלום'
                    titleStyle={[style.apptitle, { textAlign: 'left', color: theme.txt, }]} elevation={0}
                    leading={<TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Icon name="arrow-right" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity >
                        <Icon name="plus-box-outline" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[style.s14, { textAlign: 'left', color: theme.txt2, marginTop: 20 }]}>בחר אמצעי תשלום</Text>


                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center', borderColor: theme.input }]}>
                            <Image source={require('../../assets/image/paypal.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.txt, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>Paypal</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center', borderColor: theme.input }]}>
                            <Image source={require('../../assets/image/Google.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>Google pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center', borderColor: theme.input }]}>
                            <Image source={theme.apple}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>Apple Pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center', borderColor: theme.input }]}>
                            <Image source={theme.a9}
                                style={{ resizeMode: 'stretch', height: height / 33, width: width / 10 }}
                            />
                            <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>•••• •••• •••• •••• 4679</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="fourth"
                                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fourth')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 50, paddingBottom: 20 }}>
                        <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10, textAlign: 'center', marginBottom: 10 }]}>סה"כ לתשלום: {total}₪</Text>
                        <TouchableOpacity
                            onPress={() => { makeOrder() }}
                            style={[style.btn]}>
                            <Text style={[style.btntxt]}>בצע תשלום</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <SuccessAlert show={show} setShow={setShow} content={content} />
            </View>
        </SafeAreaView>
    )
}