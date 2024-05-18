//Registration of consumer. register user without its image->post image in the server-> update the user's image

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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AppBar } from "@react-native-material/core";
import style from "../theme/style";
import SuccessAlert from "../components/SuccessAlert";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { UsersContext } from "../Context/UserContext";
import { uploadFile } from "../api";

export default function Profilefill() {
  const theme = useContext(themeContext);
  const { register, consumer, setConsumer, updateUser } =
    useContext(UsersContext); //רק להדגמה

  const navigation = useNavigation();

  const [navContinue, setNavContinue] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [emailExists, setEmailExists] = useState("");
  const [updatedConsumer, setUpdatedConsumer] = useState(consumer);
  const [updated, setUpdated] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (navContinue) {
      const fetchData = async () => {
        //register consumer
        let res = await register(updatedConsumer);
        if (res.email == null) {
          setEmailExists("אימייל כבר קיים");
        } else {
          setEmailExists("");
          if (updatedConsumer.profilePic != "") //if the user selected image
          {
            let resImg = await uploadFile(updatedConsumer.profilePic); //upload image to the server
            if (resImg) {
              setUpdatedConsumer((prevState) => ({
                ...prevState,
                profilePic: resImg,
              }));
            }
            else {
              setUpdatedConsumer((prevState) => ({
                ...prevState,
                profilePic:
                  "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoUser.png",
              }));
            }
          } 
          else {
            setUpdatedConsumer((prevState) => ({
              ...prevState,
              profilePic:
                "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoUser.png",
            }));
          }
        }
      };
      fetchData();
    }
    setNavContinue(false);
  }, [navContinue]);

  useEffect(() => {
    if (updated == false&&updatedConsumer.profilePic!="") {
      //the user has not been updated after change image in DB
      let ans = updatedConsumer.profilePic.includes("https"); //the image selected
      if (ans) {
        let res = updateUser(updatedConsumer); //update the user's image in the DB
        if (res) {
          setUpdated(true);
          setConsumer(updatedConsumer); //update the context consumer
        }
      }
    }
  }, [updatedConsumer]);

  useEffect(() => {
    if (flag) {
      const fetchData = async () => {
        let res = await register(updatedConsumer);
        if (res.email == null) {
          setEmailExists("אימייל כבר קיים");
        } else {
          if (!res.isFarmer) {
            //if its not a farmer
            navigation.navigate("Welcome");
          } else if (updatedConsumer.isFarmer) {
            navigation.navigate("ProfilefillFarmer", { farmerID: res.id });
          }
        }
      };
      fetchData();
    }
  }, [flag]);
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          <AppBar
            color={theme.bg}
            title="הרשמה"
            titleStyle={[
              style.apptitle,
              { color: theme.txt, textAlign: "center" },
            ]}
            style={{ paddingBottom: 15 }}
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
                    this.RBSheet11.close(), navigation.navigate("Login");
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
          <Details
            consumer={updatedConsumer}
            setConsumer={setUpdatedConsumer}
            setNavContinue={setNavContinue}
            edit={false}
          />
          <View>
            <Text>{emailExists}</Text>
          </View>
          {/* <SuccessAlert show={show} setShow={setShow} content={content} /> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
