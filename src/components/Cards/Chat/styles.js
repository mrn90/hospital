import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 85,
    flexDirection: 'row',
    marginVertical: vh * 2,
    // backgroundColor: 'red',
  },
  profileImage: {
    width: vw * 17.5,
    height: vw * 17.5,
    resizeMode: 'contain',
    borderRadius: vw * 10,
  },
  contentContainer: {
    marginLeft: vw * 4,
  },
  headerContainer: {
    width: vw * 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: vw * 4.5,
    color: colors.white,
  },
  timeText: {
    fontSize: vw * 3.5,
    color: colors.grayText2,
  },
  lastMesaage: {
    fontSize: vw * 3.8,
    marginVertical: vh * 1,
    color: colors.grayText2,
  },
  dateText: {
    fontSize: vw * 3.5,
    color: colors.grayText2,
  },
});

export default styles;
