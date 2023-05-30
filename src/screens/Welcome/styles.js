import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  background: {
    marginTop: 10 * vh,
    height: 30 * vh,
    // padding: 35 * vh,
    width: 35 * vh,
    alignSelf: 'center'
  },
  swiper: {
    alignSelf: 'center',
    // backgroundColor: 'red',
    elevation: 2 * vh,
    position: 'relative',
    zIndex: 5 * vh
    // top: -50
    // padding: 10 * vh
  },
  dot: {
    height: 1.5 * vh,
    width: 1.5 * vh,
    borderRadius: 2 * vh,
    // top: 7 * vh,
    bottom: 7 * vh
    
  },
  activeDot: {
    height: 1.5 * vh,
    width: 1.5 * vh,
    borderRadius: 2 * vh,
    bottom: 7 * vh,
    // position: 'absolute'
  },
  image: {
    alignSelf: 'center',
    height: 32 * vh,
    width: 30 * vh,
    // bottom: 2 * vh
    // top: 2 * vh
  },
  groupDoctor:{
    alignSelf: 'center',
    height: 35 * vh,
    // paddingVertical: 10 * vh,
    width: 35 * vh,
    top: 2 * vh
  },
  instruments:{
    alignSelf: 'center',
    height: 35 * vh,
    width: 30 * vh,
    top: 2 * vh
  },
  text:{
    alignSelf: 'center',
    fontSize: 2 * vh,
    fontWeight: 'bold',
    color: colors.black
    // backgroundColor: 'gray'
  },
  subText:{
    alignSelf: 'center',
    fontSize: 1.5 * vh,
    fontWeight: '300',
    marginTop: 1 * vh,
    color: colors.black
  },
  btn:{
    marginBottom: 5 * vh
  }

});

export default styles;
