import {
  View,
  Text,
  Platform,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { create, read, update, remove } from "../api";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from "../components/RoundImage";
import TenderHomeElement from "../components/TenderHomeElement";
import HomeTopBar from "../components/HomeTopBar";
import { SalePointContext } from "../Context/SalePointContext";
import Loading from "../components/Loading";
import { TenderContext } from "../Context/TenderContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function HomeFarmer() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const { consumer, farm, getFarms } = useContext(UsersContext);
  const { salePoints, getSalePoints } = useContext(SalePointContext);
  const { getTendersByFarm, TendersByFarm } = useContext(TenderContext);
  const [farmPictures, setFarmPictures] = useState({});
  const [loading, setLoading] = useState(true);

  const TenderList = () => {
    return (
      <View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {TendersByFarm.slice(0, 5).map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <TenderHomeElement
               item={item}
               nav={"TenderFarmer"}
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

  const formatDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
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
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `נותרו ${daysRemaining} ימים ${hoursRemaining} שעות`;
};

  async function loadTendersFarm() {
    var result = await getTendersByFarm(farm.id);
    let res1= await getFarms();
    if (result != {}) {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchSalePointsAndPictures = async () => {
      await getSalePoints();
      const fetchedSalePoints = await read("api/SalePoints");
      const pictures = {};
      for (const point of fetchedSalePoints) {
        const pic = await getFarmPic(point.farmNum);
        pictures[point.farmNum] = pic;
      }//for
      setFarmPictures(pictures);
      setLoading(false);
    };
    fetchSalePointsAndPictures();
    loadTendersFarm();
  }, []);

  if (loading) {
    return <Loading></Loading>; // Render a loading state while fetching data
  }//if -> loading

  const SalePoiontsList = () => {
    if (!salePoints || !Array.isArray(salePoints)) {
      return <Text>No sale points available</Text>;
    }

    return (
      <View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {salePoints
          .filter((item) => item.farmNum === farm.id) // Filter sale points with farmNum equal to the farm ID that's in the context
          .filter(
            (item) =>
              Math.floor(
                (fixDate(item.dateHour).getTime() - new Date().getTime()) /
                  (1000 * 3600 * 24)
              ) > 0
          )
          .map((item, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}>
              <TenderHomeElement
                nav={"SalePointFarmer"}
                img={farmPictures[item.farmNum]} // Use preloaded picture
                title={item.address}
                address={formatDate(item.dateHour.split(" ")[0])}
                nav2={item.id}
                item = {item}
                rank={item.rankPrice}
                timer={calculateTimeRemaining(item.dateHour)}
              />
              <View style={{ marginHorizontal: 115 }}></View>
            </TouchableOpacity>
          ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          {/* Top Bar */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RoundedImage
              url={consumer.profilePic}
              wid={width / 7.2}
              hei={height / 16}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text
                style={[style.m16, { color: theme.disable, textAlign: "left" }]}
              >
                שלום 👋
              </Text>
              <Text style={[style.t1, { color: theme.txt, textAlign: "left",fontFamily: "Heebo-SemiBold" }]}>
                {consumer.firstName + " " + consumer.lastName}
              </Text>
            </View>
          </View>

          <HomeTopBar farmer={true} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 10 }}
            nestedScrollEnabled={true}
          >
            {/* ~~~~~~~~~~~~~~  נקודות מכירה  ~~~~~~~~~~~~~~ */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={[style.t1, { color: theme.txt }]}>
                נקודות המכירה שלי
              </Text>
              <TouchableOpacity>
                <Text
                  style={[style.b16, { color: Colors.primary }]}
                  onPress={() => navigation.navigate("SalePointsFarmer")}
                >
                  ראה עוד
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
              >
                <SalePoiontsList />
              </ScrollView>
            </View>

            {/* ~~~~~~~~~~~~~~  מכרזים  ~~~~~~~~~~~~~~ */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={[style.t1, { color: theme.txt }]}>המכרזים שלי</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("TendersFarmer")}
              >
                <Text style={[style.b16, { color: Colors.primary }]}>
                  ראה עוד
                </Text>
              </TouchableOpacity>
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
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
} //HomeFarmer

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

const getFarmPic = async (farm_ID) => {
  const resFarms = await read("api/Farms");
  if (!resFarms || resFarms.length === 0) {
    console.error("No farms data available or failed to fetch.");
    return null;
  }

  const farm = resFarms.find((item) => item.id === farm_ID);
  if (!farm) {
    console.error("Farm not found.");
    return null;
  }

  return farm.mainPic;
};
