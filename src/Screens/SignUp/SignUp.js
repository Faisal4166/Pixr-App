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
import PhoneInput from "react-native-phone-number-input";
import ImagePicker from "react-native-image-crop-picker";
import ActionSheet from "react-native-actions-sheet";
import { RadioButton } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import { register } from "../../Utils/Exports";
import Modal from "../../Components/Modals/Modals";
import { useSelector, useDispatch } from "react-redux";
import { SignUpData } from "../../redux/actions";

const actionSheetRef = createRef();

const reviewSchema = yup.object({
  FIRSTNAME: yup
    .string()
    .min(0, "Minimum Input")
    .required("First Name Required Field")
    .max(20, "Limit Exceed"),
  LASTNAME: yup
    .string()
    .min(0, "Minimum Input")
    .required("Last Name Required Field")
    .max(20, "Limit Exceed"),
  EMAIL: yup
    .string()
    .min(0, "Minimum Input")
    .required("Enter valid email")
    .max(50, "Limit Exceed"),
  CONFIRMEMAIL: yup
    .string()
    .min(0, "Minimum Input")
    .required("Enter valid email")
    .max(50, "Limit Exceed"),
  PASSWORD: yup
    .string()
    .required("Password field not empty")
    .min(6, "Minmum 6 Strings Required")
    .max(30, "Limit Exceed"),
  PHONENUMBER: yup
    .string()
    .required("Password field not empty")
    .min(6, "Minmum 6 Strings Required")
    .max(30, "Limit Exceed"),
});

const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [DOB, setDOB] = useState("04-04-1997");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [icEye, setIcEye] = useState("eye-with-line");
  const [userPhone, setUserPhone] = useState("");
  const [imageDisplay, setImageDisplay] = useState(false);
  const [images, setImages] = useState("");
  const [showAction, setShowAction] = useState(null);
  const [cca2, setCCA2] = "US";
  const [checked, setChecked] = React.useState("first");
  const [loader, Setloader] = useState(false);
  const { loginData, signUpData } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  let timer1 = setTimeout(
    () => setShowAction(actionSheetRef.current?.hide()),
    10000
  );
  useEffect(() => {
    return () => {
      clearTimeout(timer1);
    };
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


  // console.log("@@@@@@  ", loginData.user_id);


  const signUpUser = (FIRSTNAME, LASTNAME, EMAIL, gender, DOB, PHONENUMBER, PASSWORD) => {
    // console.log("Signup");
    // console.log("values   ", FULLNAME);
    // console.log("values   ", EMAIL);
    // console.log("values   ", PHONENUMBER);
    // console.log("values   ", PASSWORD);
    // console.log("values   ", CONFIRMEMAIL);
    const FULLNAME = FIRSTNAME + LASTNAME;

    Setloader(true);
    register(FIRSTNAME, LASTNAME, EMAIL, FULLNAME, gender, DOB, PHONENUMBER, PASSWORD)
      .then(({ data }) => {
        Setloader(false);
        console.log("DATA   ", data);
        navigation.replace('Home', {
          DATA: data,
        });
        //  dispatch(SignUpData(data));
      })
      .catch(error => {
        Setloader(false);
        alert('ERROR : ', error);
      });
  };

  onPressFlag = () => { };
  onChangePhoneNumber = (number) => {
    console.log(number);
    setUserPhone({ userPhone: number, setCCA2: cca2 });
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
        back={true}
        label={"Pixr"}
        labelOne={"Account Setup"}
        onPress={() => navigation.goBack()}
      />
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
      <KeyboardAwareScrollView>
        <View style={{ ...styles.setView, margin: "5%" }}>
          <Formik
            initialValues={{
              FIRSTNAME: firstName,
              LASTNAME: lastName,
              EMAIL: email,
              PHONENUMBER: userPhone,
              PASSWORD: password,
              CONFIRMEMAIL: confirmEmail
            }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              signUpUser(
                values.FIRSTNAME,
                values.LASTNAME,
                values.EMAIL,
                values.PHONENUMBER,
                values.PASSWORD,
                values.CONFIRMEMAIL
              );
            }}
          >
            {(props) => (
              <View style={styles.wrapEmailPass}>
                <TextInput
                  placeholder="First Name"
                  simpleTxtInput={true}
                  value={props.values.FIRSTNAME}
                  onChangeText={props.handleChange("FIRSTNAME")}
                />
                <Text style={styles.errorTxt}>
                  {props.touched.FIRSTNAME && props.errors.FIRSTNAME}
                </Text>
                <TextInput
                  placeholder="Last Name"
                  simpleTxtInput={true}
                  value={props.values.LASTNAME}
                  onChangeText={props.handleChange("LASTNAME")}
                />
                <Text style={styles.errorTxt}>
                  {props.touched.LASTNAME && props.errors.LASTNAME}
                </Text>

                {/* <View style={styles.btnRadioView}>
                  <View style={styles.btnWrap}>
                    <RadioButton
                      color={Theme.purple}
                      value="first"
                      status={checked === "first" ? "checked" : "unchecked"}
                      onPress={() => setChecked("first")}
                    />
                    <Text style={styles.btnRadio}>Male</Text>
                  </View>
                  <View style={styles.btnWrap}>
                    <RadioButton
                      color={Theme.purple}
                      value="second"
                      status={checked === "second" ? "checked" : "unchecked"}
                      onPress={() => setChecked("second")}
                    />
                    <Text style={styles.btnRadio}>Female</Text>
                  </View>
                </View> */}

                <View>
                  <View style={styles.wrapPassTxtInp}>
                    <TextInput
                      placeholder="Email"
                      simpleTxtInput={true}
                      value={props.values.EMAIL}
                      onChangeText={props.handleChange("EMAIL")}
                    />
                  </View>
                  <Text style={styles.errorTxt}>
                    {props.touched.EMAIL && props.errors.EMAIL}
                  </Text>
                </View>

                <View>
                  <View style={styles.wrapPassTxtInp}>
                    <TextInput
                      placeholder="Confirm Email"
                      simpleTxtInput={true}
                      value={props.values.CONFIRMEMAIL}
                      onChangeText={props.handleChange("CONFIRMEMAIL")}
                    />
                  </View>
                  <Text style={styles.errorTxt}>
                    {props.touched.CONFIRMEMAIL && props.errors.CONFIRMEMAIL}
                  </Text>
                </View>

                <View>
                  <View style={styles.wrapPassTxtInpp}>
                    <TextInput
                      placeholder="Password"
                      simpleTxtInput={true}
                      value={props.values.PASSWORD}
                      secureTextEntry={showPassword}
                      maxLength={25}
                      onChangeText={props.handleChange("PASSWORD")}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.PASSWORD && props.errors.PASSWORD}
                    </Text>
                    <Entypo
                      name={icEye}
                      size={Theme.iconSize}
                      style={styles.eye}
                      color="grey"
                      onPress={() => eyeIconFun()}
                    />
                  </View>
                </View>

                <View>
                  {/* <View style={styles.wrapPassTxtInput}> */}
                  <View>
                    <PhoneInput
                      value={userPhone}
                      label={"America"}
                      // layout="first"
                      // withShadow
                      // autoFocus
                      defaultCode={"US"}
                      allowZeroAfterCountryCode={false}
                      containerStyle={styles.countryContainer}
                      textContainerStyle={styles.txtPhone}
                      onChangePhoneNumber={onChangePhoneNumber}
                    />
                  </View>

                  <View style={{ margin: "5%", top: 7 }}>
                    <Buttons
                      btnMedium={true}
                      label={"Next"}
                      alignSelf={Theme.align}
                      // onPress={() => signUpUser()}
                      onPress={props.handleSubmit}
                      // onPress={() => navigation.navigate("createFacialId")}
                      BGcolor={Theme.white}
                      txtColor={Theme.primary}
                    />
                  </View>
                </View>
              </View>
            )}
          </Formik>
          <Modal
            loader={loader}
            loaderIndicator={true}
            label={"Signing In please wait..."}
          />
        </View>
      </KeyboardAwareScrollView>
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
    </View>
  );
};

export default SignUp;
