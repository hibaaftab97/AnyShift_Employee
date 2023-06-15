import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';


const CommonButton = props => {
    return (
        <TouchableOpacity  style={[styles.buttonContainer,props.buttonStyle]}
         onPress={props.onPress}>
       

            <TextWrapper style={styles.buttontext}>{props.text}</TextWrapper>

        </TouchableOpacity>
    );
};

export default CommonButton;
