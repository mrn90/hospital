import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageStyle: {
    width: vw * 30,
    height: vw * 30,
    margin: vw * 2,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: vw * 4,
    backgroundColor: 'red',
  },
  nameText: {
    fontSize: vw * 5,
    color: colors.white,
    marginBottom: vh * 2,
  },
});

export default styles;
