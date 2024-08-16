import { View, StyleSheet, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../theme/color";
import { TenderContext } from "../Context/TenderContext";

export default function LeadTableFarmer({ tenderId }) {
  const { getTendersBidsFarmer } = useContext(TenderContext);
  const [bids, setBids] = useState([]);

  const funcRead = async () => {
    let arr = await getTendersBidsFarmer(tenderId);
    console.log("arr ==> ", arr);
    arr.sort((a, b) => a.bidSortedNum - b.bidSortedNum);
    setBids(arr);
  };

  useEffect(() => {
    funcRead();
  }, [tenderId]);

  const BidTemplate = ({ bid }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.column1}>{bid.bidId}</Text>
        <Text style={styles.column2}>{bid.consumerFirstName} {bid.consumerLastName}</Text>
        <Text style={styles.column3}>{bid.consumerPhoneNum}</Text>
        <Text style={styles.column4}>{bid.bidStatus.split(" ")[0] === "win" ? "כן" : "לא"}</Text>
        <Text style={styles.column5}>{bid.unitPrice}</Text>
        <Text style={styles.column6}>{bid.bidStatus.split(" ")[1] !== undefined ? bid.bidStatus.split(" ")[1] : bid.bidAmount}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={[styles.row, styles.head]}>
          <Text style={styles.column1}>מיקום</Text>
          <Text style={styles.column2}>שם</Text>
          <Text style={styles.column3}>טלפון</Text>
          <Text style={styles.column4}>מנצח</Text>
          <Text style={styles.column5}>מחיר</Text>
          <Text style={styles.column6}>כמות</Text>
        </View>
        {/* Data */}
        <View>
          {bids.map((item) => (
            <BidTemplate key={item.bidId} bid={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 15, backgroundColor: "#fff", width: '100%' },
  head: {
    height: 40,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: '100%'
  },
  column1: {
    flex: 1,
    textAlign: "center",
  },
  column2: {
    flex: 2,
    textAlign: "center",
  },
  column3: {
    flex: 2,
    textAlign: "center",
  },
  column4: {
    flex: 1,
    textAlign: "center",
  },
  column5: {
    flex: 2,
    textAlign: "center",
  },
  column6: {
    flex: 1,
    textAlign: "center",
  },
});
