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
  musicImageStyle: {
    width: vw * 25,
    height: vw * 25,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicImage: {
    borderRadius: vw * 4,
  },
  playIcon: {
    width: vw * 12,
    height: vw * 12,
    resizeMode: 'contain',
  },
  whishlistContainer: {
    width: vw * 8,
    height: vw * 8,
    marginTop: -vh * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (vw * 8) / 2,
    backgroundColor: 'transparent',
    borderWidth: vw * 0.2,
    borderColor: colors.white,
  },
  whishlistIcon: {
    width: vw * 4,
    height: vw * 4,
    tintColor: colors.white,
    resizeMode: 'contain',
  },
  contentContainer: {
    width: vw * 62,
    marginLeft: vw * 4,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  nameText: {
    width: vw * 54,
    fontSize: vw * 4.5,
    color: colors.white,
    textTransform: 'uppercase',
  },

  sessionNameText: {
    fontSize: vw * 4.5,
    lineHeight: vw * 6,
    color: colors.white,
    textTransform: 'uppercase',
  },
  musicTypeText: {
    fontSize: vw * 4,
    color: colors.pink,
    marginVertical: vh * 1,
  },
  durationText: {
    fontSize: vw * 4,
    color: colors.white,
  },
});

export default styles;
