import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import themeContext from "../theme/themeContex";
import { Table, Row, Rows } from "react-native-table-component";
import { Colors } from "../theme/color";
import { TenderContext } from "../Context/TenderContext";

export default function LeadTable({ tenderId }) {
  const theme = useContext(themeContext);
  const { getTendersBidsFarmer, TenderBidsFarm } = useContext(TenderContext);
  const [createTableData, setcreateTableData] = useState([]);
  const [bids, setBids] = useState([]);
  var arr = [];
  //var createTableData=[];

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
    setBids(arr);
    console.log("arr", arr);
    //let dataRows = createArrData(arr);
    //console.log('rows ==> ', dataRows);
    /*setcreateTableData([
      arr[0].bidSortedNum,
      arr[0].consumerFirstName + " " + arr[0].consumerLastName,
      arr[0].consumerPhoneNum,
      arr[0].bidSortedNum,
      arr[0].consumerFirstName + " " + arr[0].consumerLastName,
      arr[0].consumerPhoneNum,
      arr[0].bidStatus.split(" ")[0] == "win" ? "כן" : "לא",
      arr[0].unitPrice,
      arr[0].bidStatus.split(" ")[1] !== undefined
        ? arr[0].bidStatus.split(" ")[1]
        : arr[0].bidAmount,
    ]);*/
  };
  useEffect(() => {
    funcRead();
  }, []);

  const BidTemplate = ({ bid }) => {
    return (
      <View>
        <View></View>
        <Text>{bid.bidAmount}</Text>
      </View>
    );
  };

  const tableHead = ["i", "שם", "טלפון", "מנצח", "מחיר למארז", "כמות"];

  const tableData = createTableData;

  // const tableData = [
  //     [arr[0].bidSortedNum,arr.consumerFirstName+" "+arr.consumerLastName,
  //     arr.consumerPhoneNum]
  //     // [SortedNum:TenderBidsFarm.bidSortedNum,fullName:TenderBidsFarm.consumerFirstName+" "+TenderBidsFarm.consumerLastName,
  //     //     phoneNum:TenderBidsFarm.consumerPhoneNum]
  // //         ,winner:TenderBidsFarm.bidStatus.split(' ')[0]=='win'?'כן':'לא',
  // //         price:TenderBidsFarm.unitPrice,amount:TenderBidsFarm.bidStatus.split(' ')[1]!==undefined?TenderBidsFarm.bidStatus.split(' ')[1]:TenderBidsFarm.bidAmount}
  // ];

  return (
    <View style={styles.container}>
      {/* <Table borderStyle={{ borderWidth: 2, borderColor: Colors.primary }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table> */}
      {/* Header */}
      <View>
        <Text>id</Text>
        <Text>amount</Text>
      </View>
      {/* Data */}
      <View>
        {bids.map((item)=><BidTemplate bid={item}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: Colors.primary },
  text: { margin: 6, textAlign: "center" },
});
