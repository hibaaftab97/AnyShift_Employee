import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import theme from '../../../utils/theme';
import { vw } from '../../../units';
import TextWrapper from '../../TextWrapper';
import { authicons, icons } from '../../../assets/images';

const GeneralTextInput = props => {
  const [focus, setFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handlePassword = () => {
    setIsShow(!isShow);
  };
  return (
    <View style={[{ marginLeft: 1 * vw, }, props.viewCon]}>
      {props.label ? <TextWrapper style={[styles.label, props.lableStyle]}>{props.label}</TextWrapper> : null}


      <View
        style={[styles.customStyle, props.conStyle]}>
        <View style={{ flexDirection: 'row' ,alignItems:'center',paddingHorizontal:4*vw}}>
          {props.lefticon?<Image source={props.lefticon}
          resizeMode='contain'
          style={{width:4*vw,height:4*vw}}
          />:null}
          <TextInput
            value={props.value}
            maxLength={props?.maxLength}

            onChangeText={props.onChangeText}
            style={[styles.textInputStyle, props.inputViewStyle]}
            placeholder={props.placeHolder}
            placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : theme.placeholder}
            secureTextEntry={props.type ? true : false}
            onFocus={() => setFocus(true)}
            // keyboardType='email-address'
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry && !isShow}
            {...props}
          />
          {props?.secureTextEntry && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={()=>handlePassword()}>
              <Image
                source={isShow ? authicons.eyeopen : authicons.eyeclose}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>

      </View>
    </View>
  );
};

export default GeneralTextInput;
