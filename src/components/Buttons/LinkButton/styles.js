import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vw} from '../../../utils/units';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: vw * 4.5,
    color: colors.purple,
    textDecorationLine: 'underline',
  },
});
