import {
  View,
  Text,
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
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { useFonts } from "expo-font";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";
import Icon1 from "react-native-vector-icons/SimpleLineIcons";
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from "../components/RoundImage";
import TenderHomeElement from "../components/TenderHomeElement";
import SquareImage from "../components/SquareImage";
import SalePointProduct from "../components/SalePointProduct";
import { SalePointContext } from "../Context/SalePointContext";
import { create, read, update, remove } from "../api";
import Loading from "../components/Loading";
import { TenderContext } from "../Context/TenderContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function TenderPage({ route }) {
  //const { tenderID } = route.params;
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const { getTenderDetails } = useContext(TenderContext);
  const [categoryIndex, setcategoryIndex] = useState(-1);
  const [amounts, setAmounts] = useState([0, 0, 0]);
  const [total, setTotal] = useState(0);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { salePoint, getSalePoint } = useContext(SalePointContext);
  const [loading, setLoading] = useState(true);
  const [currentTender, setCurrentTender] = useState(tenderDetails);
  const tenderDetails = {
    id: 7,
    offeredPacks: "5",
    packsAmount: 5,
    initialOffer: 50,
    closeDateHour: "1/1/1900 12:00:00 AM",
    collectAddress: "ויתקין, השדרה 5",
    collectDateHour: "1/1/1900 12:00:00 AM",
    //farmer
    FarmName: "גבוה גבוה",
    mainPic:
      "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/D353B67B-BB66-482E-ADB3-EBA47DC3E2D1.jpg",
    //product
    ProductName: "חציל",
    pic: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/eggplant.png",
  };

//   useEffect(() => {
//     //initial loading
//     const fetchTender = async () => {
//       let res = await getTenderDetails(tenderID);
//       if (res) {
//         setCurrentTender(res); //get the tender details
//         setLoading(false)
//       }
//     };
//     fetchTender();
//   }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={{ backgroundColor: theme.bg3, flex: 1 }}>
        <ImageBackground
          source={currentTender.mainPic}
          resizeMode="cover"
          style={{ height: height / 2.2, flex: 1 }}
        >
          <AppBar
            elevation={0}
            style={{
              paddingHorizontal: 20,
              backgroundColor: "transparent",
              paddingTop: 15,
            }}
            leading={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-forward" color={theme.txt} size={30} />
              </TouchableOpacity>
            }
          />
        </ImageBackground>
      </View>

      <View style={{ flex: 1, backgroundColor: theme.bg }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: 20, marginTop: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[style.subtitle, { color: theme.txt }]}>
              {salePoint.address}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                style.subtitle,
                { color: theme.txt, fontSize: 20, marginTop: 5, marginEnd: 10 },
              ]}
            >
              {tenderDetails.closeDateHour.split(" ")[0]}
            </Text>
          </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RoundedImage
                url={currentTender.mainPic}
                wid={width / 7.2}
                hei={height / 16}
              />
              <Text
                style={[
                  style.s18,
                  {
                    textAlign: "right",
                    color: theme.txt,
                    justifyContent: "center",
                    marginTop: 5,
                  },
                ]}
              >
                {" "}
                {tenderDetails.FarmName}
              </Text>
            </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="star-half-sharp"
                size={30}
                color={Colors.primary}
                style={{ marginHorizontal: 10 }}
              />
              <Text style={[style.m14, { color: theme.txt3, fontSize: 24 }]}>
                {salePoint.rankPrice}
              </Text>
            </View>
          </View>

          <View
            style={[
              style.divider,
              { backgroundColor: theme.border, marginVertical: 15 },
            ]}
          />
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                style.s18,
                { textAlign: "right", color: theme.txt, marginRight: 10 },
              ]}
            >
              מוצרים
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <ProductList />
          </View>

          <View
            style={[
              style.divider,
              { backgroundColor: theme.border, marginVertical: 15 },
            ]}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              marginBottom: 60,
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Payment1", { total })}
                style={[
                  style.btn,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={[style.btntxt, { marginRight: 5 }]}>
                  ביצוע קנייה
                </Text>
                <Icons name="cart-outline" size={20} color={Colors.secondary} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={[style.m12, { color: theme.txt3 }]}>מחיר כולל</Text>
              <Text style={[style.apptitle, { color: theme.txt }]}>
                ₪{}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );

  async function newTotal() {
    let sum = 0;
    for (let i = 0; i < amounts.length; i++) {
      sum += amounts[i] * product[i].price;
    }
    setTotal(sum);
  }
}

const getFarm = async (farm_ID) => {
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

  return farm;
};
