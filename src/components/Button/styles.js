import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
    buttonContainer: {
        width: vw * 90, height: vh * 8,
        backgroundColor:theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4 * vh,
        marginTop:2*vh
      }, 
      buttontext:{
          fontFamily:Fonts.QanelasMedium,
          color:theme.whiteBackground,
          padding:0
      }
});
