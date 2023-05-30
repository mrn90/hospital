import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    swiper: {
        alignItems: 'center',
        // backgroundColor: 'red',
        height: 35 * vh,
        paddingTop: 4 * vh,

    },
    dot: {
        height: 1.5 * vh,
        width: 1.5 * vh,
        borderRadius: 2 * vh,
        // position: 'relative',
        // backgroundColor: 'red',
        top: -1.5 * vh,
        // bottom: -2 * vh

    },
    activeDot: {
        height: 1.5 * vh,
        width: 1.5 * vh,
        borderRadius: 2 * vh,
        top: -1.5 * vh,
        // position: 'relative'
    },

    bannerContainer: {
        // height: 22 * vh,
        backgroundColor: colors.white,
        shadowOpacity: 0.5 * vh,
        borderRadius: 2 * vh,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowOffset: { width: 1, height: 1 },
        // marginBottom: 4 * vh
    },
    banner: {
        height: 22 * vh,
        width: 44 * vh,
        alignSelf: 'center',
        resizeMode: 'contain',
        // elevation: 2 * vh,
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.1 * vh,
        // borderRadius: 2 * vh
        // padding: 4 * vh
        // resizeMode: 'contain'
    },

});

export default styles;
