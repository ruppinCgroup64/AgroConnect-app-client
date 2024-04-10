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
  ScrollView,Modal
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Ticket() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [visible, setvisible] = useState(false)
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg,marginTop:10 }]}>
        <AppBar
          color={theme.bg}
          title='E-Receipt'
          titleStyle={{ color: theme.txt, fontFamily: 'Urbanist-Bold' }}
          elevation={0}
          leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
            <Icons name="arrow-left" color={theme.txt} size={25} />
          </TouchableOpacity>
          }
          trailing={<TouchableOpacity onPress={() => setvisible(true)}>
            <Modal transparent={true} visible={visible}>
              <View style={{ flex: 1 ,}}>
                <View style={{
                  right: 35, height: 150, width: 200, backgroundColor: theme.bg, position: 'absolute', marginTop: 42, borderRadius: 10, borderTopEndRadius: 2,
                  shadowColor: 'black',
                  shadowOffset: { width: 1, height: 1 },
                  shadowOpacity: 0.2, borderColor: 'black',
                  elevation: 10,
                  justifyContent:'center',
                }}>
                 

                  <TouchableOpacity onPress={() => {  setvisible(false)  }}>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                      <Icon name='paper-plane-outline' size={20} color={ theme.txt} />
                      <Text style={[style.b14, { color:  theme.txt, marginLeft: 5 }]}>Share E-Receipt</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={[style.divider,{backgroundColor:theme.border,marginVertical:10}]}></View>
                  <TouchableOpacity onPress={() => {  setvisible(false) }}>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                      <Icons name='file-download-outline' size={20} color={ theme.txt} />
                      <Text style={[style.b14, { color:  theme.txt, marginLeft: 5 }]}>Download E-Receipt</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={[style.divider,{backgroundColor:theme.border,marginVertical:10}]}></View>

                  <TouchableOpacity onPress={() => { setvisible(false) }} style={{marginBottom:10}} >
                    <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name='reader-outline' size={20} color={theme.txt} />
                      <Text style={[style.b14, { color: theme.txt, marginLeft: 5 }]}>Print</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
            </Modal>
            <Icons name="dots-horizontal-circle-outline" color={theme.txt} size={25} />
          </TouchableOpacity>}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={theme.a12}
              resizeMode='stretch'
              style={{ height: height / 7.5, width: width }} />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center',backgroundColor:theme.input, borderRadius: 20, borderRadius: 20, padding: 10,marginTop:10}}>
              <View style={{ height: height / 12, width: width / 5.3 ,backgroundColor:theme.bg3,borderRadius:50}} >
                  <Image source={require('../../assets/image/i1.png')} resizeMode='stretch' style={{ height: height / 13, width: width / 5.5}} />
              </View>
              <View style={{flex:1,marginLeft:10}}>
                  <Text style={[style.b18, { color: theme.txt,}]}>Prayer Plant</Text>
                  <Text style={[style.m12,{color:theme.txt3,marginHorizontal:10,marginTop:4}]}>Qty = 1</Text>
              </View>   
          </View>

          <View style={{ backgroundColor: theme.input, borderRadius: 10, padding: 12,marginTop:15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={[style.m14, { color: theme.txt2 }]}>Amount</Text>
              <Text style={[style.s16, { color: theme.txt }]}>$29</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={[style.m14, { color: Colors.primary }]}>Promo</Text>
              <Text style={[style.s16, { color: Colors.primary }]}>- $8</Text>
            </View>
            <View style={[style.divider,{backgroundColor:theme.border,marginVertical:10}]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={[style.m14, { color: theme.txt2, }]}>Total</Text>
              <Text style={[style.s16, { color: theme.txt }]}>$21</Text>
            </View>
          </View>

          <View style={{ marginVertical: 15 }}>
            <View style={{ backgroundColor: theme.input, borderRadius: 10, padding: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={[style.m14, { color: theme.txt2 }]}>Payment Methods</Text>
                <Text style={[style.s16, { color: theme.txt }]}>My E-Wallet</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={[style.m14, { color: theme.txt2, }]}>Date</Text>
                <Text style={[style.s16, { color: theme.txt, }]}>Dec 15, 2024 | 10:00:27 AM</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={[style.m14, { color: theme.txt2, }]}>Transaction ID</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[style.s16, { color: theme.txt }]}>SK273628837279</Text>
                  <Icon name="copy-outline" color={Colors.primary} size={20} style={{ marginLeft: 5 }} />
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={[style.m14, { color: theme.txt2, }]}>Status</Text>
                <View style={{ backgroundColor: Colors.primary, paddingVertical: 1, paddingHorizontal: 7, borderRadius: 5 }}>
                  <Text style={[style.r10, { color: Colors.secondary }]}>Paid</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginBottom:20 }}>
            <View style={{ backgroundColor: theme.input, borderRadius: 10, padding: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={[style.s14, { color: theme.txt2 }]}>Category </Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={[style.b16, { color: theme.txt }]}>Orders</Text>
                  <Icon name="chevron-down" color={theme.txt} size={20} style={{ marginLeft: 5 }} />
                </View>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}