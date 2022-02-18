import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";
import FastImage from "react-native-fast-image";
import Ionicons from "react-native-vector-icons/Ionicons";

const Headers = (props) => {
  const {
    labelIcon,
    label,
    labelHeader,
    labelOne,
    url,
    onPress,
    back,
    labelMedium,
  } = props;

  return (
    <>
      <View>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="light-content" />
        ) : (
          <StatusBar barStyle="light-content" backgroundColor={Theme.black} />
        )}
      </View>
      {labelIcon === true ? (
        <View style={styles.headerWrap}>
          {back === true ? (
            <TouchableOpacity onPress={onPress} style={styles.capture}>
              <Ionicons name={"chevron-back"} size={40} color={"#fff"} />
            </TouchableOpacity>
          ) : null}

          {/* <Text style={styles.txtLabel}>{label}</Text> */}
          <Image
            style={styles.logoStyle}
            source={require("../../Assests/Images/pixrBg.png")}
          />
          <Text style={styles.txtLabelOne}>{labelOne}</Text>
          {/* <Text style={styles.txtLabelMedium}>{labelMedium}</Text> */}
          <TouchableOpacity style={styles.btnProfile} onPress={onPress}>
            <FastImage style={styles.Icon} source={url} />
          </TouchableOpacity>
        </View>
      ) : labelHeader === true ? (
        <View style={styles.headerWrap}>
          <Text style={{ color: Theme.txtWhite }}>.</Text>
          <Text style={styles.txtLabel}>{label}</Text>
          <Text style={{ color: Theme.txtWhite }}>.</Text>
        </View>
      ) : null}
    </>
  );
};
export default Headers;
