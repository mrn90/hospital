import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    height: vh * 12,
    width: vw * 100,
    borderBottomWidth: vw * 0.5,
    borderBottomColor: colors.barLineColor,
  },
});

export default styles;
