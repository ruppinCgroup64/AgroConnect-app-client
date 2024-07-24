import {
    View,
    StyleSheet
} from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../theme/themeContex'
import { Table, Row, Rows } from 'react-native-table-component';
import { Colors } from '../theme/color'

export default function LeadTable() {
    const theme = useContext(themeContext);

    const tableHead = ['מיקום', 'מחיר ליחידה', "מס' יחידות"];
    const tableData = [
        ['1', '25₪', '4'],
        ['2', '24₪', '2'],
        ['3', '22₪', '1'],
        ['4', '21₪', '2']
    ];

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: Colors.primary }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData} textStyle={styles.text} />
            </Table>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: Colors.primary }, 
    text: { margin: 6, textAlign: 'center' }
});
