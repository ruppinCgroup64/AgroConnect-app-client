import {
  View, Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React, { useState, useContext, Component, useEffect } from 'react'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Colors } from '../theme/color'
import { TenderContext } from '../Context/TenderContext';
import { UsersContext } from '../Context/UserContext';
import style from '../theme/style';
import ValInput from './ValInput';


export default function LeadTable({ tenderId, minPrice, offeredPacks }) {
  const theme = useContext(themeContext);
  const { getTendersBidsConsumer, createBid} = useContext(TenderContext);
  const { consumer } = useContext(UsersContext);
  const [bids, setBids] = useState([]);
  const [newBid, setNewBid] = useState([]);
  const [consumerBids, setConsumerBids] = useState([]);
  const [lastBid, setLastBid] = useState({});
  const navigation = useNavigation();
  const [errors, setErrors] = useState({});
  const [amount, setAmount] = useState("") 
  const [unitprice, setUnitprice] = useState("") 
  const [newUnitprice, setNewUnitprice] = useState("") 
  const [flag, setFlag] = useState(false);

  function filterByStatus(inputArray) {
    return inputArray.filter(item => item.bidStatus !== 'deleted');
  }
  
  const funcRead = async () => {
    console.log("tenderId4444", tenderId);
    let arr = await getTendersBidsConsumer(tenderId);
    arr.sort((a, b) => a.bidSortedNum - b.bidSortedNum);
    setBids(arr);
  };
  function convertArray(inputArray) {
    return inputArray.map(item => [item.bidSortedNum, item.bidAmount]);
  }
  const [arr, setArr] = useState({});

useEffect(() => {
  funcRead();
}, [tenderId]);

useEffect(() => {
  if(bids.length!=0)
    { 
      setArr(
        {tableHead: ['מיקום',"מס' יחידות"],
        tableData: convertArray(bids)})
        setConsumerBids(filterByConsumerId(bids,consumer.id))
        setLastBid(filterByStatus(bids,consumer.id))
    }
}, [bids]);
  
const AddBid = async () => {
  let arr = await createBid(tenderId);
  arr.sort((a, b) => a.bidSortedNum - b.bidSortedNum);
  setBids(arr);
};

function filterByConsumerId(inputArray, consumerId) {
  return inputArray.filter(item => item.consumerId === consumerId);
}

const handleSubmit = () => {
  if(consumerBids.length==0)
    setNewUnitprice(unitprice)
  else
  {
    let counter= bids.filter(item => item.bidStatus == 'deleted');
    return setNewUnitprice(unitprice*counter*1.1)
  }
}

useEffect(()=>{
  if(newUnitprice!="")
  {
  if (validateForm()) {
    const updatedBid = {
      tenderNum: tenderId,
      amount: amount,
      unitPrice: newUnitprice,
      status: "string",
      consumerNum: consumer.id,
      bidDate: "2024-08-15T21:09:19.778Z",
      sortedNum: 0
    };
    setNewBid(updatedBid);
    setFlag(true);
    setErrors({});
  }
}
  },[newUnitprice])
  
  useEffect(() => {
    if (flag) {
      AddBid();
    }
    setFlag(false);
  }, [newBid]);


const validateForm = () => {
  const errors = {};
  if(unitprice<minPrice)
  {
    errors.min = "המחיר חייב להיות גבוהה מהמחיר המינימלי להצעה";
  }
  if(amount<=0)
    {
      errors.pack = "הכמות המוצעת חייבת להיות גדולה מ-0";
    }
  else if(amount>offeredPacks)
    {
      errors.pack = "לא ניתן לבחור כמות גדולה מהכמות המוצעת";
    }
    
  setErrors(errors);
  return Object.keys(errors).length === 0;
}

  return (
      <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 2, borderColor: Colors.primary }}>
              <Row data={arr.tableHead} style={styles.head} textStyle={styles.text} />
              <Rows data={arr.tableData} textStyle={styles.text} />
          </Table>
          {Object.keys(lastBid).length > 0?
          <View>
          <Text style={[style.r16, { color: theme.txt, fontSize: 10, textAlign: 'left', flex: 1, marginLeft: 5, color:"red" }]}>על המחיר להיות גבוה מ- {minPrice}</Text>
            <ValInput
            val={amount}
            setVal={setAmount}
            content={"כמות מוצעת"}
            keyboardType={"default"}
          />
          {errors.pack ? (
            <Text style={style.errorText}>{errors.pack}</Text>
            ) : null}
          <ValInput
            val={unitprice}
            setVal={setUnitprice}
            content={"מחיר מוצע"}
            keyboardType={"default"}
          />
          {errors.min ? (
          <Text style={style.errorText}>{errors.min}</Text>
          ) : null}
          <TouchableOpacity onPress={handleSubmit}
                        style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={[style.btntxt, { marginRight: 5 }]}>הוסף הצעה</Text>
                        <Icons name='plus-circle' size={20} color={Colors.secondary}></Icons>
          </TouchableOpacity>
          
          </View>:null}
          {Object.keys(lastBid).length > 0?
          <View>
            <Text style={[style.r16, { color: theme.txt, fontSize: 10, textAlign: 'left', flex: 1, marginLeft: 5, color:"red" }]}
                                    >ההצעה שלי:</Text>
                                    <Text style={[style.r16, { color: theme.txt, fontSize: 10, textAlign: 'left', flex: 1, marginLeft: 5, color:"red" }]}
                                    >{}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('CreateSalePoint')}
                        style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={[style.btn, { marginRight: 5 }]}>מחק הצעה</Text>
                        <Text style={[style.r16, { color: theme.txt, fontSize: 10, textAlign: 'left', flex: 1, marginLeft: 5, color:"red" }]}
                                    >שים לב כי במידה ותמחק הצעה ותגיש מחדש המחיר שהגשת ייקונס ויהיה גדול יותר ככל שתמחק ותגיש יותר הצעות</Text>
                        <Icons name='plus-circle' size={20} color={Colors.secondary}></Icons>
          </TouchableOpacity>
          </View>:null}
      </View>
  );//return

}//Table

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: Colors.primary }, 
  text: { margin: 6, textAlign: 'center' }
});