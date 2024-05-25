import {
    View, Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
export default function SalePointProductFarmer({ i, title, measure, uri, amounts, setAmounts, prices, setPrices}) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const image = { uri };
    const [amount, setAmount] = useState(amounts[i]);
    const [price, setPrice] = useState(prices[i]);

    return (
        <View style={{ padding: 5, marginTop: 10 }}>
            <View style={[style.shadow, { backgroundColor: theme.bg, shadowColor: Colors.active, padding: 5, flexDirection: 'row', alignItems: 'center', borderRadius: 15, width: (width / 2) - 30 }]}>
                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 5.55 }}>
                    <ImageBackground source={image}
                        resizeMode='stretch' style={{ height: height / 12, }} />
                </View>
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.b18, { color: theme.txt, textAlign: 'left', marginStart: 5 }]}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[style.b18, { color: Colors.primary, marginStart: 5, fontSize: 16}]}>מחיר ל{measure}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, marginStart: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', width: width / 5.55, justifyContent: 'space-between' }}>
                            <Icon name='remove' size={12} color={Colors.primary} onPress={newPriceM}></Icon>
                            <Text style={[style.b14, { color: Colors.primary }]}>{price}</Text>
                            <Icon name='add' size={12} color={Colors.primary} onPress={newPriceP}></Icon>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[style.b18, { color: Colors.primary, marginStart: 5, fontSize: 16}]}>סחורה ב{measure}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, marginStart: 5, borderRadius: 15, backgroundColor: theme.bg3, flexDirection: 'row', alignItems: 'center', width: width / 5.55, justifyContent: 'space-between' }}>
                            <Icon name='remove' size={12} color={Colors.primary} onPress={newAmountM}></Icon>
                            <Text style={[style.b14, { color: Colors.primary }]}>{amount}</Text>
                            <Icon name='add' size={12} color={Colors.primary} onPress={newAmountP}></Icon>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );//return

    async function newAmountP() {
        const newAmounts = amounts;
        newAmounts[i]++;
        setAmounts(newAmounts);
        setAmount(amount + 1);
    }//newAmountP
    async function newAmountM() {
        if (amounts[i] > 0) {
            const newAmounts = amounts;
            newAmounts[i]--;
            setAmounts(newAmounts);
            setAmount(amount-1);
        }//if
    }//newAmountM
    async function newPriceP() {
        const newPrices = prices;
        newPrices[i]++;
        setPrices(newPrices);
        setPrice(price + 1);
    }//newAmountP
    async function newPriceM() {
        if (prices[i] > 0) {
            const newPrices = prices;
            newPrices[i]--;
            setPrices(newPrices);
            setPrice(price - 1);
        }//if
    }//newAmountM

}//SalePointProductFarmer