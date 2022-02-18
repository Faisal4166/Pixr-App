import React from "react";
import { Dimensions, ImageBackground, View, Text } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHight = Dimensions.get("window").height;

const ImageDisplay = ({ navigation, route }) => {
  // const details = route?.params?.url;
  // console.log("URL", route.params.details);
  return (
    <View>
      <Text
        style={{
          color: "red",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
        }}
      >
        Display images
      </Text>
      {/* <ImageBackground
        source={props.route.params.url}
        style={{ height: deviceHight, width: deviceWidth }}
      /> */}
    </View>
  );
};
export default ImageDisplay;
