import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 90,
    flexDirection: 'row',
    marginVertical: vh * 2,
    alignItems: 'center',
  },
  sessionImage: {
    width: vw * 40,
    height: vw * 45,
    borderRadius: Platform.OS === 'android' ? vw * 1 : vw * 2,
    resizeMode: 'contain',
  },
  whishlistContainer: {
    position: 'absolute',
    top: vw * 2,
    right: vw * 3,
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
    width: vw * 45,
    marginLeft: vw * 4,
  },
  statusContainer: {
    width: vw * 32,
    height: vh * 4.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderWidth: vw * 0.4,
    borderStyle: 'dashed',
  },
  statusText: {
    fontSize: vw * 5,
    color: colors.white,
    textDecorationLine: 'underline',
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
    marginLeft: vw * 4,
  },
  nameText: {
    fontSize: vw * 5,
    color: colors.pink,
    marginVertical: vh * 0.5,
  },

  sessionNameText: {
    fontSize: vw * 4.5,
    lineHeight: vw * 6,
    color: colors.white,
    textTransform: 'uppercase',
  },
});

export default styles;
