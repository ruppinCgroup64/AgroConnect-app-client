import { View, Text, StyleSheet, SafeAreaView, ImageBackground, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import themeContext from '../theme/themeContex';
import RoundedImage from './RoundImage';
import { Colors } from '../theme/color'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFF',
        borderRadius: 100,
        overflow: 'hidden', // Moved overflow style here
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default function Order({ farmPic, salePointAddress, salePointDateHour, orderDateHour, farmName, products, total }) {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const datePart = salePointDateHour.split(' ')[0]; // חילוץ התאריך בלבד

    const [month, day, year] = datePart.split('/'); // מפרקים את החלקים לפי הסלאש

    // הרכבת התאריך בפורמט DD/MM/YYYY
    const formattedDate = `${day}/${month}/${year}`;


    // Products List
    const ProductsList = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10, flexDirection: 'column' }]}>
            {products.map((item, index) => (
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[style.s10, { color: theme.txt, fontSize: 20, textAlign: 'left' }]}>
                        X{item.amount}
                    </Text>
                    <View style={[styles.container, { width: width / 7.2, height: height / 16 }]}>
                        <Image source={{ uri: item.pic }} style={styles.image} />
                    </View>
                    <Text style={[style.s10, { color: theme.txt, fontSize: 20, textAlign: 'right' }]}>
                        {item.name}
                    </Text>
                    <Text style={[style.s10, { color: theme.txt, fontSize: 20, textAlign: 'right' }]}>
                        {item.price}₪
                    </Text>
                </View>
            ))}
        </View>
        );
    };

    return (
        <TouchableOpacity>
            <View style={{ width: width * 0.9 }}>
                <View style={{ width: width * 0.9, backgroundColor: theme.bg3, padding: 10, borderRadius: 15, marginBottom: 15 }}>
                    <TouchableOpacity zIndex={1}>
                        <View style={{ flexDirection: 'row' }}>

                            {/* Content */}
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    {/* dateTime */}
                                    <Text style={[style.s10, { color: theme.txt, fontSize: 15, textAlign: 'center' }]}>
                                        {orderDateHour}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <Text style={[style.s10, { color: Colors.primary, fontSize: 22, textAlign: 'center' }]}>
                                        {salePointAddress}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <Text style={[style.s10, { color: Colors.primary, fontSize: 18, textAlign: 'center' }]}>
                                        {formattedDate}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <RoundedImage url={farmPic} wid={width / 7.2} hei={height / 16} justifyContent='flex-start' />
                                    <Text style={[style.s10, { marginStart: 10, color: theme.txt, fontSize: 22, textAlign: 'right' }]}>
                                        {farmName}
                                    </Text>
                                </View>

                                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

                                {/* Products */}
                                <ProductsList />
                                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

                                {/* Total */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[style.s10, { color: theme.txt, fontSize: 20, textAlign: 'left' }]}>
                                        סה"כ
                                    </Text>
                                    <Text style={[style.s10, { color: Colors.primary, fontSize: 20, textAlign: 'right' }]}>
                                        {total}₪
                                    </Text>
                                </View>


                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: 10 }}></View>
        </TouchableOpacity>
    );//return

}//Order
