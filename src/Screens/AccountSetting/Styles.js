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
  imgFace: {
    width: Theme.wp("100%"),
    height: Theme.hp("50%"),
    justifyContent: Theme.align,
    alignSelf: Theme.align,
    right: 3,
  },
  faceView: {
    // justifyContent: Theme.align,
    alignSelf: Theme.align,
    // right: 2,
    width: Theme.wp("100%"),
    height: Theme.hp("50%"),
  },
  descriptionView: {
    paddingHorizontal: 10,
  },
  txtDescription: {
    color: Theme.white,
    fontSize: 14,
  },
  successView: {
    paddingHorizontal: 10,
    alignSelf: Theme.align,
    marginTop: 10,
  },
  imgShow: {
    marginTop: 30,
    width: Theme.wp("80%"),
    height: Theme.hp("40%"),
    backgroundColor: Theme.white,
    alignSelf: Theme.align,
  },
  txtSuccess: {
    color: Theme.green,
    fontSize: 24,
  },
  wrapFacialId: {
    paddingHorizontal: "5%",
  },
  agreementView: {
    width: Theme.wp("80%"),
    height: Theme.hp("8%"),
    backgroundColor: Theme.white,
    borderWidth: 1,
    borderColor: Theme.purple,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    borderRadius: 2,
  },
  agreementText: {
    textAlign: Theme.align,
    color: Theme.purple,
    fontSize: 24,
  },
  desView: {
    // marginTop: 30,
    padding: 10,
    width: Theme.wp("80%"),
    height: Theme.hp("55%"),
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: Theme.white,
    borderColor: Theme.purple,
  },
  txtDes: {
    fontSize: 16,
    fontWeight: Theme.bold,
    color: Theme.black,
  },
  txtSub: {
    paddingTop: 10,
    fontSize: 14,
    color: Theme.black,
  },
  btnView: {
    marginTop: 10,
    width: Theme.wp("80%"),
    height: 20,
    flexDirection: Theme.row,
    justifyContent: Theme.align,
  },
});

export default styles;
