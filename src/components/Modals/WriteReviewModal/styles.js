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
  headerBarLine: {
    width: vw * 30,
    height: vh * 1,
    marginTop: vh * 3,
    borderRadius: vh * 1,
    backgroundColor: colors.grayBackground4,
  },
  contentContainer: {
    width: vw * 90,
    marginTop: vh * 2,
    marginBottom: vh * 4,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: vw * 6,
    color: colors.white,
    marginVertical: vh * 2,
  },
  titleText: {
    fontSize: vw * 6,
    marginTop: vh * 2,
    color: colors.grayText2,
  },
  rowContainer: {
    width: vw * 80,
    marginVertical: vh * 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainerIcon: {
    width: vw * 6,
    height: vw * 6,
    resizeMode: 'contain',
  },
  rowContainerText: {
    fontSize: vw * 5,
    marginLeft: vw * 4,
    color: colors.white,
  },
  separatorView: {
    opacity: 0.4,
    width: vw * 85,
    borderTopWidth: vw * 0.4,
    borderBottomWidth: vw * 0.4,
    borderBottomColor: colors.black,
    borderTopColor: colors.grayBorderColor,
    marginVertical: vh * 1.5,
  },
  textInput: {
    height: vh * 12,
    width: vw * 80,
    marginVertical: vh * 1,
  },
  checkboxContainer: {
    width: vw * 80,
    marginTop: vh * 1,
  },
  footerBtnContainer: {
    width: vw * 85,
    flexDirection: 'row',
    marginVertical: vh * 3,
    justifyContent: 'center',
  },
  submitBtn: {
    width: vw * 40,
  },
  cancelBtn: {
    width: vw * 40,
    borderRadius: vw * 2,
    backgroundColor: colors.grayBackgroundColor,
  },
});
