
//get set value, value from the user, content, keyboardType, side=true (only if true you need to send) if the content need to be at the left when added, and show the TextInput

import {  useContext } from "react";
import { Keyboard, TextInput, View } from "react-native";
import style from "../theme/style";
import themeContext from "../theme/themeContex";
import { Colors } from "../theme/color";

export default function ValInput({val, setVal,content, keyboardType, side}) 
{
  const theme = useContext(themeContext);

  return (
    <View
          style={[
            style.inputContainer,
            {
              borderColor: theme.input,
              borderWidth: 1,
              backgroundColor: theme.input,
              marginTop: 20,
            },
          ]}
        >
          <TextInput
            placeholder={content}
            value={val}
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.disable}
            style={[
              style.s14,
              { color: theme.txt, flex: 1 },
              { textAlign: val&&side? "left" : "right" }
            ]}
            onChangeText={setVal}
            keyboardType={keyboardType}
          />
        </View>
  );
}