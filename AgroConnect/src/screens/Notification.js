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
import { TenderContext } from "../Context/TenderContext";
import RoundedImage from "../components/RoundImage";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Notification() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const { consumer, getAlerts, alerts } = useContext(UsersContext);
  const { Tenders,getWinTenders } = useContext(TenderContext);
  const [loading, setLoading] = useState(true);
  const [winTendersList, setWinTendersList] = useState([]);

  async function loadAlerts() {
    let res = await getAlerts(consumer.id);
    let resWin = await getWinTenders(consumer.id);
    setWinTendersList(resWin);
    if (res.length > 0) {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadAlerts();
  }, []);

  const getTenderDetails = (tenderId, arr) => {
    return arr.find((item) => item.id == tenderId);
  };

  const parseDateString = (dateString) => {
    const [datePart, timePart, period] = dateString.split(" "); // מפריד בין התאריך, השעה והתקופה (AM/PM)
    const [month, day, year] = datePart.split("/").map(Number); // מפרק את התאריך לפורמט mm/dd/yyyy
    let [hours, minutes, seconds] = timePart.split(":").map(Number); // מפרק את השעה לפורמט hh:mm:ss

    // התאמת השעה לפי AM/PM
    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    return new Date(year, month - 1, day, hours, minutes, seconds); // יוצר אובייקט Date
  };

  const checkIfTimePassed = (closeDateH) => {
    const currentTime = new Date(); // הזמן הנוכחי
    const closeTimeDate = parseDateString(closeDateH); // המרת ה-closeTime לאובייקט Date
    let ans = closeTimeDate < currentTime;
    return ans; // אם הזמן הנוכחי גדול מ-closeTime, הפונקציה תחזיר true
  };

  const AlertsList = () => {
    
    if (alerts.length == 0 || Tenders.length == 0) return null;
    else {
      return alerts
        .map((item, index) => {
          let currentTender = getTenderDetails(item.id, Tenders);
          let currentTenderWin = getTenderDetails(item.id, winTendersList);
          let TenderToShow = {};
          console.log("currentTender", currentTender);
          console.log("currentTender winnnn", currentTenderWin);
          if (
            currentTender &&
            checkIfTimePassed(currentTender.closeDateHour) == false
          ) {
            TenderToShow = currentTender;
          }  else if(item.alertNum==3 && currentTenderWin)
          {return null}
          else if (currentTenderWin) {
            TenderToShow = currentTenderWin;
          }
          else return null;
          return (
            <TouchableOpacity key={index}
              onPress={() =>
                navigation.navigate("Tender", { item: TenderToShow })
              }
            >
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
                <RoundedImage
                  url={TenderToShow.productPic}
                  wid={width / 9}
                  hei={height / 20}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={[style.b18, { color: theme.txt, textAlign: "left" }]}
                  >
                    {item.alertNum==2? "זכית במכרז!":item.alertNum == 3 ? "מכרז זה עשוי לעניין אותך" : null}
                  </Text>
                  <Text
                    style={[
                      style.m14,
                      {
                        width: width / 1.5,
                        color: theme.txt2,
                        textAlign: "left",
                      },
                    ]}
                  >
                    משק: {TenderToShow.farmName}
                  </Text>
                  <Text
                    style={[
                      style.m14,
                      {
                        width: width / 1.5,
                        color: theme.txt2,
                        textAlign: "left",
                      },
                    ]}
                  >
                    מוצר: {TenderToShow.productName}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })
        .filter((item) => item != null);
    }
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
            <AlertsList />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
