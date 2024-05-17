//Get a list of items which have id and name, put it in a drop down list in the correct context,
//show it and after selection set the selected item from the original list to "selectedItem"

import React, { useContext, useState } from "react";
import style from "../theme/style";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDownSelect({ list, content, setSelectedItem }) {

  const theme = useContext(themeContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(() =>
    list.map((i) => ({ value: i.id, label: i.name }))
  );
  const findItem = (item) => {
    const p = list.find((i) => {
      if (i.id == item.value) {
        setSelectedItem(i);
      }
    });
  };
  return (
    <DropDownPicker
      listMode="MODAL"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={(newValue) => {
        setValue(newValue);
      }}
      onSelectItem={(item) => {
        findItem(item);
      }}
      setItems={setItems}
      placeholder={content}
      placeholderStyle={{
        color: Colors.disable,
      }}
      style={[
        {
          borderColor: theme.input,
          borderWidth: 1,
          backgroundColor: theme.input,
          color: theme.txt,
          flex: 1,
          borderRadius: 15,
          marginTop: 20,
        },
        style.s14,
      ]}
      textStyle={[
        style.s14,
        {
          textAlign: "left",
          color: theme.txt,
        },
      ]}
    />
  );
}
