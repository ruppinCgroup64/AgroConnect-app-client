import {
  View, Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  LogBox
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
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
LogBox.ignoreAllLogs();

export default function LeadTable({ tenderId, closeTime, minPrice, offeredPacks }) {
  const theme = useContext(themeContext);
  const { getTendersBidsConsumer, createBid,deleteBid} = useContext(TenderContext);
  const { consumer } = useContext(UsersContext);
  const [bids, setBids] = useState([]);
  const [newBid, setNewBid] = useState([]);
  const [consumerBids, setConsumerBids] = useState([]);
  const [lastBid, setLastBid] = useState([]);
  const navigation = useNavigation();
  const [errors, setErrors] = useState({});
  const [amount, setAmount] = useState("") 
  const [unitprice, setUnitprice] = useState("") 
  const [newUnitprice, setNewUnitprice] = useState(0) 
  const [flag, setFlag] = useState(false);
  const [arr, setArr] = useState({});
  const [isWinner, setIsWinner] = useState(false);


  function filterByStatus(inputArray) {
    return inputArray.filter(item => item.consumerNum==consumer.id && item.status  !== 'Deleted');
  }
  
  const funcRead = async () => {
    let arr = await getTendersBidsConsumer(tenderId);
    arr.sort((a, b) => a.sortedNum - b.sortedNum);
    setBids(arr);
    setAmount("")
    setUnitprice("")
  };

  function convertArray(inputArray) {
    let arr2=inputArray.filter(item => item.status  !== 'Deleted');
    return arr2.map(item => [item.sortedNum, item.amount]);
  }


useEffect(() => {
  funcRead();
  console.log("1")
}, [tenderId]);

useEffect(() => {
  if(bids.length!=0)
    { 
      setArr(
        {tableHead: ['מיקום',"מס' יחידות"],
        tableData: convertArray(bids)})
        setConsumerBids(filterByConsumerId(bids,consumer.id))
        setLastBid(filterByStatus(bids,consumer.id))
        console.log("2", bids)
    }
}, [bids]);
  
const AddBid = async () => {
  let arr = await createBid(newBid);
  arr.sort((a, b) => a.bidSortedNum - b.bidSortedNum);
  funcRead()
};

function filterByConsumerId(inputArray, consumerId) {
  let arr=inputArray.filter(item => item.consumerNum === consumerId);
  console.log("7",arr)
  return arr
}

const handleSubmit = () => {
  if(consumerBids.length==0)
    setNewUnitprice(unitprice)
  else
  {
    let counter= bids.filter(item => item.status == 'Deleted').length;
    let unitprice1 = parseFloat(unitprice);
    let counter1 = parseFloat(counter);
    let calc=(unitprice1*counter1*0.05)+unitprice1;
    return setNewUnitprice(calc)
  }
}

const handleDelete=async()=>{
  let arr = await deleteBid(lastBid[0].id, tenderId);
  funcRead()
}

useEffect(()=>{
  if(newUnitprice>0)
  {
    console.log("unit price", newUnitprice)
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
    console.log("4", newBid)
    if (flag) {
      AddBid();
      setFlag(false);
      console.log("5", newBid)
    }
  }, [newBid, flag]);


const validateForm = () => {
  const errors = {};
  if(Number(unitprice)<Number(minPrice))
  {
    errors.min = "המחיר חייב להיות גבוהה מהמחיר המינימלי להצעה";
  }
  if(Number(amount)<=0)
    {
      errors.pack = "הכמות המוצעת חייבת להיות גדולה מ-0";
    }
  else if(Number(amount)>Number(offeredPacks))
    {
      errors.pack = "לא ניתן לבחור כמות גדולה מהכמות המוצעת";
    }
  setErrors(errors);
  return Object.keys(errors).length === 0;
}

const parseDateString = (dateString) => {
  const [datePart, timePart, period] = dateString.split(' '); // מפריד בין התאריך, השעה והתקופה (AM/PM)
  const [month, day, year] = datePart.split('/').map(Number); // מפרק את התאריך לפורמט mm/dd/yyyy
  let [hours, minutes, seconds] = timePart.split(':').map(Number); // מפרק את השעה לפורמט hh:mm:ss

  // התאמת השעה לפי AM/PM
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  return new Date(year, month - 1, day, hours, minutes, seconds); // יוצר אובייקט Date
};

const checkIfTimePassed = () => {
  const currentTime = new Date(); // הזמן הנוכחי
  const closeTimeDate = parseDateString(closeTime); // המרת ה-closeTime לאובייקט Date
  let ans=  closeTimeDate>currentTime;
  console.log("dates", ans,currentTime,closeTimeDate)
  return ans; // אם הזמן הנוכחי גדול מ-closeTime, הפונקציה תחזיר true
};

  return (
    
    <KeyboardAvoidingView behavior='padding'>
      <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 2, borderColor: Colors.primary }}>
              <Row data={arr.tableHead} style={styles.head} textStyle={{...styles.text}} />
              <Rows data={arr.tableData} textStyle={{...styles.text}} />
          </Table>
          {lastBid.length == 0?
          <View>
            <ValInput
            val={amount}
            setVal={setAmount}
            content={"כמות מארזים"}
            keyboardType={"numeric"}
          />
          {errors.pack ? (
            <Text style={style.errorText}>{errors.pack}</Text>
            ) : null}
          <ValInput
            val={unitprice}
            setVal={setUnitprice}
            content={"מחיר מוצע"}
            keyboardType={"numeric"}
          />           
          <Text style={style.errorText}>על המחיר להיות גבוה מ- {minPrice}</Text>
          {errors.min ? (
          <Text style={style.errorText}>{errors.min}</Text>
          ) : null}
          <TouchableOpacity onPress={handleSubmit}
                        style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={[style.btntxt, { marginRight: 5 }]}>הוסף הצעה</Text>
                        <Icons name='plus-circle' size={20} color={Colors.secondary}></Icons>
          </TouchableOpacity>
          </View>:null}
          {lastBid.length > 0 ?
          <View>
            <View style={{ 
              flexDirection: 'column', 
              justifyContent: 'center',
              borderColor: '#01B763', 
              borderWidth: 1, 
              borderRadius: 5,
              padding: 5, 
              margin: 5,
              flex:1
          }}>
    <Text style={[style.s18, { color: theme.txt, fontSize: 15, textAlign: 'center', marginLeft: 5,  }]}>
        ההצעה שלי:
    </Text>
    <Text style={[style.m18, { color: theme.txt, fontSize: 14, textAlign: 'center', marginLeft: 5, width:"100%" }]}>
        {lastBid[0].status.split(" ")[1] !== undefined ? lastBid[0].status.split(" ")[1] : lastBid[0].amount} מארזים במחיר של {lastBid[0].unitPrice} למארז
    </Text>
    {lastBid[0].status.split(" ")[0]=="win"?
     <Text style={[style.m18, { color: theme.txt, fontSize: 12, textAlign: 'center', marginLeft: 5, width:"100%" }]}>
     כרגע אתה ברשימת הזוכים, אך זה עשוי להשתנות
   </Text>:null}
   {lastBid[0].status.split(" ")[0]!="win"?
     <Text style={[style.m18, { color: theme.txt, fontSize: 12, textAlign: 'center', marginLeft: 5 }]}>
     אינך ברשימת הזוכים, כדאי שתנסה שוב ותגיש הצעה מחדש
   </Text>:null}
</View>
          {checkIfTimePassed()?
          <View><TouchableOpacity onPress={handleDelete}
                        style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={[style.btntxt, { marginRight: 5 }]}>מחק הצעה</Text>
                        <Icons name='trash-can-outline' size={20} color={Colors.secondary}></Icons>
          </TouchableOpacity>
          <Text style={[style.m16, { color: theme.txt, fontSize: 10, textAlign: 'left', flex: 1, marginLeft: 5, color:"red", marginTop:5 }]}
                                    >שים לב כי במידה ותמחק הצעה ותגיש מחדש המחיר שהגשת ייקנס ויהיה גדול יותר ככל שתמחק ותגיש יותר הצעות</Text>
          </View>:null}
          </View>:null}
      </View>
      </KeyboardAvoidingView>
  );//return

}//Table

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: Colors.primary }, 
  text: { margin: 6, textAlign: 'center',
    fontSize: 14,
    fontFamily: "Heebo-Regular"}
});