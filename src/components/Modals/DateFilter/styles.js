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
  titleText: {
    fontSize: vw * 6,
    marginVertical: vh * 2.5,
    color: colors.white,
  },
  contentContainer: {
    width: vw * 90,
    borderRadius: vw * 4,
    alignItems: 'center',
    marginBottom: vh * 6,
  },
  btnStyle: {
    width: vw * 40,
  },
  btnContainer: {
    marginTop: vh * 2,
  },
});
