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
export default function SalePointProduct({i,title, price, measure, uri,amounts,setAmounts, newTotal}) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const image = { uri};
    const [amount, setAmount] = useState(amounts[i]);

    return (
        <View style={{ padding: 5, marginTop: 10 }}>
            <View style={[style.shadow, { backgroundColor: theme.bg, shadowColor: Colors.active, padding: 5, flexDirection: 'row', alignItems: 'center', borderRadius: 15, width: (width / 2) - 30 }]}>
                <View style={{ backgroundColor: theme.bg3, borderRadius: 20, width: width / 5.55 }}>
                    <ImageBackground source={image}
                        resizeMode='stretch' style={{ height: height / 12, }} />
                </View>
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.b18, { color: theme.txt, textAlign: 'left', marginStart: 5 }]}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.b18, { color: Colors.primary, marginStart: 5 }]}>₪{price}</Text>
                        <Text style={[style.b18, { color: "#000", fontSize: 15, marginStart: 5 }]}>/{measure}</Text>
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
        newAmounts[i] ++;
        setAmounts(newAmounts);
        setAmount(amount+1);
        newTotal();
    }//newAmountP
    async function newAmountM() {
        if (amounts[i] > 0) {
            const newAmounts = amounts;
            newAmounts[i]--;
            setAmounts(newAmounts);
            setAmount(amount-1);
            newTotal();
        }//if
    }//newAmountM

}//SalePointProduct