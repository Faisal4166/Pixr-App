import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import TextInput from "../../Components/TextInputs/TextInputs";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import { Formik } from "formik";
import Headers from "../../Components/Headers/Headers";
import ImagePicker from "react-native-image-crop-picker";
import { useSelector, useDispatch } from 'react-redux';
import { trainData } from "../../Utils/Exports";


const createFacialId = ({ navigation }) => {
  const [facialId, setFacialId] = useState("");
  const [id, setId] = useState("");
  const [imageDisplay, setImageDisplay] = useState(false);
  const [images, setImages] = useState("");
  const { loginData } = useSelector(state => state.userReducer);
  const [loader, Setloader] = useState(false);


  const openCameraOption = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
      cameraType: 'front',
      mirror: true,
    }).then((image) => {
      setImages(image.path);
      setImageDisplay(true);
    });
  };


  useEffect(() => {
    // console.log("Res   ", loginData.user_id);
    setId(loginData.user_id)
  }, [])

  // var data = {
  //   uri: images,
  //   id: id,
  // }

  // console.log(data);


  const TrainFun = (id, images) => {
    console.log(`SEND  id`, id);
    console.log(`SEND images`, images);
    Setloader(true);
    trainData(id, images)
      .then((res) => {
        console.warn("response ", res);
        navigation.replace('Dashboard');
        Setloader(false);
      })
      .catch(error => {
        Setloader(false);
        alert('ERROR : ', error);
      });
  };



  return (
    <View style={styles.MainView}>
      <Headers
        labelIcon={true}
        label={"Pixr"}
        back={true}
        labelOne={"Face Profile Setup"}
        onPress={() => navigation.goBack()}
      />

      <View style={{ ...styles.setView, margin: "5%" }}>
        <Formik>
          <View style={styles.wrapFacialId}>
            {/* <TextInput
              textAlign={Theme.align}
              placeholder="Facial ID Setup"
              facialID={true}
              value={facialId}
              onChangeText={setFacialId}
              editable={false}
              selectTextOnFocus={false}
            /> */}

            {imageDisplay == false ? (
              <View style={styles.faceView}>
                <Image
                  source={require("../../Assests/Images/pixr.png")}
                  style={styles.imgFace}
                />
              </View>
            ) : (
              <View>
                <Image
                  // resizeMode="stretch"
                  source={{ uri: images }}
                  style={styles.imgShow}
                />
              </View>
            )}

            {imageDisplay == false ? null : (
              <View style={styles.successView}>
                <Text style={styles.txtSuccess}>Success</Text>
              </View>
            )}

            {imageDisplay == false ? (
              <View style={{ margin: "5%" }}>
                <Buttons
                  btnMedium={true}
                  label={"Start"}
                  alignSelf={Theme.align}
                  // onPress={() => navigation.navigate("cameraPhoto")}
                  onPress={() => openCameraOption()}
                  BGcolor={Theme.white}
                  txtColor={Theme.primary}
                />
              </View>
            ) : (
              <View style={{ margin: "5%" }}>
                <Buttons
                  btnMedium={true}
                  label={"Next"}
                  alignSelf={Theme.align}
                  onPress={() => TrainFun(id, images)}
                  // onPress={() => openCameraOption()}
                  BGcolor={Theme.white}
                  txtColor={Theme.primary}
                />
              </View>
            )}
          </View>
        </Formik>
      </View>
    </View>
  );
};

export default createFacialId;
