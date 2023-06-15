import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { icons, Icons } from '../../../assets/images';
import { vw, vh } from '../../../units';
import TextWrapper from '../../TextWrapper';

import styles from './styles';

const drawerRoutes = {
  HomeScreen: {
    label: 'Home',
    icon: icons.home,
  },
  ContactUsStack: {
    label: 'Contact Us',
    icon: icons.contact,
  },
  SettingStack: {
    label: 'Setting',
    icon: icons.settings,
  },
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {

  const routeConfigs = drawerRoutes[props.routeName];

  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container]}>
      <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={styles.icon} source={routeConfigs.icon} />
          <TextWrapper style={styles.label}>{routeConfigs.label}</TextWrapper>
        </View>

      </View>



    </TouchableOpacity>
  );
};

export default DrawerButton;
