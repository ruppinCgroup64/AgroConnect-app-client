import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Colors } from "../theme/color";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from "../components/RoundImage";
import TenderHomeElement from "../components/TenderHomeElement";
import LeadTable from "../components/LeadTable"; // ודא שהייבוא נכון
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { TenderContext } from "../Context/TenderContext";
import ValInput from "../components/ValInput";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Tender() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [categoryIndex, setcategoryIndex] = useState(-1);
  const { farm } = useContext(UsersContext);
  const { createBid } = useContext(TenderContext);
  const [tableDetails, settableDetails] = useState([]);
  const [tenderNum, settenderNum] = useState('');
  const [amount, setamount] = useState('');
  const [unitPrice, setunitPrice] = useState('');
  const [status, setstatus] = useState('');
  const [consumerNum, setconsumerNum] = useState('');
  const [bidDate, setbidDate] = useState('');
  const [sortedNum, setsortedNum] = useState('');



function postBid(){
    let bid={
        tenderNum: tenderNum,
        amount: amount,
        unitPrice: unitPrice,
        status: status,
        consumerNum: consumerNum,
        bidDate: bidDate,
        sortedNum: sortedNum
    }
    let res=createBid(bid);
    settableDetails(res);
}

  const image = {
    uri: "https://bellvillemarket.co.za/wp-content/uploads/2020/11/pineapples.jpg",
  };

  const fairs = [
    {
      nav: "ProDetail",
      img: "https://www.panoramacenter.co.il/wp-content/uploads/2017/07/shook-608x608.jpg",
      title: "שוק איכרים",
      address: "12.04.2024",
      nav2: "Review",
      rank: "4.6",
      timer: "עוד 10 ימים",
    },
    {
      nav: "ProDetail",
      img: "https://media.reshet.tv/image/upload/t_image_article_800/v1699546480/uploads/2023/903796167.jpg",
      title: "שוק צוק הדסה",
      address: "11.04.2024",
      nav2: "Review",
      rank: "4.8",
      timer: "עוד 9 ימים",
    },
    {
      nav: "ProDetail",
      img: "https://scontent.ftlv27-1.fna.fbcdn.net/v/t39.30808-6/433611051_903026805164816_7769755400387813259_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jrCldMBMRjwQ7kNvgE_wJQG&_nc_ht=scontent.ftlv27-1.fna&oh=00_AYBqe4OXaZ9yMvhc-i5czcrxnK3tWSzVzExAP-Sg2bPO9g&oe=664BE032",
      title: "שוק עמק חפר",
      address: "05.04.2024",
      nav2: "Review",
      rank: "4.8",
      timer: "עוד 3 ימים",
    },
  ];

  const FairsList = () => {
    return (
      <View style={[style.categorycontainer, { marginBottom: 10 }]}>
        {fairs.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <TenderHomeElement
              key={index}
              nav={item.nav}
              img={item.img}
              title={item.title}
              address={item.address}
              nav2={item.nav2}
              rank={item.rank}
              timer={item.timer}
            />
            <View style={{ marginHorizontal: 115 }}></View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={{ backgroundColor: theme.bg3, flex: 1 }}>
        <ImageBackground
          source={image}
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
        </ImageBackground>
      </View>
      <View style={{ flex: 1, backgroundColor: theme.bg }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: 20, marginTop: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[style.subtitle, { color: theme.txt }]}>
              3 יח' אננס
            </Text>
            <Text
              style={[
                style.subtitle,
                { color: theme.txt, fontSize: 20, marginTop: 5 },
              ]}
            >
              {" "}
              / מארז
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RoundedImage
              url={farm.mainPic}
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
              {farm.address}
            </Text>
          </View>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star-half-sharp' size={30} color={Colors.primary} style={{ marginHorizontal: 10 }} />
                            <Text style={[style.m14, { color: theme.txt3, fontSize: 24 }]}>4</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='logo-whatsapp' size={30} color={Colors.primary} />
                        </View>
                    </View> */}
          <View
            style={[
              style.divider,
              { backgroundColor: theme.border, marginVertical: 15 },
            ]}
          />
          <Text
            style={[style.t1, { color: Colors.primary, textAlign: "center" }]}
          >
            טבלת המובילים
          </Text>
          {/* <LeadTable />
          <ValInput
            val={packsAmount}
            setVal={setPacksAmount}
            content={'הצעה למארז'}
            keyboardType={"numeric"}
          />
            <ValInput
              val={packsAmount}
              setVal={setPacksAmount}
              content={'כמות מארזים'}
              keyboardType={"numeric"}
            /> */}
          <TouchableOpacity
           onPress={() => postBid()}
            style={[
              style.btn,
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Text style={[style.btntxt, { marginRight: 5 }]}>הוסף הצעה</Text>
            <Icons name="plus-circle" size={20} color={Colors.secondary} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
