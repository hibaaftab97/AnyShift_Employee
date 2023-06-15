import { Platform, StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts';
import { vh } from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
  text: {
    fontSize: 2 * vh,
    fontFamily:Fonts.QanelasRegular,
    color: theme.black,
    padding: 0,
    margin: 0,
    ...Platform.select({
      android: {
        paddingBottom: 0.2 * vh,
      },
    }),
  },
});
