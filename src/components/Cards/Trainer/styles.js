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
  nameText: {
    fontSize: vw * 5,
    color: colors.white,
    marginBottom: vh * 2,
  },
});

export default styles;
