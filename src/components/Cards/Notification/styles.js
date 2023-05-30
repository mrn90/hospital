import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    width: vw * 90,
    height: vh * 14,
    borderRadius: vw * 3,
    alignItems: 'center',
    marginVertical: vh * 1,
    justifyContent: 'center',
    backgroundColor: colors.inputBackgroundColor,
  },
  messageText: {
    width: vw * 75,
    color: colors.grayText2,
  },
  dateText: {
    width: vw * 75,
    marginTop: vh * 2,
    color: colors.grayText3,
  },
});

export default styles;
