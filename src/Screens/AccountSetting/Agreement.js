import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, BackHandler } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import TextInput from "../../Components/TextInputs/TextInputs";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import { Formik } from "formik";
import Headers from "../../Components/Headers/Headers";
import ImagePicker from "react-native-image-crop-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const Agreement = ({ navigation }) => {
  const [facialId, setFacialId] = useState("");
  const [camera, setCamera] = useState(false);

  const openCameraOption = () => {
    if (camera == true) {
      console.log("true");
      setCamera(true);
    } else {
      console.log("false");
    }
  };

  return (
    <View style={styles.MainView}>
      <Headers
        labelIcon={true}
        label={"Pixr"}
        back={true}
        labelOne={"User Agreement"}
        onPress={() => navigation.goBack()}
      />

      <View style={{ ...styles.setView, margin: "5%" }}>
        <Formik>
          <View style={styles.wrapFacialId}>
            {/* <View style={styles.agreementView}>
              <Text style={styles.agreementText}>User Agreement</Text>
            </View> */}

            <View style={styles.desView}>
              <KeyboardAwareScrollView>
                <Text style={styles.txtDes}>
                  1. SOME BASIC YOU SHOULD KNOW ABOUT THESE TERMS OF USE
                </Text>
                <Text style={styles.txtSub}>
                  1.1 Agreement, bargain, compact, contract all suggest a
                  binding arrangement between two or more parties. Agreement
                  ranges in meaning from mutual understanding to binding
                  obligation. Bargain applies particularly to agreements about
                  buying and selling but also to haggling over terms in an
                  agreement. Compact applies to treaties or alliances between
                  nations or to solemn personal pledges. Contract is used
                  especially in law and business for such agreements as are
                  legally enforceable. Contrary to popular belief, Lorem Ipsum
                  is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section
                </Text>
              </KeyboardAwareScrollView>
            </View>
            <View style={styles.btnView}>
              <View style={{ margin: "5%" }}>
                <Buttons
                  btnSmall={true}
                  label={"Decline"}
                  width={Theme.wp("35%")}
                  alignSelf={Theme.align}
                  onPress={() => BackHandler.exitApp()}
                  BGcolor={Theme.iconCol}
                  txtColor={Theme.white}
                />
              </View>
              <View style={{ margin: "5%" }}>
                <Buttons
                  btnSmall={true}
                  label={"Accept"}
                  width={Theme.wp("35%")}
                  alignSelf={Theme.align}
                  onPress={() => navigation.navigate("LoginScreen")}
                  BGcolor={Theme.purple}
                  txtColor={Theme.white}
                />
              </View>
            </View>
          </View>
        </Formik>
      </View>
    </View>
  );
};

export default Agreement;
