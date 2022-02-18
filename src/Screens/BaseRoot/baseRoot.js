import React, { useEffect } from "react";
import { View, Image, Text, TouchableOpacity, BackHandler } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import Headers from "../../Components/Headers/Headers";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk";

const baseRoot = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "609407825594-hlg55g2a8bnfp8tat4l4cf1qsu4fmfqk.apps.googleusercontent.com",
    });
  }, []);

  async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
        "user_friends",
      ]);

      if (result.isCancelled) {
        throw "User cancelled the login process";
      }
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw "Something went wrong obtaining access token";
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken.toString()
      );

      await auth().signInWithCredential(facebookCredential);
      navigation.navigate("createFacialId");
    } catch (error) {
      console.log(error);
    }
  }

  async function onGoogleButtonPress() {
    console.log("auth");
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate("createFacialId");
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <View style={styles.MainView}>
      <Headers
        labelIcon={true}
        back={false}
        // label={"Pixr"}
        // labelOne={"Account Setup"}
        onPress={() => BackHandler.exitApp()}
      />
      <View style={{ ...styles.setView, margin: "5%" }}>
        <View style={{ margin: "5%" }}>
          <Buttons
            btnMedium={true}
            label={"Login"}
            alignSelf={Theme.align}
            onPress={() => navigation.navigate("LoginScreen")}
            // BGcolor={Theme.black}
            txtColor={Theme.purple}
          />
        </View>
        <View style={{ margin: "5%" }}>
          <Buttons
            btnMedium={true}
            label={"Sign Up"}
            alignSelf={Theme.align}
            onPress={() => navigation.navigate("SignUp")}
            // BGcolor={Theme.white}
            txtColor={Theme.purple}
          />
        </View>
        <Text style={styles.txtOR}>or</Text>
        <View style={{ margin: "5%" }}>
          <Buttons
            btnGoogle={true}
            label={"SignIn with Google"}
            alignSelf={Theme.align}
            onPress={() => onGoogleButtonPress()}
          />
        </View>

        <View style={{ margin: "5%" }}>
          <Buttons
            btnFacebook={true}
            label={"SignIn with Facebook"}
            alignSelf={Theme.align}
            onPress={() => onFacebookButtonPress()}
          />
        </View>
      </View>
    </View>
  );
};

export default baseRoot;
