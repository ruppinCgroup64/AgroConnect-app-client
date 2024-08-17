import {
  View,
  Text,
  Platform,
  Dimensions,
  SafeAreaView,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { UsersContext } from "../Context/UserContext";
import Loading from "../components/Loading";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Notification() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const { consumer, getAlerts, alerts, Tenders } = useContext(UsersContext);
  const [loading, setLoading] = useState(true);

  async function loadAlerts() {
    let res = await getAlerts(consumer.id);
    console.log("al", res);
    if (res.length > 0) {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadAlerts();
  }, []);

  const getTenderDetails=(tenderId)=>{
    return Tenders.find(item=> item.id=tenderId)
  }

  const parseDateString = (dateString) => {
    const [datePart, timePart, period] = dateString.split(' '); // מפריד בין התאריך, השעה והתקופה (AM/PM)
    const [month, day, year] = datePart.split('/').map(Number); // מפרק את התאריך לפורמט mm/dd/yyyy
    let [hours, minutes, seconds] = timePart.split(':').map(Number); // מפרק את השעה לפורמט hh:mm:ss
  
    // התאמת השעה לפי AM/PM
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
  
    return new Date(year, month - 1, day, hours, minutes, seconds); // יוצר אובייקט Date
  };
  
  const checkIfTimePassed = (closeDateH) => {
    const currentTime = new Date(); // הזמן הנוכחי
    const closeTimeDate = parseDateString(closeDateH); // המרת ה-closeTime לאובייקט Date
    let ans=  closeTimeDate<currentTime;
    return ans; // אם הזמן הנוכחי גדול מ-closeTime, הפונקציה תחזיר true
  };

  const alertsList = () => {
    return alerts.map((item, index) => {
      let currentTender = getTenderDetails(item.id);
      if(currentTender && checkIfTimePassed(currentTender.closeDateHour)==false)
      {
        return (
        <View
          key={index}
          style={[
            style.shadow,
            {
              shadowColor: Colors.active,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: theme.bg2,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
              marginTop: 10,
            },
          ]}
        >
          <Image
            source={currentTender.farmPic}
            resizeMode="stretch"
            style={{ height: height / 16, width: width / 7 }}
          ></Image>
          <View style={{ marginLeft: 10 }}>
            <Text style={[style.b18, { color: theme.txt }]}>
             {item.alertNum==2? "זכית במכרז!":item.alertNum==3?"מכרז זה עשוי לעניין אותך":null}
            </Text>
            <Text style={[style.r14, { width: width / 1.5, color: theme.txt2 }]}>
              {currentTender.farmName}
            </Text>
            <Text style={[style.r14, { width: width / 1.5, color: theme.txt2 }]}>
              {currentTender.productName}
            </Text>
          </View>
        </View>
      );
    }
    else
    return null;
    }).filter(item=>item!=null);
  };
  

  if (loading) {
    return <Loading></Loading>; // Render a loading state while fetching data
  }

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
        {/* Top Bar */}
        <View
          style={{
            flexDirection: "row",
            paddingTop: 15,
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-forward" color={theme.txt} size={30} />
          </TouchableOpacity>
          <Text
            style={[
              style.s18,
              { color: theme.txt, fontSize: 25, textAlign: "center", flex: 1 },
            ]}
          >
            התראות
          </Text>
        </View>
        <View
          style={[
            style.divider,
            { backgroundColor: theme.border, marginVertical: 15 },
          ]}
        ></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: 5 }}>
          <alertsList/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
