import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';


import { vh, vw } from '../../units';


const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: 60 * vw,
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.5,
          borderRadius: 1.5 * vh,
          shadowRadius: 4 * vw,
          elevation: 10,
        },
        sceneContainerStyle: { backgroundColor: 'black' },
      }}>
    
  


    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
