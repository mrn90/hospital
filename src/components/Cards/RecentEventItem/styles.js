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
  eventImageContainer: {
    width: vw * 25,
    height: vw * 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    borderTopLeftRadius: vw * 3,
    borderBottomLeftRadius: vw * 3,
  },
  eventImage: {
    width: vw * 15,
    height: vw * 15,
    resizeMode: 'cover',
  },
  contentContainer: {
    width: vw * 65,
    height: vw * 25,
    paddingLeft: vw * 5,
    borderTopRightRadius: vw * 3,
    borderBottomRightRadius: vw * 3,
    backgroundColor: colors.grayBackground,
    justifyContent: 'center',
  },
  statusText: {
    fontSize: vw * 5,
    color: colors.white,
    textDecorationLine: 'underline',
  },
  footerContainer: {
    width: vw * 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: vw * 3,
    color: colors.grayText8,
  },
  nameText: {
    fontSize: vw * 5,
    color: colors.pink,
    marginVertical: vh * 1,
  },
  sessionNameText: {
    fontSize: vw * 5,
    lineHeight: vw * 6,
    color: colors.white,
    textTransform: 'capitalize',
  },
  descriptionText: {
    fontSize: vw * 4,
    marginVertical: vh * 1.5,
    color: colors.grayText8,
  },
});

export default styles;
