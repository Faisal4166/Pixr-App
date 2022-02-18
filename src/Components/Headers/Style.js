import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: Theme.black,
    flexDirection: Theme.column,
    justifyContent: Theme.between,
    padding: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    alignItems: Theme.align,
  },

  capture: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 20,
    top: 40,
  },
  txtLabel: {
    color: Theme.purple,
    fontSize: Theme.txtExtraLarge,
    fontWeight: Theme.bold,
  },
  logoStyle: {
    width: 200,
    height: 70,
  },
  txtLabelOne: {
    color: Theme.txtWhite,
    fontSize: Theme.txtLarge,
  },
  txtLabelMedium: {
    color: Theme.txtWhite,
    fontSize: Theme.txtMedium2,
  },
  Icon: {
    width: 35,
    height: 35,
  },
  btnProfile: {
    width: 50,
    height: 50,
    right: 25,
    top: 30,
    position: Theme.absolute,
  },
});

export default styles;
