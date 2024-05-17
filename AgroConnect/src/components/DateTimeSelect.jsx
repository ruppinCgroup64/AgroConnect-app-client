
//get setDate and setDate to show in the screen and return comp with date time picker

import { useState, useContext } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";

export default function DateTimeSelect({
  setDateHour,
  setDateHourShow,
  DateHourShow,
  content,
}) 
{
    
  const theme = useContext(themeContext);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const formattedDateTime = changeFormat(dt);
    setDateHourShow(formattedDateTime);
    setDateHour(date);
    setDatePickerVisibility(false);
    console.log(date)
  };

  const changeFormat = (dt) => {
    const day = String(dt.getDate()).padStart(2, "0");
    const month = String(dt.getMonth() + 1).padStart(2, "0");
    const year = String(dt.getFullYear()).slice(2);
    const hours = String(dt.getHours()).padStart(2, "0");
    const minutes = String(dt.getMinutes()).padStart(2, "0");
    const seconds = String(dt.getSeconds()).padStart(2, "0");
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  };
  return (
    <View
      style={[
        style.inputContainer,
        {
          borderColor: theme.input,
          backgroundColor: theme.input,
          marginTop: 20,
        },
      ]}
    >
      <TextInput
        placeholder={content}
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
        />
        <Icon name="calendar-outline" color={Colors.disable} size={20} />
      </TouchableOpacity>
    </View>
  );
}
