import React, { useState, useRef, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import Headers from "../../Components/Headers/Headers";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { RNCamera, FaceDetector } from "react-native-camera";
import { useCamera } from "react-native-camera-hooks";
import RNFS from "react-native-fs";
import ImagePicker from "react-native-image-crop-picker";

const Home = ({ navigation }) => {
  const [cam, setCam] = useState(false);
  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const [camMode, setCamMode] = useState(false);
  const [backCam, setBackCam] = useState(RNCamera.Constants.Type.front);
  const [close, setClose] = useState(false);

  useEffect(() => {
    captureHandle();
  }, [captureHandle]);

  const captureHandle = async () => {
    setCam(true);
    try {
      const data = await takePicture();
      // console.log("DATA", data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + "/MyTest.jpg";
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log("image moved", filePath, "-- to --", newFilePath);
        })
        .catch((error) => {
          console.log("Error path", error);
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const mode = () => {
    if (camMode === false) {
      setBackCam(RNCamera.Constants.Type.back);
      setCamMode(true);
    } else if (camMode === true) {
      setCamMode(false);
      setBackCam(RNCamera.Constants.Type.front);
    } else {
      alert("Please on your mobile camera");
    }
  };

  const drawer = () => {
    if (close === false) {
      setClose(true);
    } else if (close === true) {
      setClose(false);
    } else {
      alert("click menu button");
    }
  };

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

  return (
    <View style={styles.MainView}>
      {/* <Headers
        labelIcon={true}
        label={"Pixr"}
        labelOne={"Dashboard"}
        onPress={() => navigation.navigate("Profile")}
        url={require("../../Assests/Images/setting.png")}
      /> */}

      {cam === true ? (
        <View style={styles.container}>
          <RNCamera
            ref={cameraRef}
            style={styles.camera}
            type={backCam}
            flashMode={RNCamera.Constants.FlashMode.off}
          />
          {close === true ? (
            <View style={styles.snapWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}
                style={styles.capture}
              >
                <MaterialIcons
                  name={"notifications"}
                  size={70}
                  color={"#000"}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={styles.capture}
              >
                <MaterialIcons name={"person"} size={70} color={"#000"} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => gallery()}
                style={styles.capture}
              >
                <Entypo name={"images"} size={60} color={"#000"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => video()} style={styles.capture}>
                <Feather name={"video"} size={60} color={"#000"} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openCameraOption()}
                style={styles.capture}
              >
                <Entypo name={"camera"} size={60} color={"#000"} />
              </TouchableOpacity>
            </View>
          ) : null}

          <View style={styles.btnCamera}>
            <View style={styles.viewCamera}>
              <TouchableOpacity onPress={() => drawer()} style={styles.capture}>
                <Entypo name={"menu"} size={35} color={"#fff"} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => captureHandle()}
              style={styles.capture}
            >
              <Ionicons name={"md-radio-button-on"} size={60} color={"#fff"} />
            </TouchableOpacity>
            <View style={styles.refCamera}>
              <TouchableOpacity onPress={() => mode()} style={styles.capture}>
                <EvilIcons name={"refresh"} size={35} color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Home;
