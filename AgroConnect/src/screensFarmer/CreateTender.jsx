//create tender by farmer

import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar, Avatar, useSurfaceColor } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
//import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from "expo-checkbox";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ImageProfile from "../components/ImageProfile";
import RBSheet from "react-native-raw-bottom-sheet";
import AutoCompMap from "../components/AutoCompMap";
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from "../components/RoundImage";
import { colors } from "react-native-elements";
import DateTimeSelect from "../components/DateTimeSelect";
import ValInput from "../components/ValInput";
import { TenderContext } from "../Context/TenderContext";
import DropDownSelect from "../components/DropDownSelect";

export default function CreateTender() {

  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const { getProducts, getProductAveragePrice } = useContext(ProductContext); //נשים ברשימה של אייטמים
  const { farm } = useContext(UsersContext); //החקלאי שמחובר
  const { createTender } = useContext(TenderContext);

  const [productAvgPrice, setProductAvgPrice] = useState(null);
  const [tender, setTender] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [flag, setFlag] = useState(false);

  const [errors, setErrors] = useState({});
  const [navContinue, setNavContinue] = useState(false);
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  const [offeredPack, setOfferedPack] = useState(null);
  const [packsAmount, setPacksAmount] = useState(null);
  const [initialOffer, setInitialOffer] = useState(null);
  const [closeDateHour, setCloseDateHour] = useState(null);
  const [collectAddress, setCollectAddress] = useState(null);
  const [collectDateHour, setCollectDateHour] = useState(null);
  const [productNum, setProductNum] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [closeDateHourShow, setCloseDateHourShow] = useState(null);
  const [collectDateHourShow, setCollectDateHourShow] = useState(null);

  useEffect(() => {
    if (flag) {
      setTender({
        offeredPack,
        packsAmount,
        initialOffer,
        closeDateHour,
        collectAddress,
        collectDateHour,
        farmNum: farm.farmID,
        productNum,
        latitude,
        longitude,
      });
    }
  }, [flag]);

  useEffect(() => {
    if (flag) {
      //create Tender in the DB
      //createTender(tender)
      console.log(tender);
      setNavContinue(true);
      console.log(tender);
    }
    setFlag(false);
  }, [tender]);

  useEffect(() => {
    //navigation.navigate(""); //שליחת אובייקט המכרז לאחר פרסומו לעמוד מכרז צד חקלאי
  }, [navContinue]);

  //select product=>show avg price, set the productID to the tender
  useEffect(() => {
    if(selectedProduct){
    console.log(selectedProduct);
    setProductNum(selectedProduct.id);
    //getProductAveragePrice(x.id) נפעיל גט מהשרת לממוצע מוצר זה
    //אם מצליח:
    //setProductAvgPrice(תשובה)
    }
  }, [selectedProduct]);

  const handleSubmit = () => {
    if (validateForm()) {
      setFlag(true);
      console.log("submitted");
      setErrors({});
    }
  };
  //checking every field according to the rules and add to the errors object
  const validateForm = () => {
    const errors = {};
    //ths product of the tender
    if (!selectedProduct) errors.selectedProduct = "שדה חובה";
    //the offered packs in this tender
    if (!offeredPack) errors.offeredPack = "שדה חובה";
    //amount of units in one offered pack
    const regexPacksAmount = /^-?\d+$/;
    if (!packsAmount) errors.packsAmount = "שדה חובה";
    //the initial price by the farmer
    if (!initialOffer) errors.initialOffer = "שדה חובה";
    //the end of the tender
    if (!closeDateHour) errors.closeDateHour = "שדה חובה";
    else {
      const currentDate = new Date();
      if (closeDateHour < currentDate) {
        errors.closeDateHour = "יש להזין מועד עתידי בלבד";
      }
    }
    //A point where the winners will collect the products
    if (!collectAddress) errors.collectAddress = "שדה חובה";
    //time of collection
    if (!collectDateHour) errors.collectDateHour = "שדה חובה";
    else {
      const currentDate = new Date();
      if (collectDateHour < currentDate) {
        errors.collectDateHour = "יש להזין מועד עתידי בלבד";
      } else if (
        closeDateHour &&
        collectDateHour &&
        closeDateHour >= collectDateHour
      ) {
        errors.collectDateHour = "מועד איסוף חייב להיות לאחר מועד סגירת המכרז";
      }
    }
    console.log(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 15 }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          <AppBar
            color={theme.bg}
            title="יצירת מכרז"
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
                  במידה ותבחר לעזוב פרטיך יימחקו
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
                    this.RBSheet14.close(), navigation.navigate("Login");
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
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={"always"}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <RoundedImage
                url={selectedProduct ? selectedProduct.url : null}
                wid={100}
                hei={100}
              />
            </View>
            <View>
              {/* <DropDownSelect
                list={getProducts}
                content={"בחר מוצר"}
                setSelectedItem={setSelectedProduct}
              /> */}
              {/* <DropDownPicker
                listMode="MODAL"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={(newValue) => {
                  setValue(newValue);
                }}
                onSelectItem={(item) => {
                  const p = products.find((x) => {
                    if (x.id == item.value) {
                      setSelectedProduct(x);
                      setProductNum(x.id);
                      //getProductAveragePrice(x.id) נפעיל גט מהשרת לממוצע מוצר זה
                      //אם מצליח:
                      //setProductAvgPrice(תשובה)
                    }
                  });
                }}
                setItems={setItems}
                placeholder="בחר מוצר"
                placeholderStyle={{
                  color: Colors.disable,
                }}
                style={[
                  {
                    borderColor: theme.input,
                    borderWidth: 1,
                    backgroundColor: theme.input,
                    color: theme.txt,
                    flex: 1,
                    borderRadius: 15,
                    marginTop: 20,
                  },
                  style.s14,
                ]}
                textStyle={[
                  style.s14,
                  {
                    textAlign: "left",
                    color: theme.txt,
                  },
                ]}
              /> */}
              {errors.selectedProduct ? (
                <Text style={style.errorText}>{errors.selectedProduct}</Text>
              ) : null}
              {productAvgPrice > 0 ? (
                <Text
                  style={[style.b12, { alignSelf: "right", paddingLeft: 5 }]}
                >
                  המחיר הממוצע למוצר זה הינו: {productAvgPrice}
                </Text>
              ) : null}
            </View>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="כתובת איסוף"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
                onFocus={() => setPlacesModalVisible(true)}
                value={collectAddress}
              />
            </View>
            {errors.collectAddress ? (
              <Text style={style.errorText}>{errors.collectAddress}</Text>
            ) : null}
            <Modal
              animationType="slide"
              transparent={false}
              visible={isPlacesModalVisible}
              onRequestClose={() => {
                setPlacesModalVisible(!isPlacesModalVisible);
              }}
            >
              <SafeAreaView style={style.modalView}>
                <AutoCompMap
                  setAddress={setCollectAddress}
                  setLatitude={setLatitude}
                  setLongitude={setLongitude}
                  setPlacesModalVisible={setPlacesModalVisible}
                />
              </SafeAreaView>
            </Modal>

            <DateTimeSelect
              setDateHour={setCloseDateHour}
              setDateHourShow={setCloseDateHourShow}
              DateHourShow={closeDateHourShow}
              content={"מועד סגירת המכרז"}
            />
            {errors.closeDateHour ? (
              <Text style={style.errorText}>{errors.closeDateHour}</Text>
            ) : null}

            <DateTimeSelect
              setDateHour={setCollectDateHour}
              setDateHourShow={setCollectDateHourShow}
              DateHourShow={collectDateHourShow}
              content={"מועד חלוקה"}
            />
            {errors.collectDateHour ? (
              <Text style={style.errorText}>{errors.collectDateHour}</Text>
            ) : null}

            <ValInput
              val={packsAmount}
              setVal={setPacksAmount}
              content={'ק"ג במארז אחד'}
              keyboardType={"numeric"}
            />
            {errors.packsAmount ? (
              <Text style={style.errorText}>{errors.packsAmount}</Text>
            ) : null}

            <ValInput
              val={offeredPack}
              setVal={setOfferedPack}
              content={"מספר מארזים למכירה"}
              keyboardType={"number-pad"}
            />
            {errors.offeredPack ? (
              <Text style={style.errorText}>{errors.offeredPack}</Text>
            ) : null}

            <ValInput
              val={initialOffer}
              setVal={setInitialOffer}
              content={"הצעה התחלתית למארז"}
              keyboardType={"numeric"}
            />
            {errors.initialOffer ? (
              <Text style={style.errorText}>{errors.initialOffer}</Text>
            ) : null}
            <View style={{ marginBottom: 50, marginTop: 20 }}>
              <TouchableOpacity onPress={handleSubmit} style={style.btn}>
                <Text style={style.btntxt}>צור מכרז</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
