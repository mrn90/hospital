import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

export default styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
  container: {
    width: vw * 92,
    alignItems: 'center',
    marginBottom: vh * 6,
    borderRadius: vw * 5,
    // paddingVertical: vh * 2,
    backgroundColor: colors.ebonyClayBackground,
  },
  contentContainer: {
    width: vw * 90,
    alignItems: 'center',
  },
  titleText: {
    fontSize: vw * 6,
    marginTop: vh * 2,
    color: colors.grayText2,
  },
  messageText: {
    width: vw * 85,
    fontSize: vw * 4.5,
    textAlign: 'center',
    marginVertical: vh * 1,
    color: colors.grayText2,
    marginVertical: vh * 3,
  },
  headerContainer: {
    width: vw * 90,
    paddingTop: vw * 5,
    paddingRight: vw * 6,
    alignItems: 'flex-end',
  },

  modalIcon: {
    width: vw * 12,
    height: vw * 12,
  },
  iconStyle: {
    width: vw * 3,
    height: vw * 3,
  },
});
