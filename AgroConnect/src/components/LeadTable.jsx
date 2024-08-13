import { View, StyleSheet, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import { TenderContext } from "../Context/TenderContext";

export default function LeadTable({ tenderId }) {
  const theme = useContext(themeContext);
  const { getTendersBidsFarmer, TenderBidsFarm } = useContext(TenderContext);
  const [createTableData, setcreateTableData] = useState([]);
  const [bids, setBids] = useState([]);

  const createArrData = (arr) => {
    let matrix = [];
    for (let i = 0; i < arr.length; i++) {
      let item = [];
      for (const [value] of Object.entries(arr[i])) {
        item.push(value);
      }
      matrix.push(item);
    }
  };

  const funcRead = async () => {
    console.log("tenderId4444", tenderId);
    let arr = await getTendersBidsFarmer(tenderId);
    console.log('arr ==> ', arr)
    arr.sort((a, b) => a.bidSortedNum - b.bidSortedNum)
    setBids(arr);
    console.log("arr", arr);
  };
  useEffect(() => {
    funcRead();
  }, []);

  const BidTemplate = ({ bid }) => {
    return (
      <View style={[styles.row, styles.textData]}>
        <Text>{bid.bidSortedNum}</Text>
        <Text>{bid.consumerFirstName} {bid.consumerLastName}</Text>
        <Text>{bid.consumerPhoneNum}</Text>
        <Text>{bid.bidStatus.split(" ")[0] == "win" ? "כן" : "לא"}</Text>
        <Text>{bid.unitPrice}</Text>
        <Text>{bid.bidStatus.split(" ")[1] !== undefined ? bid.bidStatus.split(" ")[1] : bid.bidAmount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.textData, styles.head]}>
        <Text>#</Text>
        <Text>שם</Text>
        <Text>טלפון</Text>
        <Text>מנצח</Text>
        <Text>מחיר למארז</Text>
        <Text>כמות</Text>
      </View>
      {/* Data */}
      {bids.map((item) => <BidTemplate key={item.bidId} bid={item} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: "#fff" },
  head: {
    height: 40,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  textData: { 
    height: 40,
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});


