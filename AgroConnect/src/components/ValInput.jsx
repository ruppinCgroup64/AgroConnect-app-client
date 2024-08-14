//get value, set of value, content to show to know what the user need to add, keyboard type and side of
//the inpud needed to be. 
//show text input and text above it indicates what the user need to add

import React, { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";

export default function ValInput({ val, setVal, content, keyboardType, side }) {
  const theme = useContext(themeContext);

  return (
    <View style={{ marginTop: 5 }}>
      <Text style={[
        style.s14,
        style.textTopInput
      ]}>
        {content}
      </Text>
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
          value={val}
          selectionColor={Colors.primary}
          style={[
            style.s14,
            {
              color: theme.txt,
              flex: 1,
              textAlign: val && side ? "left" : "right"
            }
          ]}
          onChangeText={setVal}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}