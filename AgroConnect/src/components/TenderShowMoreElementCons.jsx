import { View, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import themeContext from '../theme/themeContex';
import SquareImage from './SquareImage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function TenderShowMoreElementCons({ item, nav, img, title, Fname,place, address, rank, timer }) {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.bg }}>
            <TouchableOpacity onPress={() => navigation.navigate(nav, { item: item })}>
                <View style={{ width: width * 0.9, alignSelf: 'center', marginBottom: 20 }}>
                    <View style={{ backgroundColor: theme.bg3, padding: 10, borderRadius: 15, flexDirection: 'row' }}>
                        {/* Image on the Left */}
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate(nav, { item: item })}>
                            <SquareImage url={img} wid={width / 2.25} hei={height / 5} />
                        </TouchableOpacity>
                        
                        {/* Text on the Right */}
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[style.s10, { color: Colors.primary, fontSize: 25, textAlign: 'center', marginBottom: 0 }]}>{Fname}</Text>
                            <Text style={[style.s10, { color: Colors.primary, fontSize: 15, textAlign: 'center', marginBottom: 5 }]}>{title}</Text>
                            <Text style={[style.apptitle, { color: theme.txt, fontSize: 20, textAlign: 'center' }]}>{address}</Text>
                            <Text style={[style.apptitle, { color: theme.txt, fontSize: 12, textAlign: 'center' }]}>{place}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                {rank ? (
                                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                        <Icon name='star-half-sharp' size={20} color={Colors.primary} />
                                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10 }]}>{rank} |</Text>
                                    </View>
                                ) : null}
                                <View style={{ padding: 2, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                                    <Text style={[style.s10, { color: Colors.primary }]}>{timer}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    ); //return

    function liked() {
        console.log("like");
    } //liked
}
