import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
import FastImage from "react-native-fast-image";

import styles from "./Style";
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("baseRoot");
    }, 2000);
  }, []);

  return (
    <View style={styles.MainView}>
      <Image
        style={{ width: 200, height: 70 }}
        source={require("../../Assests/Images/pixrBg.png")}
      />
      <View style={styles.lottieView}>
        <FastImage
          style={styles.imgSplash}
          source={require('../../Assests/Images/wDot.gif')}
          resizeMode={'contain'}
        />
        {/* <Image
          style={{ width: 150, height: 60 }}
          source={require("../../Assests/Images/dottedGif1.gif")}
        /> */}
        {/* <LottieView
          size={30}
          loop
          autoPlay
          // autoSize
          source={require("../../Assests/Images/dotsgif.json")}
        /> */}
      </View>
    </View>
  );
};
export default Splash;
