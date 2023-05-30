import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

export default styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
  container: {
    width: vw * 100,
    alignItems: 'center',
    borderTopLeftRadius: vw * 10,
    borderTopRightRadius: vw * 10,
    backgroundColor: colors.ebonyClay,
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
    fontSize: vw * 4.5,
    textAlign: 'center',
    marginVertical: vh * 2,
    color: colors.grayText2,
  },
  headerContainer: {
    width: vw * 90,
    paddingTop: vw * 5,
    paddingRight: vw * 6,
    alignItems: 'flex-end',
  },
  crossBtn: {
    width: vw * 4.5,
    height: vw * 4.5,
  },
  modalIcon: {
    width: vw * 25,
    height: vw * 25,
  },
  iconStyle: {
    width: vw * 3,
    height: vw * 3,
  },
  confirmBtnContainer: {
    width: vw * 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: vh * 4,
  },
  confirmBtn: {
    width: vw * 35,
  },
  noBtn: {
    borderRadius: vw * 2,
    backgroundColor: colors.grayBackgroundColor,
  },
});
