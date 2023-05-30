import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  container: {
    height: vh * 36,
  },
  paginationContainer: {
    width: vw * 100,
    paddingTop: 0,
    paddingBottom: 0,
    position: 'absolute',
    bottom: -vh * 2,
  },
  slide: {
    alignItems: 'center',
  },
  productImage: {
    width: vw * 55,
    height: vh * 25,
    resizeMode: 'contain',
  },
  dotImage: {
    width: vw * 18,
    height: vh * 10,
    resizeMode: 'contain',
  },
});

export default styles;
