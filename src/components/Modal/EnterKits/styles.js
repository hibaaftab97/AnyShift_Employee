import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../units/index';

import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';

export default StyleSheet.create({
  blurViewStyle: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    backgroundColor: '#707070',
    opacity: 0.7,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 5 * vw,
    width: 5 * vw,
  },
  
  
  alertMainView: {
    backgroundColor: '#ffffff',
    width: 80 * vw,
    alignSelf: 'center',
    marginTop: 20 * vh,
    borderRadius:2*vh,
    // padding: 3 * vw,
    height: 45 * vh,
    // backgroundColor: 'red',
  },
  text:{
    color:theme.lightgrey,
    fontSize:2*vh
  },
  crossIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    right: 2 * vw,
    top:2*vh,
    zIndex:99999
  },
});
