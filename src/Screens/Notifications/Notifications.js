import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";
import Headers from "../../Components/Headers/Headers";
import FastImage from "react-native-fast-image";

const DATA = [
  {
    id: "1",
    image: require("../../Assests/Images/person.jpg"),
    title: "message like “Congratulations! ",
  },
  {
    id: "2",
    image: require("../../Assests/Images/person2.jpg"),
    title: "Pump it up with more than just text. ",
  },
  {
    id: "3",
    image: require("../../Assests/Images/rose.jpg"),
    title: "Emotions matter in your push notification. ",
  },
  {
    id: "4",
    image: require("../../Assests/Images/person.jpg"),
    title: "Ask questions.",
  },
  {
    id: "5",
    image: require("../../Assests/Images/person.jpg"),
    title: "Be a problem solver. ",
  },
  {
    id: "6",
    image: require("../../Assests/Images/rose.jpg"),
    title: "Keep your push notification short and to the point.",
  },
  {
    id: "7",
    image: require("../../Assests/Images/rose.jpg"),
    title: "message like “Congratulations!",
  },
  {
    id: "8",
    image: require("../../Assests/Images/rose.jpg"),
    title:
      "Goal-driven: “Does the notification drive users to take a particular action? ",
  },
  {
    id: "9",
    image: require("../../Assests/Images/person2.jpg"),
    title: "Does the notification enrich the user's app experience? ",
  },
  {
    id: "10",
    image: require("../../Assests/Images/person2.jpg"),
    title: "Set the notification content.",
  },
  {
    id: "11",
    image: require("../../Assests/Images/person2.jpg"),
    title: "Create a channel and set the importance ",
  },
  {
    id: "12",
    image: require("../../Assests/Images/person2.jpg"),
    title: "Set the notification's tap action. ",
  },
];

const Item = ({ title, id, image }) => (
  <TouchableOpacity onPress={() => console.log("push notification")}>
    <View style={styles.item}>
      <FastImage source={image} style={styles.img} />
      <Text style={styles.txt}>
        {id}. {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const Notifications = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} image={item.image} />
  );

  return (
    <SafeAreaView style={styles.list}>
      <Headers
        labelIcon={true}
        label={"Pixr"}
        labelOne={"Notifications"}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        // horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Notifications;
