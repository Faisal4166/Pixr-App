import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Buttons from '../../Components/Buttons/Buttons';
import TextInput from '../../Components/TextInputs/TextInputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import styles from './Style';
import Theme from '../../Utils/Theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import Headers from '../../Components/Headers/Headers';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Entypo from 'react-native-vector-icons/Entypo';
import { loginUser } from '../../Utils/Exports';
import { LoginData } from '../../redux/actions';
import Modal from '../../Components/Modals/Modals';
import { useSelector, useDispatch } from 'react-redux';


const reviewSchema = yup.object({
  EMAIL: yup
    .string()
    .min(0, 'Minimum Input')
    .required('Enter valid email ')
    .max(50, 'Limit Exceed'),
  PASSWORD: yup
    .string()
    .required('Password field not empty')
    .min(6, 'Minmum 6 Strings Required')
    .max(30, 'Limit Exceed'),
});

const Login = ({ navigation }) => {
  // const [email, setEmail] = useState('tayyab@projectz.io');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('Projectz@123');
  const [password, setPassword] = useState('');
  const [loader, Setloader] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [icEye, setIcEye] = useState('eye-with-line');
  const { loginData } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  //Set Eye Icon
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye('eye');
    } else {
      setIcEye('eye-with-line');
    }
  };


  console.log("LOGIN DATA  ", loginData.user_id);

  //Login Api
  const loginFunc = (EMAIL, PASSWORD) => {
    Setloader(true);
    loginUser(EMAIL, PASSWORD)
      .then((res) => {
        // console.warn('Response ', JSON.stringify(res.data));
        console.log("response ", res.data);
        navigation.replace('createFacialId');
        dispatch(LoginData(res.data));
        Setloader(false);
      })
      .catch(error => {
        Setloader(false);
        alert('ERROR : ', error);
      });
  };


  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '609407825594-olt6h8l88lt3dp54lsj2fj6rif37ski6.apps.googleusercontent.com',
    });
  }, []);

  async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
        'user_friends',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken.toString(),
      );

      await auth().signInWithCredential(facebookCredential);
      navigation.navigate('createFacialId');
    } catch (error) {
      console.log(error);
    }
  }

  async function onGoogleButtonPress() {
    console.log('auth');
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('createFacialId');
    } catch (error) {
      console.log({ error });
      alert(error);
    }
  }

  return (
    <View style={styles.MainView}>
      <Headers
        labelIcon={true}
        label={'Pixr'}
        labelOne={'Login'}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView>
        <View style={{ ...styles.setView, margin: '5%' }}>
          <Formik
            initialValues={{ EMAIL: email, PASSWORD: password }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              loginFunc(values.EMAIL, values.PASSWORD);
            }}>
            {props => (
              <View style={styles.wrapEmailPass}>
                <TextInput
                  placeholder="Email"
                  simpleTxtInput={true}
                  value={props.values.EMAIL}
                  onChangeText={props.handleChange('EMAIL')}
                />
                <Text style={styles.errorTxt}>
                  {props.touched.EMAIL && props.errors.EMAIL}
                </Text>
                <View>
                  <View style={styles.wrapPassTxtInp}>
                    <TextInput
                      placeholder="Password"
                      simpleTxtInput={true}
                      value={props.values.PASSWORD}
                      secureTextEntry={showPassword}
                      maxLength={25}
                      onChangeText={props.handleChange('PASSWORD')}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.PASSWORD && props.errors.PASSWORD}
                    </Text>
                    <Entypo
                      name={icEye}
                      size={Theme.iconSize}
                      style={styles.eye}
                      color="grey"
                      onPress={() => eyeIconFun()}
                    />
                  </View>
                </View>
                <View style={styles.wrapRow}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.createAccountView}>
                    <Text style={styles.createAccount}>Create Account</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                    style={styles.forgotPassword}>
                    <Text style={styles.createAccount}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ margin: '5%' }}>
                  <Buttons
                    btnMedium={true}
                    label={'Submit'}
                    alignSelf={Theme.align}
                    // onPress={() => navigation.navigate("Dashboard")}
                    onPress={props.handleSubmit}
                    BGcolor={Theme.white}
                    txtColor={Theme.primary}
                  />
                </View>
                <Text style={styles.txtOR}>or</Text>
                <View style={{ margin: '5%' }}>
                  <Buttons
                    btnGoogle={true}
                    label={'SignIn with Google'}
                    alignSelf={Theme.align}
                    onPress={() => onGoogleButtonPress()}
                  />
                </View>
                <View style={{ margin: '5%' }}>
                  <Buttons
                    btnFacebook={true}
                    label={'SignIn with Facebook'}
                    alignSelf={Theme.align}
                    onPress={() => onFacebookButtonPress()}
                  />
                </View>
              </View>
            )}
          </Formik>
          <Modal
            loader={loader}
            loaderIndicator={true}
            label={'Signing In please wait...'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
