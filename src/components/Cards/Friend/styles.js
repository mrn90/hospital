import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 90,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: vh * 2,
  },
  profileImage: {
    width: vw * 17.5,
    height: vw * 17.5,
    resizeMode: 'cover',
    borderRadius: vw * 10,
  },
  contentContainer: {
    width: vw * 58,
    marginLeft: vw * 4,
  },
  nameText: {
    fontSize: vw * 4.5,
    color: colors.white,
  },
  dateText: {
    marginTop: vh * 1,
    fontSize: vw * 3.5,
    color: colors.grayText6,
  },
  threeDots: {
    width: vw * 10,
    height: vh * 0.7,
    resizeMode: 'contain',
  },
});

export default styles;
