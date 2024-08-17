import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import themeContext from '../theme/themeContex';
import { useNavigation } from '@react-navigation/native';
import SquareImage from './SquareImage';
import style from '../theme/style';
import { Colors } from '../theme/color';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function TenderHomeElement({ item,nav, img, title, address, place, timer }) {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(nav, { item: item })}>
            <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15, alignItems: 'center' }}>
                <SquareImage 
                    url={img}
                    wid={width / 5} // גודל התמונה הוקטן עוד יותר
                    hei={height / 13} 
                    style={{ alignSelf: 'center', marginBottom: 10 }} 
                />
                <Text style={[style.s10, { color: Colors.primary, fontSize: 20, textAlign: 'center' }]}>{title}</Text>
                <Text style={[style.apptitle, { color: theme.txt, fontSize: 15, textAlign: 'center' }]}>{address}</Text>
                <Text style={[style.apptitle, { color: theme.txt, fontSize: 12, textAlign: 'center' }]}>{place}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                    <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                        <Text style={[style.s10, { color: Colors.primary, textAlign: 'center' }]}>{timer}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 10 }}></View>
        </TouchableOpacity>
    );
}
