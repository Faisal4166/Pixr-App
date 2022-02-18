import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import Theme from "../../Utils/Theme";
import styles from "./Style";
const Headers = (props) => {
  const {
    btnSmall,
    label,
    onPress,
    alignSelf,
    btnMedium,
    btnGoogle,
    btnFacebook,
    btnDashboard,
    url,
    btnProfile,
    txtColor,
    width,
  } = props;
  return (
    <>
      {btnSmall === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnSmallWrap,
            backgroundColor: props.BGcolor,
            width: props.width,
          }}
          onPress={onPress}
        >
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : btnMedium === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrap,
            alignSelf: alignSelf,
          }}
          onPress={onPress}
        >
          <Text style={styles.txtLabel}>{label}</Text>
        </TouchableOpacity>
      ) : btnGoogle === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrapGoogle,
            alignSelf: alignSelf,
            justifyContent: Theme.evenly,
            paddingEnd: 50,
          }}
          onPress={onPress}
        >
          <Image
            source={require("../../Assests/Images/google.jpg")}
            style={styles.imgSigin}
          />
          <Text style={styles.txtLabelGoogle}>{label}</Text>
        </TouchableOpacity>
      ) : btnFacebook === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrapFacebook,
            alignSelf: alignSelf,
            justifyContent: Theme.evenly,
            paddingEnd: 50,
          }}
          onPress={onPress}
        >
          <Image
            source={require("../../Assests/Images/facebook.png")}
            style={styles.imgSigin}
          />
          <Text style={styles.txtLabelFacebook}>{label}</Text>
        </TouchableOpacity>
      ) : btnDashboard == true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrapGallery,
            alignSelf: alignSelf,
          }}
          onPress={onPress}
        >
          <Image source={url} style={styles.imgGallery} />
          <Text style={styles.txtLabelGallery}>{label}</Text>
        </TouchableOpacity>
      ) : btnProfile == true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrapProfile,
            alignSelf: alignSelf,
          }}
          onPress={onPress}
        >
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};
export default Headers;
