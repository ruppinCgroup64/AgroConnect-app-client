import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import { TenderContext } from "../Context/TenderContext";
import style from "../theme/style";
import theme from "../theme/theme";

export default function LeadTableFarmer({ tenderId }) {
  const { getTendersBidsFarmer } = useContext(TenderContext);
  const [bids, setBids] = useState([]);

  const funcRead = async () => {
    console.log("tenderId4444", tenderId);
    let arr = await getTendersBidsFarmer(tenderId);
    console.log('arr ==> ', arr)
    arr.sort((a, b) => a.bidSortedNum - b.bidSortedNum);
    setBids(arr);
  };

  useEffect(() => {
    funcRead();
  }, [tenderId]);

  const BidTemplate = ({ bid }) => {
    return (
      <View style={[styles.row, styles.textData]}>
        <Text>{bid.bidId}</Text>
        <Text>{bid.consumerFirstName} {bid.consumerLastName}</Text>
        <Text>{bid.consumerPhoneNum}</Text>
        <Text>{bid.bidStatus.split(" ")[0] === "win" ? "כן" : "לא"}</Text>
        <Text>{bid.unitPrice}</Text>
        <Text>{bid.bidStatus.split(" ")[1] !== undefined ? bid.bidStatus.split(" ")[1] : bid.bidAmount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.row, styles.head]}>
        <Text>#</Text>
        <Text>שם</Text>
        <Text>טלפון</Text>
        <Text>מנצח</Text>
        <Text>מחיר למארז</Text>
        <Text>כמות</Text>
      </View>
      {/* Data */}
      <View>
        {bids.map((item) => (
          <BidTemplate key={item.bidId} bid={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: "#fff" },
  head: {
    height: 40,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  textData: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});