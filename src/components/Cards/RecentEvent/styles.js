import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 95,
    marginVertical: vh * 2,
    alignItems: 'center',
    borderRadius: vw * 5,
    paddingTop: vh * 2,
    backgroundColor: colors.grayBackgroundColor3,
  },
  sessionImage: {
    width: vw * 90,
    height: vw * 50,
    resizeMode: 'contain',
  },
  imageStyle: {
    borderRadius: Platform.OS === 'android' ? vw * 1.5 : vw * 4,
  },
  bkImageHeader: {
    padding: vw * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  whishlistContainer: {
    width: vw * 8,
    height: vw * 8,
    borderRadius: (vw * 8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  whishlistIcon: {
    width: vw * 4,
    height: vw * 4,
    tintColor: colors.black,
    resizeMode: 'contain',
  },
  contentContainer: {
    marginLeft: vw * 4,
  },
  statusText: {
    fontSize: vw * 4,
    color: colors.white,
    textTransform: 'uppercase',
  },
  statusContainer: {
    width: vw * 32,
    height: vh * 4,
    borderRadius: vw * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
  },

  rowContainer: {
    width: vw * 90,
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 1,
  },
  calenderIcons: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  timeText: {
    fontSize: vw * 4.5,
    color: colors.white,
    marginLeft: vw * 2,
    marginRight: vw * 6,
  },
  nameText: {
    fontSize: vw * 5,
    color: colors.white,
    textTransform: 'uppercase',
    marginVertical: vh * 0.5,
  },

  sessionNameText: {
    fontSize: vw * 4.5,
    lineHeight: vw * 6,
    color: colors.white,
    textTransform: 'uppercase',
  },
  btnRowContainer: {
    flexDirection: 'row',
  },
  viewDetailBtn: {
    height: vh * 8,
    borderRadius: 0,
    width: vw * 47.5,
    borderBottomLeftRadius: vw * 5,
  },
  cancelBtn: {
    height: vh * 8,
    borderRadius: 0,
    width: vw * 47.5,
    borderBottomRightRadius: vw * 5,
    backgroundColor: colors.inputBackgroundColor,
  },
  btnTextStyle: {
    textTransform: 'uppercase',
  },
});

export default styles;
