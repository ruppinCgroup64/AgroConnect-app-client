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
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AppBar } from "@react-native-material/core";
import style from "../theme/style";
import SuccessAlert from "../components/SuccessAlert";
import RBSheet from "react-native-raw-bottom-sheet";
import { colors } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DetailsFarm from "../components/DetailsFarm";

export default function EditProfileFarm() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const [navContinue, setNavContinue] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const [updatedFarm, setUpdatedFarm] = useState({
    farmName: "המשק",
    address: "ויתקין, החרוב, 1",
    socialNetworkLink: "https://www.facebook.com/HAMESHEK.Hod.Hasharon/",
    mainPic:
      "file:///var/mobile/Containers/Data/Application/DA33310A-7189-40D0-AAD7-855F44CD2353/Library/Caches/ExponentExperienceData/@anonymous/AgroConnect-a9363ae1-df3b-4be5-aa0a-fec0396bfdda/ImagePicker/3191E62A-A295-4C27-B4D8-08D4785087DA.jpg",
    consumerNum: 1,
  });

  useEffect(() => {
    if (navContinue) {
      setContent("פרטיך נשמרו בהצלחה"); //שליטה בתוכן לפי מה שהשרת יחזיר
    }
    console.log(updatedFarm);
  }, [navContinue]);

  useEffect(() => {
    if (navContinue) {
      setShow(true);
    }
  }, [content]);

  useEffect(() => {
    console.log(show);
    if (navContinue) {
      const timer = setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }
  }, [show]);

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
            title="עריכת פרטים אישיים"
            titleStyle={[
              style.apptitle,
              { color: theme.txt, textAlign: "center" },
            ]}
            style={{ paddingBottom: 15 }}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => this.RBSheet10.open()}>
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
              this.RBSheet10 = ref;
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
                  במידה וערכת פרטים הם יימחקו
                </Text>
              </View>
              <View style={{ marginTop: 25, flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.RBSheet10.close()}
                  style={[style.btn, { backgroundColor: theme.btn, flex: 1 }]}
                >
                  <Text style={[style.btntxt, { color: theme.btntxt }]}>
                    הישאר
                  </Text>
                </TouchableOpacity>
                <View style={{ margin: 5 }}></View>
                <TouchableOpacity
                  onPress={() => {
                    this.RBSheet10.close(), navigation.navigate("Profile");
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
          <DetailsFarm farm={updatedFarm} setFarm={setUpdatedFarm} setNavContinue={setNavContinue}/>
          <SuccessAlert show={show} setShow={setShow} content={content} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
