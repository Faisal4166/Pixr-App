import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  setView: {
    width: Theme.wp("90%"),
    alignSelf: Theme.align,
  },

  wrapEmailPass: {
    marginTop: "30%",
    paddingHorizontal: "5%",
    justifyContent: Theme.align,
  },
  imgLogo: {
    width: Theme.wp("30%"),
    height: Theme.wp("30%"),
    alignSelf: Theme.align,
  },
  txtName: {
    textAlign: Theme.align,
    fontWeight: Theme.bold,
    color: Theme.primary,
    fontSize: Theme.txtMedium1,
    margin: "5%",
  },
  txtUserName: {
    fontSize: Theme.txtMedium,
    // margin: '5%',
    paddingBottom: "2%",
    paddingLeft: "1%",
    fontWeight: Theme.bold,
    textDecorationLine: "underline",
  },

  txtInput: {
    marginTop: "4%",
  },
  btnLogin: {
    backgroundColor: Theme.primary,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    marginTop: "20%",
    height: Theme.hp("8%"),
  },
  txtLogin: {
    color: Theme.primary,
    fontSize: Theme.txtMedium2,
  },
  txtForgotPass: {
    fontSize: Theme.txtSmall,
    textAlign: Theme.align,
    color: Theme.primary,
    fontWeight: Theme.bold,
  },
  txtNotAccount: {
    marginTop: "5%",
    textAlign: Theme.align,
    color: Theme.txtBlack,
  },
  wrapActIndicator: {
    position: "absolute",
    width: "100%",
    height: "10%",
    marginTop: "100%",
  },
  errorTxt: {
    fontSize: Theme.txtSmallest,
    color: "red",
    fontWeight: 'bold',
    margin: "2%",
  },
});

export default styles;
