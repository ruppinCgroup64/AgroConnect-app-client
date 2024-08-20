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
import Tender from "./Tender";

// import Demo from './Demo';
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//sort the tenders from the closest location
function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRad = (x) => x * Math.PI / 180;

  const R = 6371; // רדיוס כדור הארץ בקילומטרים
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
}

function sortTendersByDistance(tenders, currentLat, currentLon) {
  return tenders.sort((a, b) => {
      const distanceA = haversineDistance(currentLat, currentLon, parseFloat(a.latitude), parseFloat(a.longitude));
      const distanceB = haversineDistance(currentLat, currentLon, parseFloat(b.latitude), parseFloat(b.longitude));
      return distanceA - distanceB;
  });
}


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

export default function Home() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const { consumer } = useContext(UsersContext);
  const { salePoints, getSalePoints } = useContext(SalePointContext);
  const { getTenders, Tenders } = useContext(TenderContext);
  const [farmPictures, setFarmPictures] = useState({});
  const [loading, setLoading] = useState(true);
  const [tenders, settenders] = useState([]);

  //load tenders for the app
  async function loadTenders() {
    let res = await getTenders();
    if(res.length>0){
      const sortedTenders = sortTendersByDistance(res, consumer.latitude, consumer.longitude); 
      settenders(sortedTenders);
      setLoading(false);
    }
  }

  useEffect(() => {
    const fetchSalePointsAndPictures = async () => {
      await getSalePoints(); // Assuming getSalePoints sets salePoints state
      const fetchedSalePoints = await read("api/SalePoints"); // Adjust based on your actual API and context
      const pictures = {};
      for (const point of fetchedSalePoints) {
        const pic = await getFarmPic(point.farmNum);
        pictures[point.farmNum] = pic;
      }
      setFarmPictures(pictures);
      setLoading(false);
    };
    fetchSalePointsAndPictures();
    loadTenders();
  }, []);

  const TenderList = () => {
    return (
      <View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {tenders.slice(0, 5).map((item, index) => (
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

  if (loading) {
    return <Loading></Loading>; // Render a loading state while fetching data
  }

  const SalePoiontsList = () => {
    return (
      <View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {salePoints
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
                nav={"SalePoint"}
                img={farmPictures[item.farmNum]} // Use preloaded picture
                address={formatDate(item.dateHour.split(" ")[0])}
                place={item.address}
                nav2={item.id}
                item = { item }
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                <Icons
                  name="bell-outline"
                  size={28}
                  color={theme.txt}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <HomeTopBar />

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
              <Text style={[style.t1, { color: theme.txt }]}>נקודות מכירה</Text>
              <TouchableOpacity>
                <Text
                  style={[style.b16, { color: Colors.primary }]}
                  onPress={() => navigation.navigate("SalePoints")}
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
              <Text style={[style.t1, { color: theme.txt }]}>מכרזים</Text>
              <TouchableOpacity>
                <Text style={[style.b16, { color: Colors.primary }]}
                onPress={() => navigation.navigate("Tenders")}>
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
} //Home

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

  const farm = await resFarms.find((item) => item.id === farm_ID);
  if (!farm) {
    console.error("Farm not found.");
    return null;
  }

  return farm.mainPic;
};
