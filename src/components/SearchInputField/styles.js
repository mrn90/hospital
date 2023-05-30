import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vw} from '../../utils/units';

const styles = StyleSheet.create({
  inputField: {
    width: vw * 85,
    flexDirection: 'row-reverse',
    backgroundColor: colors.milky,
  },
  textInput: {
    width: vw * 66,
    color: colors.black,
  },
});

export default styles;
