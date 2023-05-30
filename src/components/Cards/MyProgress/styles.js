import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 43,
    alignItems: 'center',
    borderRadius: vw * 2,
    marginVertical: vw * 2,
    marginRight: vw * 3.5,
    paddingVertical: vh * 3,
    backgroundColor: colors.grayBackgroundColor2,
  },
  titleText: {
    width: vw * 30,
    fontSize: vw * 5,
    lineHeight: vw * 6,
    textAlign: 'center',
    color: colors.white,
    textTransform: 'uppercase',
  },
  dateText: {
    fontSize: vw * 4.5,
    color: colors.pink,
  },
  progressContainer: {
    marginTop: vh * 2,
  },
  progressContent: {
    width: vw * 29,
    height: vw * 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (vw * 29) / 2,
    backgroundColor: colors.progressBackground,
  },
  targetValue: {
    fontSize: vw * 6,
    color: colors.white,
  },
  targetName: {
    fontSize: vw * 3.5,
    color: colors.white,
  },
});

export default styles;
