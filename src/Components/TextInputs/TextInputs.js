import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";
const TextInputs = (props) => {
  const {
    simpleTxtInput,
    label,
    onPressSend,
    value,
    onChangeText,
    secureTextEntry,
    placeholder,
    width,
    maxLength,
    chatTxtInput,
    whiteBgTxtInp,
    keyboardType,
    textAlign,
    facialID,
  } = props;
  return (
    <>
      {simpleTxtInput === true ? (
        <TextInput
          label={label}
          value={value}
          placeholderTextColor={Theme.placeHolderCol}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{ ...styles.txtInp, width: width }}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
      ) : facialID == true ? (
        <TextInput
          label={label}
          value={value}
          placeholderTextColor={Theme.purple}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{ ...styles.txtInp, width: width, textAlign: props.textAlign }}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
      ) : chatTxtInput === true ? (
        <View style={styles.wrapIconTxtInp}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={Theme.txtBlack}
            style={styles.txtInp75Width}
            placeholder={placeholder}
            maxLength={maxLength}
            multiline={true}
          />
          <View style={styles.width25}>
            <TouchableOpacity onPress={onPressSend}>
              <Text style={styles.txtSend}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : whiteBgTxtInp === true ? (
        <TextInput
          label={label}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={Theme.txtBlack}
          secureTextEntry={secureTextEntry}
          style={styles.txtInpBgWhite}
          placeholder={placeholder}
        />
      ) : null}
    </>
  );
};
export default TextInputs;
