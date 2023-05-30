import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';

const styles = StyleSheet.create({
  serviceContainer: {
    height: 12 * vh,
    paddingVertical: 2 * vh,
    width: 25 * vw,
    borderRadius: 2 * vh,
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 2 * vh,
    backgroundColor: colors.white,
    shadowOpacity: 0.5 * vh,
    shadowOffset: { width: 1, height: 2 },
    marginHorizontal: 1 * vh,
    // zIndex: 2 * vh
    // padding: 2 * vh
    // shadowColor: 'red'
  },
  icon: {
    height: 5 * vh,
    width: 5 * vh,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  text: {
    fontSize: 1.6 * vh,
    color: colors.darkBackground,
    marginTop: 1.5 * vh,
    alignSelf: 'center'
  }
});

export default styles;
