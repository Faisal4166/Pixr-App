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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('tayyab@projectz.io');
  const [loader, Setloader] = useState(false);
  const { loginData } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  //Set Eye Icon


  // console.log("LOGIN DATA  ", loginData.user_id);

  //Login Api
  const ForgotPass = (EMAIL) => {
    console.log("Forgot Password ");
    navigation.replace('LoginScreen');
    // Setloader(true);
    // forgotPass(EMAIL)
    //   .then((res) => {
    //     console.log("response ", res.data);
    //     navigation.replace('LoginScreen');
    //     Setloader(false);
    //   })
    //   .catch(error => {
    //     Setloader(false);
    //     alert('ERROR : ', error);
    //   });
  };


  return (
    <View style={styles.MainView}>
      <Headers
        labelIcon={true}
        label={'Pixr'}
        labelOne={'Forgot Password'}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView>
        <View style={{ ...styles.setView, margin: '5%' }}>
          <Formik
            initialValues={{ EMAIL: email }}
            validationSchema={reviewSchema} //check validation
            onSubmit={(values, actions) => {
              // action is use  for call reset form
              actions.resetForm();
              ForgotPass(values.EMAIL);
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

                <View style={{ margin: '5%' }}>
                  <Buttons
                    btnMedium={true}
                    label={'Submit'}
                    alignSelf={Theme.align}
                    // onPress={() => navigation.navigate("Dashboard")}
                    // onPress={props.handleSubmit}
                    onPress={() => navigation.replace('LoginScreen')}
                    BGcolor={Theme.white}
                    txtColor={Theme.primary}
                  />
                </View>

              </View>
            )}
          </Formik>
          <Modal
            loader={loader}
            loaderIndicator={true}
            label={'Forgot Password please wait...'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPassword;
