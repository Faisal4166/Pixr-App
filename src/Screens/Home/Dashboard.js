import React, { useState, useRef, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, Share } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import Headers from "../../Components/Headers/Headers";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { RNCamera, FaceDetector } from "react-native-camera";
import { useCamera } from "react-native-camera-hooks";
import RNFS from "react-native-fs";
import ImagePicker from "react-native-image-crop-picker";

const Home = ({ navigation }) => {
  const [cam, setCam] = useState(false);
  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const [camMode, setCamMode] = useState(false);
  const [backCam, setBackCam] = useState(RNCamera.Constants.Type.back);
  const [close, setClose] = useState(false);

  const openCameraOption = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log("image", image);
      // setImages(image.path);
      // setImageDisplay(true);
    });
  };

  const gallery = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      console.log(images);
    });
  };

  const video = () => {
    ImagePicker.openCamera({
      mediaType: "video",
    }).then((image) => {
      console.log(image);
    });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "www.pixr.com",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.MainView}>
      <Image
        style={styles.img}
        source={require("../../Assests/Images/pixrBg.png")}
      />
      <View style={styles.rowWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.capture}
        >
          <MaterialIcons name={"person"} size={120} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onShare()} style={styles.capture}>
          <MaterialCommunityIcons
            name={"account-group"}
            size={120}
            color={"#fff"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rowWrap}>
        <TouchableOpacity onPress={() => gallery()} style={styles.capture}>
          <Entypo name={"images"} size={105} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}
          style={styles.capture}
        >
          <MaterialIcons name={"notifications"} size={110} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.rowWrap}>
        <TouchableOpacity onPress={() => video()} style={styles.capture}>
          <FontAwesome name={"video-camera"} size={100} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openCameraOption()}
          style={styles.capture}
        >
          <Entypo name={"camera"} size={100} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
