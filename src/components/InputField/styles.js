import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

export default styles = StyleSheet.create({
  container: {
    width: vw * 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: vw * 2,
    marginVertical: vh * 1,
    // backgroundColor: 'red'
  },
  inputContainer:{
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-around'
  },
  fieldContainer: {},
  titleText: {
    marginTop: vh * 1,
    fontSize: vw * 4,
    color: colors.white,
    marginLeft: vw * 3,
  },
  requiredText: {
    color: colors.grayText4,

  },
  inputField: {
    borderBottomWidth: vw * 0.5,
    // borderColor: colors.black,
  },
  leftIconContainer: {
    height: vh * 6,
    width: vh * 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    height: vh * 2.4,
    width: vh * 2.4,
    // backgroundColor: 'red'
  },
  rightIcon: {
    height: vh * 2.4,
    width: vh * 2.4,
  },
  rightIconContainer: {
    height: vh * 5,
    width: vw * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    height: vh * 6,
    width: vw * 6,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    height: vw * 5,
    width: vw * 5,
    // tintColor: colors.gray,
  },

  textInput: {
    color: colors.black,
  },
});
