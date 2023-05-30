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
  rowContainer: {
    width: vw * 60,
    marginTop: vh * 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acceptButton: {
    width: vw * 28,
    height: vh * 5.5,
  },
  rejectButton: {
    width: vw * 28,
    height: vh * 5.5,
    borderRadius: vw * 2,
    backgroundColor: colors.grayBackgroundColor,
  },
});

export default styles;
