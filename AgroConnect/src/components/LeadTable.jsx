import {
  View, Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React, { useState, useContext, Component } from 'react'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Colors } from '../theme/color'


export default function LeadTable() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [AAA, setAAA] = useState({
    tableHead: ['מיקום', 'מחיר ליחידה',"מס' יחידות"],
    tableData: [
        ['1', '25₪', '4'],
        ['2', '24₪', '2'],
        ['3', '22₪', '1'],
        ['4', '21₪', '2']
    ]
});
  

  return (
      <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 2, borderColor: Colors.primary }}>
              <Row data={AAA.tableHead} style={styles.head} textStyle={styles.text} />
              <Rows data={AAA.tableData} textStyle={styles.text} />
          </Table>
      </View>
  );//return

}//Table

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: Colors.primary }, 
  text: { margin: 6, textAlign: 'center' }
});