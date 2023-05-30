import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        // paddingVertical: 10 * vh,
        // height: '25%',
        // width: 24 * vh,
        // width: '80%',
        height: 20 * vh,
        // height: 10 * vh,
        borderRadius: 2 * vh,
        // backgroundColor: 'red',  
        backgroundColor: colors.white,
        marginTop: 4 * vh,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.4,
        marginHorizontal: 1 * vh,
        paddingHorizontal: 1.3 * vh,
        // margin: 2 * vh
        // marginVertical: 2 * vh
        // paddingBottom: 10 * vh
        // marginTop: 2 * vh
    },
    doctorIcon: {
        resizeMode: 'contain',
        height: 6 * vh,
        width: 6 * vh,
        alignSelf: 'center',
        bottom: 3 * vh
    },
    onlineFavContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 5.5 * vh,
        margin: 1 * vh
    },
    online: {
        backgroundColor: colors.green,
        height: 1.5 * vh,
        width: 1.5 * vh,
        borderRadius: 2 * vh
    },
    heart: {
        height: 1.5 * vh,
        width: 1.5 * vh,
        resizeMode: 'contain'
    },
    doctorName: {
        alignSelf: "center",
        bottom: 4 * vh,
        fontSize: 1.4 * vh
    },
    qualification: {
        alignSelf: 'center',
        color: colors.grayText1,
        bottom: 3 * vh,
        fontSize: 1.3 * vh
    },
    speciality: {
        alignSelf: 'center',
        bottom: 3 * vh,
        fontSize: 1.3 * vh
    },
    btnContainer: {
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 1 * vh
        // margin: 1 * vh
        // backgroundColor: 'gray',
        // width: '80%'
        // width: '40%'
        // marginHorizontal: 0.5 * vh
    },
    btnProfile: {
        width: 20 * vw,
        paddingVertical: 1 * vh,
        // bottom: 1 * vh,
        backgroundColor: colors.white,
        borderColor: colors.red,
        borderWidth: 0.2 * vh,
        right: 0.5 * vh
        // marginHorizontal: 0.2 * vh
        // marginBottom: -2 * vh
        // color: colors.red
        // fontSize: 1 * vh
    },
    btnConsult: {
        width: 20 * vw,
        paddingVertical: 1 * vh,
        // bottom: 1 * vh,
        // marginBottom: -2 * vh,
        backgroundColor: colors.red,
        borderColor: colors.red,
        borderWidth: 0.2 * vh,
        left: 0.5 * vh
        // color: colors.red
        // fontSize: 1 * vh
    }
});

export default styles;
