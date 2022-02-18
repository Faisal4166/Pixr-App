import { StyleSheet, Dimensions } from "react-native";
import Theme from "../../Utils/Theme";
const styles = StyleSheet.create({
  txtLabel: {
    color: Theme.txtWhite,
    // fontWeight: Theme.bold,
    fontSize: Theme.txtMedium1,
  },
  txtLabelGoogle: {
    color: Theme.placeHolderCol,
    fontSize: Theme.txtMedium1,
  },
  txtLabelFacebook: {
    color: Theme.white,
    fontSize: Theme.txtMedium1,
  },
  btnWrap: {
    backgroundColor: Theme.purple,
    width: Theme.wp("80%"),
    height: Theme.hp("8%"),
    borderRadius: 2,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  btnWrapGoogle: {
    flexDirection: "row",
    backgroundColor: Theme.white,
    width: Theme.wp("80%"),
    height: Theme.hp("8%"),
    borderRadius: 2,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  btnWrapFacebook: {
    flexDirection: "row",
    backgroundColor: Theme.primary,
    width: Theme.wp("80%"),
    height: Theme.hp("8%"),
    borderRadius: 2,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  imgSigin: {
    width: Theme.wp("10%"),
    height: Theme.hp("7"),
  },
  btnSmallWrap: {
    backgroundColor: Theme.purple,
    width: Theme.wp("35%"),
    height: Theme.hp("6%"),
    alignItems: Theme.align,
    justifyContent: Theme.align,
    borderRadius: 2,
  },
  btnWrapGallery: {
    backgroundColor: Theme.white,
    padding: 5,
    width: Theme.wp("30%"),
    height: Theme.hp("16%"),
    flexDirection: Theme.column,
    // alignItems: Theme.align,
    // justifyContent: Theme.align,
    borderRadius: 5,
  },
  imgGallery: {
    width: Theme.wp("17%"),
    height: Theme.hp("10"),
    alignSelf: Theme.align,
    marginTop: 5,
    marginBottom: 5,
  },
  txtLabelGallery: {
    color: Theme.purple,
    fontSize: 14,
    textAlign: "center",
  },
  btnWrapProfile: {
    backgroundColor: Theme.white,
    width: Theme.wp("70%"),
    height: Theme.hp("6%"),
    borderRadius: 2,
    elevation: 5,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
});

export default styles;
