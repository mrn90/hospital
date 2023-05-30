import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'white'
  },
  background: {
    alignSelf: 'center',
    backgroundColor: colors.darkBackground,
    width: '100%',
    paddingVertical: 7 * vh,
    borderRadius: 3 * vh,
    marginTop: 5 * vh
  },
  hexagon: {
    marginTop: -2 * vh,
    height: 20 * vh,
    width: 20 * vh,
    alignSelf: 'center',

  },
  logo: {
    height: 8 * vh,
    width: 8 * vh,
    resizeMode: 'contain',
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 5.5 * vh
  },
  text: {
    alignSelf: 'flex-start',
    color: colors.white,
    marginLeft: 3 * vh
  },
  field: {
    // marginLeft: 4 * vh,
    alignSelf: 'center',
    borderWidth: 0.1 * vh,
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 4 * vh,
    // height: 8 * vh,
    paddingVertical: 1.2 * vh,
    width: '90%',
    paddingLeft: 2 * vh,
    // alignItems: 'flex-start',
    elevation: 2 * vh,
    zIndex: 2 * vh,
    margin: -2 * vh

  },
  locations: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.white,
    width: '100%',
    paddingVertical: 7 * vh,
    borderRadius: 3 * vh,
  },
  countrycontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 4 * vh,
    top: -4 * vh
    // bottom: 4 * vh
  },
  flag: {
    height: 2 * vh,
    width: 2 * vh
  },
  countryText: {
    left: 2 * vh
  },
  cityText: {
    left: 2 * vh,
    fontWeight: '100'
  },
  separator: {
    height: 0.1 * vh,
    width: '85%',
    backgroundColor: colors.darkBackground,
    marginLeft: 4 * vh,
    bottom: 4 * vh
  },
  separatorcity: {
    height: 0.1 * vh,
    width: '70%',
    backgroundColor: colors.darkBackground,
    marginLeft: 4 * vh,
    bottom: 4 * vh
  }
});

export default styles;
