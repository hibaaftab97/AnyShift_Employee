import React, { useState } from 'react';
import styles from './styles';
import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress, DrawerContentScrollView, } from '@react-navigation/drawer';
import TextWrapper from '../../TextWrapper';
import { icons, Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { vh, vw } from '../../../units';
import DrawerButton from '../DrawerButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const routeOrders = [
  'HomeScreen',
  'ContactUsStack',
  'SettingStack'
];
const drawerRoutes = {
  HomeScreen: {
    label: 'Home',
    icon: icons.download,
  },
  ContactUsStack: {
    label: 'Contact Us',
    icon: icons.download,
  },
  SettingStack: {
    label: 'Setting',
    icon: icons.download,
  },

};


const DrawerContent = props => {


  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };



  return (
    <DrawerContentScrollView
    key={Math.random()}
      {...props}
      contentContainerStyle={{ backgroundColor: theme.primary,flex:1}}>
      

      <View style={styles.routeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}
        key={Math.random()}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
            key={item}
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
        </ScrollView>
      </View>


    </DrawerContentScrollView>
  );
};
export default DrawerContent;
