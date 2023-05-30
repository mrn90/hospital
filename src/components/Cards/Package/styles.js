import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  contentContainer: {
    width: vw * 100,
    alignItems: 'center',
  },
  packageImage: {
    width: vw * 36,
    height: vw * 36,
    resizeMode: 'contain',
    marginTop: vh * 3,
    marginBottom: vh * 2,
  },
  packageName: {
    fontSize: vw * 6,
    color: colors.white,
    textTransform: 'uppercase',
  },
  featuresText: {
    fontSize: vw * 5,
    color: colors.white,
    marginVertical: vh * 0.5,
    textTransform: 'uppercase',
  },
  featureItemContainer: {
    height: vh * 5.5,
    width: vw * 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: vw * 0.5,
    borderBottomColor: colors.barLineColor,
  },
  featureItemIcon: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  featureItemName: {
    fontSize: vw * 4,
    color: colors.white,
    marginLeft: vw * 4,
  },
});

export default styles;
