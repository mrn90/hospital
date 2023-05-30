import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: vw * 4.5,
    height: vw * 4.5,
    borderRadius: vw * 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.inputBackgroundColor,
  },
  iconStyle: {
    width: vw * 3.5,
    height: vw * 3.5,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  titleStyle: {
    fontSize: vw * 4,
    marginLeft: vw * 2,
    color: colors.palceholderColor,
  },
});

export default styles;
