import React, { useState } from 'react';
import { View, Dimensions, Switch, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import CommonButton from '../../../components/Button';
import allImages, { icons } from '../../../assets/images';
import TextWrapper from '../../../components/TextWrapper';
import theme from '../../../utils/theme';
import fonts, { Fonts } from '../../../assets/fonts';
import GoogleBox from '../../../components/GoogleBox';

const LoginScreen = props => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <ScrollWrapper avoidKeyboard={true}
                contentContainerStyle={styles.content}>
                <View style={{ alignItems: 'center' }}>

                    <Image source={icons.logo}
                        style={styles.logo}
                        resizeMode='contain' />
                </View>

                <TextWrapper style={{ fontFamily: Fonts.QanelasBold, marginLeft: 8 * vw }}>Login to your account</TextWrapper>
                <View style={{ alignItems: 'center', marginTop: 2 * vh }}>
                    <GeneralTextInput
                        placeHolder="Enter email address"
                        lefticon={icons.email}

                    />
                    <GeneralTextInput
                        secureTextEntry
                        inputViewStyle={{ width: 70 * vw }}
                        lefticon={icons.lock}

                        placeHolder="Enter your password"

                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop:2*vh,
                justifyContent: 'space-between' ,paddingHorizontal:4*vw,alignItems:'center'}}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Switch
                            trackColor={{ false: '#1A1824', true: theme.primary }}
                            thumbColor={'white'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <TextWrapper style={{ color: "#999999", fontSize: 2 * vh, }}>Remember Me</TextWrapper>
                    </View>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("ForgotPasswordScreen")}
                        style={{ marginTop: 1 * vh, alignItems: 'flex-end', justifyContent: 'flex-end',}}>

                        <TextWrapper style={{ color: "#056ED8", fontSize: 1.7 * vh, textDecorationLine: 'underline' }}>Forgot Password</TextWrapper>
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <CommonButton text="Sign In"
                        onPress={() => props.navigation.navigate("DrawerNavigator")}
                        buttonStyle={{ marginTop: 4 * vh }} />

                    <View style={{ flexDirection: 'row', marginTop: 4 * vh }}>
                        <TextWrapper style={{ fontSize: 2 * vh, fontFamily: Fonts.SFPRODISPLAYREGULAR }}>Don't Have An Account ?</TextWrapper>
                        <TextWrapper style={{ color: theme.primary, fontSize: 2 * vh, fontFamily: Fonts.SFPRODISPLAYREGULAR }}> Sign Up! </TextWrapper>


                    </View>
                    <TextWrapper style={{ fontSize: 1.7 * vh, marginTop: 4 * vh, fontFamily: Fonts.SFPRODISPLAYREGULAR }}>Or</TextWrapper>


                </View>
                <View style={{ flexDirection: 'row', marginTop: 4 * vh, justifyContent: 'space-evenly', paddingHorizontal: 20 * vw }} >
                    <GoogleBox icon={icons.fb} />
                    <GoogleBox icon={icons.google} />
                    <GoogleBox icon={icons.apple} />

                </View>
            </ScrollWrapper>

        </View>

    );
};
export default LoginScreen;
