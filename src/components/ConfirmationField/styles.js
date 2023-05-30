import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vw} from '../../utils/units';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cellContainer: {
    marginHorizontal: vw * 6,
    borderBottomWidth: vw * 0.5,
    borderBottomColor: colors.inputBackgroundColor,
  },
  focusedCellContainer: {
    borderBottomColor: colors.purple,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: vw * 6.5,
    color: colors.white,
    textAlign: 'center',
  },
  focusCell: {
    color: colors.purple,
  },
});

export default styles;
