import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/theme';
import { vw, vh } from '../../../utils/units';
const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 3.5 * vw,
    color: colors.red,
    textDecorationLine: 'underline'
  },
  textPaymentDetails: {
    fontSize: 2.2 * vh,
    color: '#F7931E',
    textDecorationLine: 'underline'
  }
});
export default styles;
