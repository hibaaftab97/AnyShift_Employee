import {StyleSheet} from 'react-native';
import { Fonts } from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  textInputView: {
    width: 80 * vw,
    height: 7 * vh,
    borderColor:theme.whiteBackground,
    borderWidth: 0.5 * vw,
    // flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },
  label:{

    color: '#1E2022',
    fontSize:1.7*vh,
    marginTop:2*vh,
    fontFamily:Fonts.Gilroy_Medium,
    width: 66 * vw,
  },
  rightIconContainer: {
    height: vh * 5,
    width: vw * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: vw * 5,
    width: vw * 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: vw * 4,
    width: vw * 4,
    tintColor:theme.primary
  },
  customStyle: {
    width: 90 * vw,
    height: 7 * vh,
  
    borderColor: theme.textOutline,
    borderWidth: 0.5 * vw,
    backgroundColor:'#F9F9F9',
    // flexDirection: 'row',
    // alignItems:'center',
    justifyContent:'center',
    borderRadius: 8 * vw,
    marginTop: 1 * vh,
  },

  textInputStyle: {
    // marginLeft: 2 * vw,
    color: theme.black,
    paddingHorizontal:4*vw,
    fontFamily:Fonts.QanelasRegular,
    width: 72 * vw,
  },

  emailStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  emailIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4 * vw,
  },
});
