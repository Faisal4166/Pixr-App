import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  setView: {
    width: Theme.wp("100%"),
    alignSelf: Theme.align,
    top: 20,
  },
  wrapEmailPass: {
    width: Theme.wp("80%"),
    alignSelf: Theme.align,
  },
  eye: {
    position: "absolute",
    right: Theme.wp("4%"),
    top: Theme.hp("2%"),
  },
  wrapPassTxtInp: {
    backgroundColor: Theme.grey,
    borderRadius: 2,
    height: Theme.hp("7%"),
  },
  btnView: {
    borderTopWidth: 5,
    borderColor: Theme.purple,
    borderBottomWidth: 5,
    paddingBottom: 20,
  },
  rateUs: {
    color: Theme.purple,
    fontSize: 16,
    fontWeight: Theme.bold,
    paddingLeft: 5,
    fontStyle: "italic",
  },
  feedback: {
    fontSize: 16,
    color: Theme.txtWhite,
    fontStyle: "italic",
  },
  wrapRow: {
    flexDirection: Theme.row,
    justifyContent: Theme.align,
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: Theme.align,
    // top: -50,
  },
  imgShow: {
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: Theme.white,
    alignSelf: Theme.align,
  },
  profileImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: Theme.white,
    alignSelf: Theme.align,
    top: -40,
  },
  txtPro: {
    fontSize: 16,
    fontStyle: "italic",
    color: Theme.txtWhite,
    textAlign: Theme.align,
    paddingBottom: 10,
    top: 15,
  },
  profileTxt: {
    fontSize: 16,
    fontStyle: "italic",
    color: Theme.txtWhite,
    textAlign: Theme.align,
    paddingBottom: 10,
    top: -15,
  },
  actionSheet: {
    justifyContent: Theme.align,
    alignSelf: Theme.align,
    margin: 10,
    height: 100,
  },
});

export default styles;
