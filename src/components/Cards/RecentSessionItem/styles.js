import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 85,
    flexDirection: 'row',
    marginVertical: vh * 2,
    alignItems: 'center',
  },
  sessionImage: {
    width: vw * 80,
    height: vw * 45,
    padding: vw * 4,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: vw * 3,
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
    marginVertical: vh * 1,
  },

  sessionNameText: {
    fontSize: vw * 4.5,
    lineHeight: vw * 6,
    color: colors.white,
    textTransform: 'uppercase',
  },
});

export default styles;
