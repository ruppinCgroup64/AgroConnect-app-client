import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import Details from "../components/Details";
import {
  View,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AppBar } from "@react-native-material/core";
import style from "../theme/style";
import SuccessAlert from "../components/SuccessAlert";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { UsersContext } from "../Context/UserContext";
import { uploadFile } from "../api";
import ImageProfile from "../components/ImageProfile";
import { SalePointContext } from "../Context/SalePointContext";
import DetailsSalePoint from "../components/DetailsSalePoint";
import { ProductContext } from "../Context/ProductsContext";

export default function CreateSalePoint() {
  const theme = useContext(themeContext);
  const { farm } = useContext(UsersContext);
  const { createSalePoint, addProductsToPoint } = useContext(SalePointContext);
  const { getProducts, productsByFarm, allProducts } = useContext(ProductContext);

  const navigation = useNavigation();

  const [navContinue, setNavContinue] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [salePoint, setSalePoint] = useState({});
  const [productsList, setProductsList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [updated, setUpdated] = useState(false); //products in sale point updated
  const [incorrectDetails, setIncorrectDetails] = useState(false);

  //for render the farm's products
  const [amounts, setAmounts] = useState([]);
  const [prices, setPrices] = useState([]);

  //in the initial render- bring all the farm products
  useEffect(() => {
    const fetchData = async () => {
      //register point
      let res = await getProducts();
      if (res) {
        //update the sale point=res now with id
        setProductsList(res);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allProducts.length > 0) {
      let newAmounts = allProducts.map(() => 0);
      let newPrices = allProducts.map(() => 0);
      setAmounts(newAmounts);
      setPrices(newPrices);
    }
  }, [allProducts]);

  //when the button was pressed->add the sale point to the DB
  useEffect(() => {
    if (navContinue) {
      setIncorrectDetails(false);
      let flag = false;
      for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] > 0 && prices[i] == 0) {
          setIncorrectDetails(true);
          flag = true;
        } else if (amounts[i] == 0 && prices[i] > 0) {
          setIncorrectDetails(true);
          flag = true;
        }
      }
      //if the flag is still false continue

      const fetchData = async () => {
        //register point
        let res = await createSalePoint(salePoint);
        if (res && res.id) {
          console.log("Created Sale Point: ", res);
          setSalePoint(res); //update the sale point=res now with id
        } else {
          console.error("Failed to create Sale Point or missing ID");
        }
      };
      if (!flag) {
        fetchData();
      }
    }
    setNavContinue(false);
  }, [navContinue]);




  //when the sale point registred in the DB-> register its products
  useEffect(() => {
    if (salePoint && salePoint.id) {
      //register its products- send list of products
      let finalProducts = [];
      let count = 0;
      for (i = 0; i < productsList.length; i++) {
        if (amounts[i] && amounts[i] > 0) {
          count++;
          finalProducts[count] = {
            id: 0,
            salePointNum: salePoint.id,
            productInFarmNum: productsList[i].id,
            productAmount: amounts[i],
            unitPrice: prices[i]
          }//finalProducts
        }//if
      }//fot -> i

      const fetchData = async () => {
        for (i = 0; i < finalProducts.length; i++) {
          let res = await addProductsToPoint(finalProducts[i]);
          console.log("Created Products: ", res);
        }//for -> i
        if (res) {
          setContent("נקודת המכירה נוצרה בהצלחה");
        }
      };
      fetchData();
    } else {
      console.error("SalePoint is undefined or missing ID");
    }
  }, [salePoint]);


  useEffect(() => {
    if (content != "") {
      setShow(true);
    }
  }, [content]);

  useEffect(() => {
    if (content != "") {
      const timer = setTimeout(() => {
        //navigation.navigate("MyTabs"); //נשלח אותו לעמוד של נקודת המכירה
      }, 2000);
    }
  }, [show]);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          <AppBar
            color={theme.bg}
            title="יצירת נקודת מכירה"
            titleStyle={[
              style.apptitle,
              { color: theme.txt, textAlign: "center" },
            ]}
            style={{ paddingBottom: 15 }}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => this.RBSheet14.open()}>
                <Icon
                  name="arrow-back"
                  color={theme.txt}
                  size={30}
                  style={{
                    transform: [{ scaleX: -1 }],
                  }}
                />
              </TouchableOpacity>
            }
            trailing={<View style={{ width: 30, height: 30, opacity: 0 }} />}
          />

          <RBSheet
            ref={(ref) => {
              this.RBSheet14 = ref;
            }}
            height={250}
            openDuration={100}
            customStyles={{
              container: {
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: theme.bg,
              },
            }}
          >
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Text
                style={[
                  style.apptitleSB,
                  { textAlign: "center", color: "#F75555" },
                ]}
              >
                ביטול
              </Text>
              <View
                style={[
                  style.divider,
                  { marginVertical: 10, backgroundColor: "#EEEEEE" },
                ]}
              ></View>
              <View style={{ paddingTop: 20 }}>
                <Text
                  style={[style.m18, { color: theme.txt, textAlign: "center" }]}
                >
                  במידה ותבחר לעזוב פרטי נקודת המכירה יימחקו
                </Text>
              </View>
              <View style={{ marginTop: 25, flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.RBSheet14.close()}
                  style={[style.btn, { backgroundColor: theme.btn, flex: 1 }]}
                >
                  <Text style={[style.btntxt, { color: theme.btntxt }]}>
                    הישאר
                  </Text>
                </TouchableOpacity>
                <View style={{ margin: 5 }}></View>
                <TouchableOpacity
                  onPress={() => {
                    this.RBSheet14.close(), navigation.goBack();
                  }}
                  style={[style.btn, { flex: 1 }]}
                >
                  <Text style={[style.btntxt, { color: Colors.secondary }]}>
                    מחק
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </RBSheet>

          <ScrollView
            style={{ marginTop: 15 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <DetailsSalePoint
              setSalePoint={setSalePoint}
              salePoint={salePoint}
              setNavContinue={setNavContinue}
              edit={false}
              productsList={productsList}
              setProductsList={setProductsList}
              farm={farm}
              amounts={amounts}
              setAmounts={setAmounts}
              prices={prices}
              setPrices={setPrices}
              incorrectDetails={incorrectDetails}
            />
          </ScrollView>
          <SuccessAlert show={show} setShow={setShow} content={content} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
