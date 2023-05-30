import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw * 5,
  },
  contentContainer: {
    // padding: vw * 6,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 35*vh
  },
  tick: {
    height: 4 * vh,
    width: 4 * vw,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    height: vh * 5.25,
    width: vh * 5.25,
    marginBottom: vh * 2,
  },
  title: {
    color: colors.black,
    fontSize: vh * 2,
    // marginBottom: vh * 1.5,
    width: vw * 60,
    textAlign: 'center',
  },
  check: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  close: {
    height: 30,
    width: 30,
    // backgroundColor: 'green',
    alignSelf: 'center'
  },
  image: {
    height: vh * 10,
    width: vh * 10,
    position: 'absolute',
    top: (-vh * 10) / 2,
  },
  subText: {
    color: colors.gray11,
    fontSize: vh * 1.7,
    textAlign: 'center',
    width: vw * 60,
    margin: 2 * vh,
  },
  button: {
    height: vh * 6,
    width: vw * 27,
    paddingVertical: 1 * vh,
    marginTop: vh * 1.8,
    backgroundColor: colors.black
    // color: themeColors.black
  },
  iconStyle: {
    tintColor: colors.gray12,
  },
  IconButton: {
    alignSelf: 'flex-end',
    padding: vw * 1,
  },
});
export default styles;
