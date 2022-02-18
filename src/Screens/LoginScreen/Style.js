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
    marginTop: "10%",
    paddingHorizontal: "5%",
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
  wrapPicker: {
    backgroundColor: Theme.grey,
    borderRadius: 10,
    height: Theme.hp("7%"),
    // marginTop: '5%',
  },
  //////////////////////////////////////

  txtParent: {
    color: Theme.primary,
    fontSize: Theme.txtMedium1,
    fontWeight: Theme.bold,
    marginTop: "2%",
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
  txtOR: {
    color: Theme.txtWhite,
    fontSize: 18,
    justifyContent: Theme.align,
    alignSelf: Theme.align,
  },
  txtLoading: {
    fontSize: Theme.txtMedium,
    color: Theme.primary,
    margin: "5%",
  },
  flexMarginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3%",
  },
  widthBorder: {
    borderWidth: 0.5,
    width: "40%",
  },
  txtOr: {
    color: Theme.placeHolderCol,
    fontSize: Theme.txtMedium,
    fontWeight: Theme.bold,
  },
  width45: {
    width: "45%",
  },
  width100: {
    width: "100%",
  },
  flexJustify: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  createAccount: {
    color: Theme.createAcc,
    marginTop: "25%"
  },
  forgotPassword: {
    borderBottomColor: Theme.createAcc,
    borderBottomWidth: 1,
    // width: 100,
  },
  createAccountView: {
    borderBottomColor: Theme.createAcc,
    borderBottomWidth: 1,
    width: 100,
  },
  wrapPassTxtInp: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: Theme.grey,
    borderRadius: 2,
    height: Theme.hp("7%"),
  },
  eye: {
    position: "absolute",
    right: Theme.wp("4%"),
    top: Theme.hp("2%"),
  },
  imgSigin: {
    width: Theme.wp("80%"),
    height: Theme.hp("8%"),
    padding: 10,
  },
  screenExcHeader: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  txtTitle: {
    fontSize: Theme.txtExtraLarge,
    color: Theme.primary,
    textAlign: Theme.align,
  },
  txtSubTitle: {
    fontSize: Theme.txtMedium,
    color: Theme.primary,
    fontWeight: Theme.bold,
    textAlign: Theme.align,
    marginTop: "5%",
  },
  wrapTitles: {
    backgroundColor: Theme.black,
    width: "100%",
    height: Theme.hp("20%"),
    marginTop: "20%",
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  wrapBtn: {
    marginTop: "30%",
    alignItems: Theme.align,
  },
});

export default styles;
