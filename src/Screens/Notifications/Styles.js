import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";

let deviceWidth = Dimensions.get("window").width;
let deviceHight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  rowWrap: {
    flexDirection: Theme.row,
    justifyContent: Theme.align,
  },
  setView: {
    width: Theme.wp("90%"),
    alignSelf: Theme.align,
  },
  item: {
    flexDirection: "row",
    backgroundColor: Theme.white,
    width: Theme.wp("90%"),
    height: Theme.hp("10%"),
    alignSelf: Theme.align,
    alignItems: Theme.align,
    margin: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadios: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  list: {
    backgroundColor: Theme.black,
    height: Theme.hp("100%"),
    paddingBottom: 10,
    marginBottom: 30,
  },
  txt: {
    // paddingLeft: 20,
    color: Theme.txtBlue,
    fontSize: 16,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  img: {
    paddingLeft: 10,
    paddingRight: 10,
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});

export default styles;
