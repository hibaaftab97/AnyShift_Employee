import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import { vh, vw } from '../../units';
import { icons } from '../../assets/images';


const GoogleBox = props => {



    return (
        <View style={styles.circle}>
            <Image source={props.icon}
                resizeMode='contain'
                style={{ width: 6 * vw, height: 6 * vw }} />
        </View>
    );
};

export default GoogleBox;
