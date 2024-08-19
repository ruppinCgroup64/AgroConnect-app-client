import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { UsersContext } from "../Context/UserContext";
import TenderHomeElement from "../components/TenderHomeElement";
import { TenderContext } from "../Context/TenderContext";
import Loading from "../components/Loading";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function FarmPage({ route }) {
  const { item } = route.params;//this is id of farm

  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [categoryIndex, setcategoryIndex] = useState(-1);
  const { farm, getFarms } = useContext(UsersContext);
  const { getTendersByFarm, TendersByFarm } = useContext(TenderContext);
  const [currentFarm, setCurrentFarm] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTenders();
  }, []);

  async function loadTenders() {
    let res = await getTendersByFarm(item);
    let resFarm= await getFarms();
    console.log(resFarm.find(f=>f.id==item))
    setCurrentFarm(resFarm.find(f=>f.id==item))
    if (res) {
      setLoading(false);
    }
  }
  if (loading) {
    return <Loading></Loading>; // Render a loading state while fetching data
  }


  
  const handlePress = () => {
    const url = currentFarm.socialNetworkLink;
    Linking.openURL(url);
  };

  const fixDate = (dateTimeString) => {
    const [datePart, timePart, period] = dateTimeString.split(" ");
    const [month, day, year] = datePart.split("/").map(Number);
    let [hours, minutes, seconds] = timePart.split(":").map(Number);

    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    return new Date(year, month - 1, day, hours, minutes, seconds);
  }; //fixDate

  const formatDate = (dateString) => {
    const [month, day, year] = dateString.split("/");
    return `${day}/${month}/${year}`;
  };

  const calculateTimeRemaining = (dateTime) => {
    const now = new Date();
    const targetDate = fixDate(dateTime);
    const timeDifference = targetDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      return "הזמן עבר";
    }

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    return `נותרו ${daysRemaining} ימים ${hoursRemaining} שעות`;
  };

  const TenderList = () => {
    return (
      <View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {TendersByFarm.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <TenderHomeElement
              item={item}
              nav={"Tender"}
              img={item.productPic}
              title={item.farmName}
              place={item.collectAddress}
              address={formatDate(item.closeDateHour.split(" ")[0])}
              timer={calculateTimeRemaining(item.closeDateHour)}
            />
            <View style={{ marginHorizontal: 115 }}></View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <AppBar
        elevation={0}
        title='עמוד משק'
        titleStyle={[style.apptitle,{ color: theme.txt, textAlign:"center", paddingRight:50 }]}
        style={{
          paddingHorizontal: 20,
          backgroundColor: "transparent",
          paddingTop: 15,
        }}
        leading={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-forward"
              color={theme.txt}
              size={30}
              style={{
                padding: 10,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        }
      />
      <View style={{ flex: 1, backgroundColor: theme.bg }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: 20, marginTop: 10 }}
        >
          <Image
            source={{ uri: currentFarm.mainPic }}
            style={{
              width: "100%",
              height: height / 3,
              borderRadius: 15,
              marginBottom: 15,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                style.subtitle,
                {
                  color: theme.txt,
                  fontSize: 15,
                  marginTop: 5,
                  marginBottom: 5,
                },
              ]}
            >
              <Text style={{ textDecorationLine: "underline" }}>שם המשק</Text>:{" "}
              {currentFarm.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                style.subtitle,
                {
                  color: theme.txt,
                  fontSize: 15,
                  marginTop: 5,
                  marginBottom: 5,
                },
              ]}
            >
              <Text style={{ textDecorationLine: "underline" }}>
                כתובת המשק
              </Text>
              : {currentFarm.address}
            </Text>
          </View>
          {currentFarm.socialNetworkLink != "" ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  style.subtitle,
                  {
                    color: theme.txt,
                    fontSize: 15,
                    marginTop: 5,
                    marginBottom: 5,
                  },
                ]}
              >
                <TouchableOpacity onPress={handlePress}>
                  <Text
                    style={[
                        style.subtitle,
                        {
                          color: "blue",
                          fontSize: 15,
                          marginTop: 5,
                          marginBottom: 5,
                          textDecorationLine: "underline",
                        },
                      ]}
                  >
                   לחץ למעבר לעמוד המשק
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          ) : null}
          {TendersByFarm ? (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={[style.t1, { color: theme.txt }]}>
                  מכרזים
                </Text>
              </View>
              <View style={{ marginTop: 15 }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  nestedScrollEnabled={true}
                >
                  <TenderList />
                </ScrollView>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  ); //return
} //farm page
