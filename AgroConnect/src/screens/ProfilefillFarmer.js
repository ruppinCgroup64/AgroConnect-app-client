//Registration of the farm of the farmer

import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import DetailsFarm from "../components/DetailsFarm";
import {
  View,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text
} from "react-native";
import style from "../theme/style";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import SuccessAlert from "../components/SuccessAlert";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { UsersContext } from "../Context/UserContext";

export default function ProfilefillFarmer() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  
  const {user} = useContext(UsersContext);

  const [navContinue, setNavContinue] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  //נתונים רק לבדיקות
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
      navigation.navigate("Welcome");
    }
    else if(false)//פה רק כהכנה לשרת, במידה ונפל/יש בעיות יוצגו באלרט
    {
      setContent("הרשמתך בוצעה בהצלחה"); //שליטה בתוכן לפי מה שהשרת יחזיר
    }
  }, [navContinue]);

  // useEffect(() => {
  //   if (navContinue) {
  //     setShow(true);
  //   }
  // }, [content]);

  // useEffect(() => {
  //   if (navContinue) {
  //     const timer = setTimeout(() => {
       
  //     }, 2000);
  //   }
  // }, [show]);

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
            title="רישום משק"
            titleStyle={[
              style.apptitle,
              { color: theme.txt, textAlign: "center" },
            ]}
            style={{ paddingBottom: 15 }}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => this.RBSheet12.open()}>
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
              this.RBSheet12 = ref;
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
                  onPress={() => this.RBSheet12.close()}
                  style={[style.btn, { backgroundColor: theme.btn, flex: 1 }]}
                >
                  <Text style={[style.btntxt, { color: theme.btntxt }]}>
                    הישאר
                  </Text>
                </TouchableOpacity>
                <View style={{ margin: 5 }}></View>
                <TouchableOpacity
                  onPress={() => {
                    this.RBSheet12.close(), navigation.navigate("Profilefill");
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
          <DetailsFarm
            farm={updatedFarm}
            setFarm={setUpdatedFarm}
            setNavContinue={setNavContinue}
          />
          {/* <SuccessAlert show={show} setShow={setShow} content={content} /> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
