import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar, LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Theme from "../../Utils/Theme";
const Stack = createNativeStackNavigator();
//Screens Imported
import SplashScreen from "../Splash/Splash";
import LoginScreen from "../LoginScreen/LoginScreen";
import baseRoot from "../BaseRoot/baseRoot";
import SignUp from "../SignUp/SignUp";
import createFacialId from "../AccountSetting/createFacialId";
import Agreement from "../AccountSetting/Agreement";
import Home from "../Home/Home";
import Gallery from "../Home/Gallery";
import Profile from "../Profile/Profile";
import EditProfile from "../Profile/EditProfile";
import ImageDisplay from "../Home/ImageDisplay";
import Notifications from "../Notifications/Notifications";
import Dashboard from "../../Screens/Home/Dashboard";
import ForgotPassword from "../Forgot/ForgotPassword";

function Navigation() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="dark-content" backgroundColor={Theme.black} />
        )}
      </View>

      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="baseRoot" component={baseRoot} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="createFacialId" component={createFacialId} />
        <Stack.Screen name="Agreement" component={Agreement} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default Navigation;
