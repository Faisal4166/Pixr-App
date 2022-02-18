import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";

let deviceWidth = Dimensions.get("window").width;
let deviceHight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  pixr: {
    color: Theme.black,
    fontSize: 50,
    alignSelf: Theme.align,
    marginTop: "10%",
  },
  img: {
    alignSelf: Theme.align,
    marginTop: "10%",
    width: 220,
    height: 100,
  },
  back: {
    position: "absolute",
    left: 20,
    top: 40,
  },
  rowWrap: {
    marginTop: "5%",
    flexDirection: Theme.row,
    justifyContent: "space-evenly",
  },
  setView: {
    width: Theme.wp("90%"),
    alignSelf: Theme.align,
  },
  imgFace: {
    width: "60%",
    height: "70%",
    justifyContent: Theme.align,
    alignSelf: Theme.align,
  },
  faceView: {
    justifyContent: Theme.align,
    alignSelf: Theme.align,
    width: Theme.wp("80%"),
    height: Theme.hp("40%"),
  },
  descriptionView: {
    paddingHorizontal: 10,
  },
  txtDescription: {
    color: Theme.white,
    fontSize: 18,
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
    marginTop: 30,
    padding: 10,
    width: Theme.wp("80%"),
    height: Theme.hp("45%"),
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
  list: {
    backgroundColor: Theme.white,
    width: Theme.wp("100%"),
    height: Theme.hp("100%"),
  },
  // item: {
  //   backgroundColor: Theme.purple,
  //   padding: 5,
  //   margin: 10,
  //   marginVertical: 8,
  //   width: 110,
  //   height: 110,
  //   borderRadius: 5,
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  // },
  image: {
    height: deviceHight / 4,
    width: deviceWidth / 3,
    borderRadius: 10,
    margin: 2,

    // width: 100,
    // height: 100,
    // borderRadius: 5,
  },
  safeWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    position: "relative",
    bottom: 0,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    borderRadius: 20,
    alignSelf: "center",
    margin: 20,
  },
  snapWrapper: {
    flex: 1,
    flexDirection: "column",
    width: Theme.wp("40%"),
    height: Theme.hp("82%"),
    justifyContent: "center",
    backgroundColor: "#797d8580",
    position: "absolute",
    top: 0,
    left: -30,
    borderRadius: 20,

    // right: 16,
  },
  snapText: {
    borderRadius: 20,
    fontSize: 14,
    color: "red",
  },
  slider: {
    position: "absolute",
    right: -15,
    alignSelf: "flex-end",
  },
  btnCamera: {
    flexDirection: "row",
    justifyContent: Theme.align,
  },
  refCamera: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  viewCamera: {
    position: "absolute",
    left: 10,
    top: 20,
  },
});

export default styles;
