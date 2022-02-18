import { StyleSheet } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: Theme.align,
    backgroundColor: Theme.black, //light
    justifyContent: Theme.align,
  },
  txt: {
    color: Theme.purple,
    fontSize: 40,
    fontWeight: Theme.bold,
    justifyContent: Theme.align,
    alignSelf: Theme.align,
  },
  imgSplash: {
    width: Theme.wp("30%"),
    height: Theme.wp("30%"),
    alignSelf: Theme.align,
  },
  lottieView: {
    width: Theme.wp("100%"),
    height: Theme.hp("40%"),
    position: "absolute",
    bottom: 10,
  },
});

export default styles;
