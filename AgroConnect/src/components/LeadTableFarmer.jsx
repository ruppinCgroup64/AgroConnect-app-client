import { View, StyleSheet, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../theme/color";
import { TenderContext } from "../Context/TenderContext";
import style from "../theme/style";
import theme from "../theme/theme";

export default function LeadTableFarmer({ tenderId, offeredPacks }) {
  const { getTendersBidsFarmer } = useContext(TenderContext);
  const [bids, setBids] = useState([]);

  const funcRead = async () => {
    let arr = await getTendersBidsFarmer(tenderId);
    console.log("arr ==> ", arr);
    arr.sort((a, b) => a.bidSortedNum - b.bidSortedNum);
    setBids(arr);
  };

  const countPacks = () => {
    let arr = bids
      .map((item) => {
        if (item.bidStatus.split(" ")[0] === "win") {
          return item.bidStatus.split(" ")[1] !== undefined
            ? parseInt(item.bidStatus.split(" ")[1], 10)
            : item.bidAmount;
        }
        return null;
      })
      .filter((item) => item !== null);
    let packs = arr.reduce((sum, item) => sum + item, 0);
    return packs;
  };
  const countWinningBids = () => {
    return bids.filter((item) => item.bidStatus.split(" ")[0] === "win").length;
  };
  useEffect(() => {
    funcRead();
  }, [tenderId]);

  const BidTemplate = ({ bid }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.column1}>{bid.bidSortedNum}</Text>
        <Text style={styles.column2}>
          {bid.consumerFirstName} {bid.consumerLastName}
        </Text>
        <Text style={styles.column3}>{bid.consumerPhoneNum}</Text>
        <Text style={styles.column4}>
          {bid.bidStatus.split(" ")[0] === "win" ? "כן" : "לא"}
        </Text>
        <Text style={styles.column5}>{bid.unitPrice}</Text>
        <Text style={styles.column6}>
          {bid.bidStatus.split(" ")[1] !== undefined
            ? bid.bidStatus.split(" ")[1]
            : bid.bidAmount}
        </Text>
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
      </View><View style={{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 5
}}>
    <View style={{ 
        flex: 1,
        alignItems: 'center',
        borderColor: '#01B763', 
        borderWidth: 1, 
        borderRadius: 5,
        padding: 5, 
        marginHorizontal: 5
    }}>
        <Text style={[style.s18, { color: theme.txt, fontSize: 12, textAlign: 'center', marginBottom: 5, textDecorationLine: 'underline' }]}>
            כמות הצעות זוכות:
        </Text>
        <Text style={[style.s18, { color: theme.txt, fontSize: 12, textAlign: 'center' }]}>
            {countWinningBids()}
        </Text>
    </View>
    <View style={{ 
        flex: 1,
        alignItems: 'center',
        borderColor: '#01B763', 
        borderWidth: 1, 
        borderRadius: 5,
        padding: 5, 
        marginRight: 5
    }}>
        <Text style={[style.s18, { color: theme.txt, fontSize: 12, textAlign: 'center', marginBottom: 5, textDecorationLine: 'underline' }]}>
            מארזים עם הצעות:
        </Text>
        <Text style={[style.s18, { color: theme.txt, fontSize: 12, textAlign: 'center' }]}>
            {countPacks()}
        </Text>
    </View>


    <View style={{ 
        flex: 1,
        alignItems: 'center',
        borderColor: '#01B763', 
        borderWidth: 1, 
        borderRadius: 5,
        padding: 5, 
        marginLeft: 5
    }}>
        <Text style={[style.s18, { color: theme.txt, fontSize: 12, textAlign: 'center', marginBottom: 5, textDecorationLine: 'underline' }]}>
            מארזים שלא נמכרו:
        </Text>
        <Text style={[style.s18, { color: theme.txt, fontSize: 12, textAlign: 'center' }]}>
        {offeredPacks-countPacks()}
        </Text>
    </View>
</View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    width: "100%",
  },
  head: {
    height: 40,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  column1: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Heebo-Regular",
  },
  column2: {
    flex: 2,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Heebo-Regular",
  },
  column3: {
    flex: 2,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Heebo-Regular",
  },
  column4: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Heebo-Regular",
  },
  column5: {
    flex: 2,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Heebo-Regular",
  },
  column6: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Heebo-Regular",
  },
});
