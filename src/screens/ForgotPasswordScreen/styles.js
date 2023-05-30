import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBackgroundColor,
    },
    mainView: {
        flex: 1,
        // backgroundColor: colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    world_map: {
        // backgroundColor: themeColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100 * vw,
        height: 100 * vh,
        // flex: 1
    },
    innerView: {
        // flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        // marginTop: 6 * vh,
        width: '100%',
    },

    logo: {
        height: 15 * vh,
        width: 15 * vh,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    heading: {
        marginTop: vh * 2,
        paddingTop: vh * 4,
        // marginVertical: vh * 2,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: fonts.CenturyGothic.CenturyGothicBold,
        fontWeight: 'bold',
        color: colors.black
        // backgroundColor: 'red'
    },

    contentContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'red',
    },
    buttons: {
        // marginBottom: 2 * vh
    },
    topButton: {
        marginTop: 4 * vh,
    },
    footerContainer: {
        width: 80 * vw,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2 * vh,
    },
    footerText: {
        fontSize: 1.4 * vh,
        color: '#000000',
    },
    link: {
        color: '#29A6DB',
        paddingLeft: 5 * vw,
    },
    ring: {
        top: 60 * vh,
        left: 50 * vw,
    },
    field: {
        alignSelf: 'center',
        borderWidth: 0.1 * vh,
        backgroundColor: '#EAECF0',
        borderColor: colors.lightGray,
        borderRadius: 4 * vh,
        paddingVertical: 1.2 * vh,
        width: '90%',
        paddingLeft: 2 * vh,
        marginTop: 2 * vh,
        shadowOpacity: 0.4,
        // shadowRadius: 0.4 * vh,
        shadowOffset: { width: 1, height: 1 },
        color: colors.black
    },
    icon: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain',
        right: 5 * vh,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 2 * vh,
        elevation: 5 * vh,
        zIndex: 2 * vh
    },
    forgotPassContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 1 * vh
    },

    firstField: {
        // marginTop: 6 * vh,
    },
    forgotButton: {
        // marginTop: 3 * vh,
    },
    loginButton: {
        marginTop: 2 * vh,
    },
    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15 * vh,
    },
    dontHaveAccount: {
        fontSize: 1.7 * vh,
        marginRight: 1 * vw,
    },
    instruction: {
        fontSize: 1.6 * vh,
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        marginVertical: 3 * vh,
        color: colors.black
    },
    footerContainer: {
        marginTop: vh * 4,
        marginBottom: 12 * vh,
        backgroundColor: 'red'
    },
    footerImg: { height: vh * 6, width: vh * 6 },
});
export default styles;
