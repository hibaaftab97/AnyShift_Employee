import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Animated, TouchableOpacity, LayoutAnimation, ImageBackground } from 'react-native';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonButton from '../../../components/Button';
import { icons } from '../../../assets/images';
import { Fonts } from '../../../assets/fonts';
import theme from '../../../utils/theme';


const ForgotPasswordScreen = props => {
  const [step, setStep] = useState(1);


  const renderConditionalFields = () => {
    if (step == 1) {
      return (
        <View style={{}}>




          <TextWrapper style={{ fontFamily: Fonts.QanelasBold, marginLeft: 8 * vw, fontSize: 2.5 * vh }}>Forgot Password</TextWrapper>
          <TextWrapper style={{ color: "#666666", marginLeft: 8 * vw, marginTop: 1 * vh }}>Enter your email to recover your password.</TextWrapper>

          <View style={{ alignItems: 'center', marginTop: 2 * vh }}>
            <GeneralTextInput
              placeHolder="Enter email address"
              lefticon={icons.email}

            />

          </View>


          <View style={{ alignItems: 'center' }}>
            <CommonButton text="Continue"
              onPress={() => setStep(step + 1)}
              buttonStyle={{ marginTop: 4 * vh }} />


            <TextWrapper style={{ marginTop: 4 * vh, fontFamily: Fonts.SFPRODISPLAYREGULAR }}>Back To Login</TextWrapper>


          </View>


        </View>
      );
    }
    if (step == 2) {
      return (
        <View style={{}}>

          <TextWrapper style={{ fontFamily: Fonts.QanelasBold, marginLeft: 8 * vw, fontSize: 2.5 * vh }}>Forgot Password</TextWrapper>
          <TextWrapper style={{ color: "#666666", marginLeft: 8 * vw, marginTop: 1 * vh }}>Enter verification code sent to your email address.</TextWrapper>


          <View style={{ alignItems: 'center', marginTop: 2 * vh }}>
            <GeneralTextInput
              placeHolder="Enter Verification Code"
              lefticon={icons.suggest}

            />

          </View>

          <TouchableOpacity

            style={{ marginTop: 1 * vh, alignItems: 'flex-end', justifyContent: 'flex-end', paddingRight: 8 * vw }}>

            <TextWrapper style={{ color: "#004BE5", fontSize: 1.7 * vh,textDecorationLine:'underline' }}>Resend Code?</TextWrapper>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <CommonButton text="Continue"
              onPress={() => setStep(step + 1)}
              buttonStyle={{ marginTop: 4 * vh }} />


            <TextWrapper style={{ marginTop: 4 * vh, fontFamily: Fonts.SFPRODISPLAYREGULAR }}>Back To Login</TextWrapper>


          </View>


        </View>
      );
    }
    if (step == 3) {
      return (
        <View >
          <TextWrapper style={{ fontFamily: Fonts.QanelasBold, marginLeft: 8 * vw, fontSize: 2.5 * vh }}>Forgot Password</TextWrapper>
          <TextWrapper style={{ color: "#666666", marginLeft: 8 * vw, marginTop: 1 * vh }}>Set new password for your account.</TextWrapper>
          <View style={{ alignItems: 'center' }}>

            <GeneralTextInput
              viewCon={{ marginTop: 2 * vh }}
              placeHolder="Enter your password"
              secureTextEntry
              lefticon={icons.lock}

            />
            <GeneralTextInput
              secureTextEntry
              placeHolder="Confirm Password"
              lefticon={icons.lock}

            />
            <CommonButton text="Update"
              onPress={() => handleOnPress()}
              buttonStyle={{ marginTop: 4 * vh }} />
            <TouchableOpacity style={{ marginTop: 2 * vh }}
              onPress={() => props.navigation.navigate("LoginScreen")}>
              <TextWrapper style={{ marginTop: 2 * vh, fontFamily: Fonts.SFPRODISPLAYREGULAR }}>Back To Login</TextWrapper>

            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const handleOnPress = () => {
    if (step == 1) {
      setStep(step + 1)
      // Animated.timing(animation, {
      //   toValue: 40,
      // }).start();
    }
    if (step == 2) {
      // Animated.timing(animation, {
      //   toValue: 60,
      // }).start();
      setStep(step + 1)

    }
    if (step == 3) {
      props.navigation.navigate("LoginScreen");
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollWrapper avoidKeyboard={true}>
        <View style={{ alignItems: 'center' }}>

          <Image source={icons.logo}
            style={styles.logo}
            resizeMode='contain' />
        </View>
        {renderConditionalFields()}

      </ScrollWrapper>
    </View>
  );
};
export default ForgotPasswordScreen;
