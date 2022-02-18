import React, { useState } from "react";
import { View, Image, Text, Share, TouchableOpacity } from "react-native";
import Buttons from "../../Components/Buttons/Buttons";
import styles from "./Styles";
import Theme from "../../Utils/Theme";
import Headers from "../../Components/Headers/Headers";

const Profile = ({ navigation }) => {
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
      <Headers
        labelIcon={true}
        label={"Pixr"}
        back={true}
        onPress={() => navigation.goBack()}
        // labelMedium={"Cihan Fuat Atkin Founder © Pixrcfa83@gmail.com"}
      />

      <View style={{ ...styles.setView }}>
        <Image
          source={require("../../Assests/Images/pro.png")}
          style={styles.profileImg}
        />
        <Text style={styles.profileTxt}>
          Cihan Fuat Atkin {"\n\n"} Pixrcfa83@gmail.com
        </Text>

        <View style={styles.btnView}>
          <View style={{ margin: "5%" }}>
            <Buttons
              btnProfile={true}
              label={"Edit Profile"}
              alignSelf={Theme.align}
              onPress={() => navigation.navigate("EditProfile")}
              BGcolor={Theme.white}
              txtColor={Theme.purple}
            />
          </View>
          {/* <View style={{ margin: "5%" }}>
            <Buttons
              btnProfile={true}
              label={"Invite Friends"}
              alignSelf={Theme.align}
              onPress={onShare}
              BGcolor={Theme.white}
              txtColor={Theme.purple}
            />
          </View> */}
          <View style={styles.wrapRow}>
            <Text style={styles.feedback}>Pixr feedback? </Text>
            <TouchableOpacity
              onPress={() => window.alert("Successful feedback")}
            >
              <Text style={styles.rateUs}>Rate Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
