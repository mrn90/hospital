import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    width: vw * 90,
    flexDirection: 'row',
    paddingVertical: vh * 2,
    borderBottomWidth: vw * 0.3,
    borderTopWidth: vw * 0.3,
    borderBottomColor: colors.grayBorderColor,
    borderTopColor: colors.blackBorderColor,
  },
  iconStyle: {
    width: vw * 4.5,
    height: vw * 4.5,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: vw * 4.5,
    color: colors.white,
    marginLeft: vw * 4,
  },
});

export default styles;
