import React, { useEffect, useState, createRef } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import TextInput from "../../Components/TextInputs/TextInputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import { Formik } from "formik";
import * as yup from "yup";
import Headers from "../../Components/Headers/Headers";
import ImagePicker from "react-native-image-crop-picker";
import ActionSheet from "react-native-actions-sheet";
import Entypo from "react-native-vector-icons/Entypo";

const actionSheetRef = createRef();

const reviewSchema = yup.object({
  UserName: yup
    .string()
    .min(0, "Minimum Input")
    .required("User Name is Required Field")
    .max(20, "Limit Exceed"),
  Password: yup
    .string()
    .required("Password field not empty")
    .min(6, "Minmum 6 Strings Required")
    .max(30, "Limit Exceed"),
});
const EditProfile = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [imageDisplay, setImageDisplay] = useState(false);
  const [images, setImages] = useState("");
  const [showAction, setShowAction] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [icEye, setIcEye] = useState("eye-with-line");

  let timer1 = setTimeout(
    () => setShowAction(actionSheetRef.current?.hide()),
    10000
  );
  useEffect(() => {
    return () => {
      clearTimeout(timer1);
    };
    // setTimeout(() => {
    //   actionSheetRef.current?.hide();
    // }, 2000);
  }, [showAction]);

  const onActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const openCameraOption = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log("res path ", image.path);
      setImages(image.path);
      setImageDisplay(true);
      actionSheetRef.current?.hide();
    });
  };

  const openGalleryOption = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((Images) => {
      console.log("res path ", Images[0].path);
      setImages(Images[0].path);
      setImageDisplay(true);
      actionSheetRef.current?.hide();
    });
  };

  console.log("Gallery image ", images);

  const updateProfile = (UserName, Password) => {
    Setloader(true);
    // loginUser(UserName, Password)
    //   .then(({ data }) => {
    //     Setloader(false);
    //     navigation.replace("Home", {
    //       DATA: data,
    //     });
    //   })
    //   .catch((error) => {
    //     Setloader(false);
    //     alert("ERROR : ", error);
    //   });
  };

  //Set Eye Icon
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye("eye");
    } else {
      setIcEye("eye-with-line");
    }
  };

  return (
    <View style={styles.MainView}>
      <Headers
        labelIcon={true}
        label={"Pixr"}
        back={true}
        labelOne={"Edit Profile"}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView>
        {imageDisplay == false ? (
          <TouchableOpacity onPress={() => onActionSheet()}>
            <Image
              source={require("../../Assests/Images/pro.png")}
              style={styles.imgProfile}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.imgProfile}>
            <TouchableOpacity onPress={() => onActionSheet()}>
              <Image source={{ uri: images }} style={styles.imgShow} />
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.txtPro}>
          Cihan Fuat Atkin {"\n\n"} Pixrcfa83@gmail.com
        </Text>

        <View style={{ ...styles.setView, margin: "5%" }}>
          <Formik
            initialValues={{ UserName: userName, Password: password }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              updateProfile(values.UserName, values.Password);
            }}
          >
            {(props) => (
              <View style={styles.wrapEmailPass}>
                <TextInput
                  placeholder="Edit Email"
                  simpleTxtInput={true}
                  value={props.values.UserName}
                  onChangeText={props.handleChange("UserName")}
                />
                <Text style={styles.errorTxt}>
                  {props.touched.UserName && props.errors.UserName}
                </Text>
                <View>
                  <View style={styles.wrapPassTxtInp}>
                    <TextInput
                      placeholder="Input Password"
                      simpleTxtInput={true}
                      value={props.values.Password}
                      secureTextEntry={showPassword}
                      maxLength={25}
                      onChangeText={props.handleChange("Password")}
                    />
                    <Entypo
                      name={icEye}
                      size={Theme.iconSize}
                      style={styles.eye}
                      color="grey"
                      onPress={() => eyeIconFun()}
                    />
                  </View>
                  <Text style={styles.errorTxt}>
                    {props.touched.Password && props.errors.Password}
                  </Text>
                </View>
                <View style={{ margin: "5%" }}>
                  <Buttons
                    btnMedium={true}
                    label={"Update"}
                    alignSelf={Theme.align}
                    onPress={() => navigation.navigate("Profile")}
                    BGcolor={Theme.white}
                    txtColor={Theme.primary}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>

        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <ActionSheet ref={actionSheetRef}>
            <View style={styles.actionSheet}>
              <Buttons
                btnSmall={true}
                width={Theme.wp("100%")}
                label={"Camera"}
                alignSelf={Theme.align}
                onPress={() => openCameraOption()}
                BGcolor={Theme.white}
                txtColor={Theme.purple}
              />

              <Buttons
                btnSmall={true}
                width={Theme.wp("100%")}
                label={"Gallery"}
                alignSelf={Theme.align}
                onPress={() => openGalleryOption()}
                BGcolor={Theme.white}
                txtColor={Theme.purple}
              />
            </View>
          </ActionSheet>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProfile;
