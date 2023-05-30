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
    padding: vw * 4,
    borderRadius: vw * 4,
    alignItems: 'center',
    marginBottom: vh * 6,
    backgroundColor: colors.inputBackgroundColor,
  },
  selectTextContainer: {
    width: vw * 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowDownIcons: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  barLine: {
    width: vw * 90,
    marginTop: vh * 1.5,
    borderBottomWidth: vw * 0.7,
    borderBottomColor: colors.barLineColor2,
  },
  selectionTextContainer: {
    width: vw * 75,
    marginVertical: vh * 1,
  },
  selectionText: {
    fontSize: vw * 5.5,
    color: colors.grayText4,
  },
});
