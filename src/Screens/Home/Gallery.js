import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./Styles";
import Headers from "../../Components/Headers/Headers";

const DATA = [
  {
    id: "1",
    image: require("../../Assests/Images/person.jpg"),
  },
  {
    id: "2",
    image: require("../../Assests/Images/person2.jpg"),
  },
  {
    id: "3",
    image: require("../../Assests/Images/rose.jpg"),
  },
];

const Item = ({ image, props, navigation }) => (
  <View style={styles.item}>
    <TouchableOpacity
      onPress={() => navigation.navigate("ImageDisplay", { url: image })}
    >
      <FastImage style={styles.image} source={image} />
    </TouchableOpacity>
  </View>
);

const Gallery = ({ navigation, props }) => {
  const renderItem = ({ item }) => (
    <Item image={item.image} navigation={navigation} props={props} />
  );

  return (
    <SafeAreaView style={styles.list}>
      <Headers
        labelIcon={true}
        label={"Pixr"}
        labelOne={"Gallery"}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        navigation={navigation}
        props={props}
      />
    </SafeAreaView>
  );
};

export default Gallery;
