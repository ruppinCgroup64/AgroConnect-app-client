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
import React, { useState, useContext } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar, Avatar, useSurfaceColor } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ImageProfile from "../components/ImageProfile";
import RBSheet from "react-native-raw-bottom-sheet";


export default function Profilefill() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const [farmName, setFarmName] = useState("")
  const [address, setAddress] = useState("")
  const [socialNetworkLink, setSocialNetworkLink] = useState(null)
  const [mainPic, setMainPic] = useState(null)

  const [errors, setErrors] = useState({});
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  const handleSubmit = () => {
    //if (validateForm()) 
    {
      console.log("submitted"); //API place
      farm = {
        farmName,
        address,
        socialNetworkLink,
        mainPic
      };
      // העברת האוייקט לקונטקסט ורישום המשק+התייחסות למספר צרכן שנרשם בקונטקסט
      setErrors({});
      navigation.navigate("Welcome");
    }
  };
  //checking every field according to the rules and add to the errors object
  const validateForm = () => {
    const errors = {};
    //farm name
    if (!farmName) errors.farmName = "שדה חובה";
    //address
    if (!address) errors.address = "שדה חובה";
    //socialNetworkLink
    const regexSocialNetworkLink =/\b((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/\S*)?)\b/
    if ((!regexSocialNetworkLink.test(socialNetworkLink)) && (socialNetworkLink!="")) {
      errors.socialNetworkLink = "כתובת לא תקינה";
    }
    console.log(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
      <View
        style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
      >
          {/* AppBar component */}
          <AppBar
            color={theme.bg}
            title="רישום משק"
            titleStyle={[style.s18, { color: theme.txt, textAlign: "center" }]}
            style={{paddingBottom:15}}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => this.RBSheet11.open()}>
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

          {/* RBSheet component */}
          <RBSheet
            ref={(ref) => {
              this.RBSheet11 = ref;
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
                  onPress={() => this.RBSheet11.close()}
                  style={[style.btn, { backgroundColor: theme.btn, flex: 1 }]}
                >
                  <Text style={[style.btntxt, { color: theme.btntxt }]}>
                    הישאר
                  </Text>
                </TouchableOpacity>
                <View style={{ margin: 5 }}></View>
                <TouchableOpacity
                  onPress={() => {
                    this.RBSheet11.close(), navigation.navigate("Profilefill");
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

          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageProfile setProfilePic={setMainPic} />
            <View
              style={[
                style.txtinput,
                {
                  borderColor: theme.input,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="שם המשק"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
                onChangeText={setFarmName}
                value={farmName}
              />
            </View>
            {errors.farmName ? (
              <Text style={style.errorText}>{errors.farmName}</Text>
            ) : null}
            
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
                placeholder="כתובת המשק"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
                onFocus={() => setPlacesModalVisible(true)}
                value={address}
              />
            </View>
            {errors.address ? (
              <Text style={style.errorText}>{errors.address}</Text>
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
                <GooglePlacesAutocomplete
                  placeholder="עיר, רחוב, מספר משק"
                  onPress={(data, details = null) => {
                    console.log(JSON.stringify(data));
                    console.log(JSON.stringify(details?.geometry?.location));
                    setAddress();
                  }}
                  query={{
                    key: "AIzaSyCkv5saCxh1Fsr6xNiJatbWcq28VnmrxAA",
                    language: "he",
                  }}
                  textInputProps={{
                    selectionColor: Colors.primary,
                    placeholderTextColor: Colors.disable,
                    style: [
                      style.s14,
                      {
                        color: theme.txt,
                        flex: 1,
                        textAlign: "right",
                        height: 50,
                      },
                    ],
                    onChangeText: (text) => setAddress(text),
                  }}
                  styles={{
                    textInputContainer: {
                      backgroundColor: theme.input,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      marginTop: 20,
                    },
                    textInput: {
                      height: 40,
                      borderWidth: 1,
                      borderColor: theme.input,
                      backgroundColor: theme.input,
                    },
                    predefinedPlacesDescription: {
                      color: "#1faadb",
                    },
                  }}
                  fetchDetails={true}
                  nearbyPlacesAPI="GooglePlacesSearch"
                  debounce={400}
                />
                <TouchableOpacity
                  onPress={() => {
                    setPlacesModalVisible(false);
                  }}
                  style={[style.btnSave, { alignSelf: "center" }]}
                >
                  <Text style={style.btntxt}>שמור</Text>
                </TouchableOpacity>
              </SafeAreaView>
            </Modal>
            <View
              style={[
                style.txtinput,
                {
                  borderColor: theme.input,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="קישור לעמוד ברשת חברתית"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
                onChangeText={setSocialNetworkLink}
                value={socialNetworkLink}
              />
            </View>
            {errors.socialNetworkLink ? (
              <Text style={style.errorText}>{errors.socialNetworkLink}</Text>
            ) : null}
            
            <View style={{ marginTop: 40, marginBottom: 20 }}>
              <TouchableOpacity onPress={handleSubmit} style={style.btn}>
                <Text style={style.btntxt}>אישור</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
