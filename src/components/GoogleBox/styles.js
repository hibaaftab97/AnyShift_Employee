import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
  circle:{
    alignItems:'center',justifyContent:'center',
    width:14*vw,height:14*vw,borderRadius:7*vw,borderColor:'#B9B9B9',borderWidth:0.5*vw
  }
});
