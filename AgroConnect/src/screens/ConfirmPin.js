import { View, Text ,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,Modal,
    Platform,
} from 'react-native'
import React,{useState,useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function ConfirmPin() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [visible, setVisible] = useState(false)

    const e1 = useRef();
    const e2 = useRef();
    const e3 = useRef();
    const e4 = useRef();
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <View style={[style.main,{backgroundColor:theme.bg,marginTop:10}]}>
                <AppBar
                        color={theme.bg}
                        title='Top Up Wallet'
                        titleStyle={[style.apptitle,{ color: theme.txt, }]}
                        elevation={0}
                        leading={<TouchableOpacity
                        onPress={() => navigation.navigate('TopUpMethod')}
                        >
                            <Icon name="arrow-left"
                                // style={{ backgroundColor: Colors.secondary, }}
                                color={theme.txt} size={25}
                            />
                        </TouchableOpacity>
                        } />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{paddingTop:50}}>
                        <Text style={[style.s14,{color:theme.txt,textAlign:'center'}]}>Enter your PIN to confirm top up</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", paddingTop: 40 }}>
                        <TextInput ref={e1}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e2.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e2}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e3.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e3}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e4}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus();
                                }
                            }}
                        />

                    </View>
                    
                    <View style={{paddingVertical:20,marginTop:40}}>
                        <TouchableOpacity onPress={() => setVisible(true)}
                        style={[style.btn]}>
                            <Text style={[style.btntxt]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>
            </KeyboardAvoidingView>
            <Modal transparent={true}
                visible={visible}>
                <View style={{
                    // width: width,
                    flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true'
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 40, marginVertical: 130 }]}>
                        <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                            <TouchableOpacity onPress={() => setVisible(false)}
                                style={{ alignItems: 'flex-end' }}>
                                <Icon name="close" color={theme.txt} size={30} />
                            </TouchableOpacity>
                            <Image source={require('../../assets/image/n1.png')}
                                style={{ resizeMode: 'stretch', height: height / 6, width: width / 2.5, alignSelf: 'center', marginTop: 10 }}
                            />
                            <Text style={[style.apptitle, { color: Colors.primary, textAlign: 'center', marginTop: 20 }]}>Top Up Successful!</Text>
                            <Text style={[style.s14, { color: theme.txt, marginTop: 10, textAlign: 'center' }]}>The balance will be added to your wallet.</Text>
                        </View>
                        <View style={{ paddingVertical: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setVisible(false);
                                    navigation.navigate('MyTabs');
                                }}
                                style={[style.btn]}>
                                <Text style={[style.btntxt]}>Ok</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
    </SafeAreaView>
  )
}