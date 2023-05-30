import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 45,
    height: vh * 30,
    margin: vw * 2,

    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: vw * 4,
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
  nameText: {
    width: vw * 40,
    fontSize: vw * 4.5,
    color: colors.white,
    marginBottom: vh * 2,
  },
  footerContainer: {
    width: vw * 38,
    flexDirection: 'row',
    marginBottom: vh * 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starContainerStyle: {
    width: vw * 20,
    justifyContent: 'space-evenly',
  },
  priceText: {
    color: colors.white,
  },
});

export default styles;
