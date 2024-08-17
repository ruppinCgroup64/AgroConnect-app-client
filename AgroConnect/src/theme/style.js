import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";
import theme from "./theme";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default StyleSheet.create({
  area: {
    flex: 1,
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: Colors.active,
    fontFamily: "Heebo-Bold",
  },
  subtitle: {
    fontSize: 32,
    color: Colors.active,
    fontFamily: "Heebo-SemiBold",
  },
  apptitle: {
    fontSize: 24,
    color: Colors.active,
    fontFamily: "Heebo-Thin",
  },
  apptitleSB: {
    fontSize: 24,
    color: Colors.active,
    fontFamily: "Heebo-SemiBold",
  },
  t1: {
    fontSize: 20,
    color: Colors.active,
    fontFamily: "Heebo-Bold",
  },
  b10: {
    fontSize: 10,
    color: Colors.disable,
    fontFamily: "Heebo-SemiBold",
  },
  s10: {
    fontSize: 10,
    color: Colors.disable,
    fontFamily: "Heebo-SemiBold",
  },
  r12: {
    fontSize: 12,
    color: Colors.disable,
    fontFamily: "Heebo-Regular",
  },
  s12: {
    fontSize: 12,
    color: Colors.disable,
    fontFamily: "Heebo-SemiBold",
  },
  m12: {
    fontSize: 12,
    color: Colors.disable,
    fontFamily: "Heebo-Medium",
  },
  b12: {
    fontSize: 12,
    color: Colors.disable,
    fontFamily: "Heebo-Bold",
  },

  r14: {
    fontSize: 14,
    color: Colors.disable,
    fontFamily: "Heebo-Thin",
  },
  m14: {
    fontSize: 14,
    color: Colors.disable,
    fontFamily: "Heebo-Medium",
  },
  s14: {
    fontSize: 14,
    color: Colors.disable,
    fontFamily: "Heebo-Medium",
  },
  b14: {
    fontSize: 14,
    color: Colors.disable,
    fontFamily: "Heebo-Bold",
  },
  r16: {
    fontSize: 16,
    color: Colors.disable,
    // fontFamily: 'Heebo-Regular'
  },
  s16: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily: "Heebo-SemiBold",
  },
  m16: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily: "Heebo-Medium",
  },
  b16: {
    fontSize: 16,
    color: Colors.disable,
    fontFamily: "Heebo-Bold",
  },
  r18: {
    fontSize: 18,
    color: Colors.disable,
    // fontFamily: 'Heebo-Regular'
  },
  m18: {
    fontSize: 18,
    color: Colors.disable,
    fontFamily: "Heebo-Medium",
  },
  s18: {
    fontSize: 18,
    color: Colors.disable,
    fontFamily: "Heebo-SemiBold",
  },
  b18: {
    fontSize: 18,
    color: Colors.disable,
    fontFamily: "Heebo-Bold",
  },
  btn: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 30,
  },
  btnSave: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 30,
    width: width / 4,
  },
  btntxt: {
    fontSize: 16,
    color: Colors.secondary,
    fontFamily: "Heebo-Bold",
  },
  indicator: {
    borderColor: "#BDBDBD",
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    backgroundColor: "#BDBDBD",
    marginHorizontal: 5,
  },

  shadow: {
    shadowColor: Colors.active,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: Colors.bg,
  },

  txtinput: {
    paddingHorizontal: 15,
    color: Colors.disable,
    height: 55,
    borderRadius: 15,
    borderWidth: 1,
  },

  radio: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    borderColor: Colors.bord,
    color: Colors.disable,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },

  divider1: {
    height: 1.5,
    backgroundColor: Colors.border,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },

  dividertxt: {
    color: Colors.disable,
    // fontFamily: 'Urbanist-Regular'
  },

  btn1: {
    alignItems: "center",
    // paddingVertical:15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    height: 55,
  },
  btntxt1: {
    fontSize: 16,
    color: Colors.active,
    paddingLeft: 15,
    // fontFamily: 'Urbanist-Regular'
  },

  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 5,
    height: 50,
    // flex: 1
  },

  verticaldivider: {
    height: "60%",
    width: 1,
  },

  modalcontainer: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 140,
    paddingTop: 20,
    marginHorizontal: -10,
    alignSelf: "center",
  },
  btnoutline: {
    borderColor: Colors.bord,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 55,
    width: width / 4.5,
  },

  b3: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    borderColor: "#E5E7EB",
    borderWidth: 1,
  },
  follow: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  following: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  ctext: {
    fontSize: 16,
    fontFamily: "Heebo-SemiBold",
    color: Colors.primary,
  },
  cts: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    color: Colors.secondary,
  },
  categoryTextSelected: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    color: Colors.secondary,
    fontFamily: "Heebo-SemiBold",
  },
  categoryText: {
    fontSize: 16,
    color: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 20,
    paddingBottom: 5,
    paddingTop: 7,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    fontFamily: "Heebo-SemiBold",
  },
  categorycontainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 30,
    justifyContent: "space-between",
  },

  s1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
  },
  otp: {
    height: 50,
    width: 50,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Heebo-Bold",
    color: theme.txt,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "Heebo-SemiBold",
    fontSize: 11,
    paddingTop: 5,
    marginBottom: 0,
    paddingLeft: 5
  },
  modalView: {
    marginTop: 50, // Adjust as needed for your layout
    padding: 20,
    backgroundColor: "white", // Or any other background color
    flex: 1,
    borderColor: theme.input,
  },
  textTopInput: {
    color: Colors.disable,
    fontSize: 13,
    textAlign: "left",
    marginLeft: 5,
  },
});
