import React from 'react';
import { Text, View, Modal, Image, TouchableOpacity, FlatList } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from '../../../units/index';
import { icons } from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import GeneralTextInput from '../../TextInputs/GeneralTextInput';
import theme from '../../../utils/theme';
import { getKits } from '../../../utils';


const EnterKits = props => {
  const navigation = useNavigation();
  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{ flex: 1 }}>


      <BlurView style={styles.blurViewStyle}
        blurType="light" blurAmount={20} />
      <View style={styles.alertMainView}>
        <TouchableOpacity style={styles.crossIconView}
          onPress={props.onHide}>
          <Image source={icons.cross} style={styles.crossIconStyle} />
        </TouchableOpacity>
        <FlatList data={props?.kits}
        style={{marginTop:6*vh}}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={()=>props.onKitSelect(item)}
              style={{ borderBottomColor: theme.blue, borderBottomWidth: 0.2 * vh, padding: 3 * vw, }}>
                <TextWrapper style={styles.text}>{item}</TextWrapper>
              </TouchableOpacity>
            )
          }}
        />



      </View>
    </Modal>
  );
};

export default EnterKits;
