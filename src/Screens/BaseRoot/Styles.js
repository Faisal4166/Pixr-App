import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.black,
  },
  txtOR:{
    color: Theme.txtWhite,
    fontSize: 18,
    justifyContent: Theme.align,
    alignSelf: Theme.align,
  },
  setView: {
    width: Theme.wp('100%'),
    height: Theme.hp('100%'),
    alignSelf: Theme.align,
    backgroundColor: Theme.black,
    paddingTop: 30,
  },
});

export default styles;
