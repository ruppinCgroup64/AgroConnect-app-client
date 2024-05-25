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

export default function Profilefill() {
  const theme = useContext(themeContext);
  const { consumer, register, updateUser } = useContext(UsersContext); //רק להדגמה

  const navigation = useNavigation();

  const [navContinue, setNavContinue] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [updatedConsumer, setUpdatedConsumer] = useState(consumer);
  const [updated, setUpdated] = useState(false);

  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    if (navContinue) {
      const fetchData = async () => {
        //register consumer
        let res = await register(updatedConsumer);
        if (res.email == null) {
          setEmailExists(true);
        } else {
          setEmailExists(false);
          let updatedRes = {};
          if (updatedConsumer.profilePic != "") {
            //if the user selected image
            let resImg = await uploadFile(updatedConsumer.profilePic); //upload image to the server
            if (resImg) {
              updatedRes = {
                //take the original object from the server and change its image
                ...res,
                profilePic: resImg,
              };
            } else {
              updatedRes = {
                ...res,
                profilePic:
                  "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoUser.png",
              };
            }
          } else {
            updatedRes = {
              ...res,
              profilePic:
                "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoUser.png",
            };
          }
          setUpdatedConsumer(updatedRes);
        }
      };
      fetchData();
    }
    setNavContinue(false);
  }, [navContinue]);

  useEffect(() => {
    if (
      updatedConsumer &&
      updated == false &&
      updatedConsumer.profilePic != "" &&
      updatedConsumer.profilePic
    ) {
      console.log("updatedCons", updatedConsumer);
      //let id = 1;
      //the user has not been updated after change image in DB
      let ans = updatedConsumer.profilePic.toLowerCase().includes("https"); //the image selected
      if (ans) {
        console.log("consumer3", updatedConsumer);
        const fetchData = async () => {
          let res = await updateUser(updatedConsumer); //update the user's image in the DB
          if (res) {
            setUpdated(true);
            //id = res.id;
            setUpdatedConsumer(res);
          }
        };
        fetchData();
      }
    }
  }, [updatedConsumer]);

  useEffect(() => {
    if (
      updatedConsumer &&
      updatedConsumer.profilePic != "" &&
      updatedConsumer.profilePic &&
      updatedConsumer.profilePic.toLowerCase().includes("https")
    ) {
      //if its not a farmer
      setShow(true);
      setContent("הרשמתך בוצעה בהצלחה");
    }
  }, [consumer]);

  useEffect(() => {
    if (content != "") {
      setShow(true);
    }
  }, [content]);

  useEffect(() => {
    if (content != "") {
      const timer = setTimeout(() => {
        if (!updatedConsumer.isFarmer) navigation.navigate("MyTabs");
        else
          navigation.navigate("ProfilefillFarmer", { farmerID: consumer.id }); //add consumer.id
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
          <View>
            <ScrollView
               style={{ marginTop: 15 }}
               showsVerticalScrollIndicator={false}
               keyboardShouldPersistTaps="handled"
            >
              <ImageProfile
                userImageURI={profilePic}
                setProfilePic={setProfilePic}
              />
              <Details
                profilePic={profilePic}
                consumer={updatedConsumer}
                setConsumer={setUpdatedConsumer}
                setNavContinue={setNavContinue}
                edit={false}
                emailExists={emailExists}
              />
            </ScrollView>
            <SuccessAlert show={show} setShow={setShow} content={content} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
