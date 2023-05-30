import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vw} from '../../../utils/units';

const styles = StyleSheet.create({
  statusContainer: {
    padding: vw * 2,
    borderRadius: vw * 1,
    borderWidth: vw * 0.5,
    borderStyle: 'dashed',
    borderColor: colors.green,
    marginHorizontal: vw * 1,
  },
  statusText: {
    fontSize: vw * 4,
    color: colors.green,
  },
});

export default styles;
