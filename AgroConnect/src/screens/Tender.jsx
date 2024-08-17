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
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';
import TenderHomeElement from '../components/TenderHomeElement';
import SquareImage from '../components/SquareImage';
import LeadTable from '../components/LeadTable';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Tender({route}) {
  const { item } = route.params;

  const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const { farm } = useContext(UsersContext);
    const image = { uri: item.productPic };
    

    const formatDateTime = (dateTimeString) => {
      // Split the date and time parts
      const [datePart, timePart, period] = dateTimeString.split(' ');
      
      // Extract day, month, and year from datePart
      const [month, day, year] = datePart.split('/');
      
      // Extract hours and minutes from timePart
      let [hours, minutes, seconds] = timePart.split(':');
      
      // Convert hours to 24-hour format if needed
      if (period === 'PM' && hours !== '12') {
          hours = String(Number(hours) + 12);
      } else if (period === 'AM' && hours === '12') {
          hours = '00';
      }

      // Return formatted date and time
      return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

    return (
       <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
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
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                <Image source={image} style={{ width: '100%', height: height / 3, borderRadius: 15, marginBottom: 15 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>{item.packsAmount} ק"ג {item.productName}</Text>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5 }]}>  / מארז</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>
                            <Text style={{ textDecorationLine: 'underline' }}>כמות מארזים למכירה</Text>: {item.offeredPacks}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>
                            <Text style={{ textDecorationLine: 'underline' }}>מועד סגירת מכרז</Text>: {formatDateTime(item.closeDateHour)}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>
                            <Text style={{ textDecorationLine: 'underline' }}>מועד חלוקה</Text>: {formatDateTime(item.collectDateHour)}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>
                            <Text style={{ textDecorationLine: 'underline' }}>מועד סגירת חלוקה</Text>: {formatDateTime(item.collectDateHourClose)}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>
                            <Text style={{ textDecorationLine: 'underline' }}>מיקום חלוקה</Text>: {item.collectAddress}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <RoundedImage url={item.farmPic} wid={width / 9} hei={height / 20} />
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5, marginLeft: 10}]}>
                            {item.farmName}
                        </Text>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

                    <Text style={[style.t1, { color: Colors.primary , textAlign: 'center' }]}>טבלת המובילים</Text>
                    <LeadTable tenderId={item.id} closeTime={item.closeDateHour} minPrice={item.initialOffer} offeredPacks={item.offeredPacks}></LeadTable>
                </ScrollView>

            </View>
        </SafeAreaView>
    )//return
}//Tender