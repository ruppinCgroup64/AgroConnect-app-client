import { useState, useContext } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import moment from 'moment';

export default function DateTimeSelect({
  setDateHour,
  setDateHourShow,
  DateHourShow,
  content,
}) {
  const theme = useContext(themeContext);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (date) => {
    console.log(date);
    const dt = new Date(date);
    const formatted = dt.toLocaleString('en-GB', {
        hour12: false // Use 24-hour time
    });
    const formated2= formatted.replace(/,/g, '')
    const formattedDate = moment(date).format('YYYY/MM/DD HH:mm:ss');
    setDateHourShow(formated2);
    setDateHour(formattedDate);
    setDatePickerVisibility(false);
  };

  return (
    <View style={{ marginTop: 5 }}>
      <Text style={[style.s14, style.textTopInput]}>{content}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: theme.input,
            borderWidth: 1,
            backgroundColor: theme.input,
          },
        ]}
      >
        <TextInput
          textAlign="right"
          selectionColor={Colors.primary}
          placeholderTextColor={Colors.disable}
          value={DateHourShow}
          style={[style.s14, { color: theme.txt, flex: 1 }]}
        />
        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={() => setDatePickerVisibility(false)}
            textColor={Colors.primary}  // Add this line to set text color
          />
          <Icon name="calendar-outline" color={Colors.disable} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
