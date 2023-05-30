import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: '40%'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '35%',
    bottom: '50%',
    // left: '50%',
    // right: '50%'
    // backgroundColor: 'gray'
  },
  gestureContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // top: '35%',
    // bottom: '50%',
    height: '150%',
    // backgroundColor: 'gray',
    // height: 30 * vh,
    width: '100%'
  },
  text: {
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 1 * vh,
    // backgroundColor: 'red',  
    color: colors.red,
    fontSize: 3 * vh
    // margin: 10 * vh
  },
  arrowContainer: {
    height: 5 * vh,
    width: 5 * vh,
    borderRadius: 7 * vh,
    backgroundColor: colors.darkBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrow: {
    color: colors.white,
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#EAECF0',
    width: '100%',
    borderRadius: 4 * vh,
    // margin: 4 * vh
    // height: 15 * vh
  },

  hexagon: {
    // marginBottom: 5 * vh,
    height: 20 * vh,
    width: 20 * vh,
    alignSelf: 'center',
    // bottom: 10 * vh,
    top: -10 * vh,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'red'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'gray',
    left: 3.5 * vh
  },
  subContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'gray',
    right: 1.5 * vh,
  },

  logo: {
    height: 8 * vh,
    width: 8 * vh,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 5.5 * vh
  },
  laboratory: {
    height: 5 * vh,
    width: 5 * vh,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  iconText: {
    fontWeight: '300'
  },
  modal: {
    width: '100%',
    borderRadius: 3 * vh,
    margin: 5
  },
  hexagon2: {
    // marginBottom: 5 * vh,
    height: 30 * vh,
    width: 30 * vh,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // bottom: 10 * vh,
    resizeMode: 'contain',
    // top: -10 * vh,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },
  icon: {
    height: 4.5 * vh,
    width: 4.5 * vh,
    resizeMode: 'contain',
    alignSelf: 'center',
    // marginTop: 5.5 * vh
  },
  consultancy: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 1.7 * vh
  }
});

export default styles;
