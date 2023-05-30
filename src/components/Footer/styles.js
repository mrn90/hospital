import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.white
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
        alignItems: 'center',
        justifyContent: 'center',
        // top: '35%',
        // bottom: '50%',
        // backgroundColor: 'red',
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
        width: 2.5 * vh
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
        height: 15 * vh,
        width: 15 * vh,
        alignSelf: 'center',
        // bottom: 10 * vh,
        top: -7 * vh,
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
        height: 6.5 * vh,
        width: 6.5 * vh,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 4 * vh,
        alignItems: 'center',
        justifyContent: 'center'
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
        shadowOpacity: 0.1 * vh,
        shadowOffset: { width: -2, height: 2 },
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
