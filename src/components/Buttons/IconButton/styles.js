import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

export default styles = StyleSheet.create({
  container: {
    width: vh * 4.58,
    height: vh * 4.58,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // borderRadius: (vh * 5) / 2,
    // backgroundColor: colors.purple,
    // shadowColor: colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    elevation: 5,
  },

  iconStyle: {
    width: vw * 5,
    height: vw * 5,
  },
});
