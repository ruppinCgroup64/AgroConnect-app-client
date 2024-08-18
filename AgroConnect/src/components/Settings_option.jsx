import {
  View, Text,
  TouchableOpacity,
} from 'react-native'
import style from '../theme/style'
import Icons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function Settings_option({theme, navTo, t, i }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navTo)} style={{padding:2}}>
      <View style={{ flexDirection: 'row', alignItems:"center" }}>
        <Icons name='chevron-back' size={20} color={theme.txt}></Icons>
        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, marginRight: 10 }]}> {t} </Text> 
        <Icons name={i} size={25} color={theme.txt} style={[{flex: 1 }]}/>
      </View>
    </TouchableOpacity>
  );//return

}//Settings_option