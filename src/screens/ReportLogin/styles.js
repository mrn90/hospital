import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'white'
    },

    logo: {
        height: 15 * vh,
        width: 15 * vh,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 5.5 * vh
    },
    login: {
        margin: 2 * vh,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        // color: colors.red,
        fontSize: 1.8 * vh,
        // fontWeight: 'bold',
        marginTop: 2 * vh
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
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 1 * vh,
        // backgroundColor: 'red',
        // width: 46 * vh
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
        shadowOffset: { width: 1, height: 1 },
        // shadowRadius: 0.4 * vh,
        // zIndex: 2 * vh

    },
    loginButton: {
        marginTop: 2 * vh,
        width: '90%',
        backgroundColor: colors.darkBackground,
        borderRadius: 4 * vh,
    },
    registerBtn: {
        marginTop: 4 * vh,
        width: '90%',
        backgroundColor: colors.darkBackground,
        borderRadius: 4 * vh,
    },
    text: {
        alignSelf: 'center',
        marginTop: 2 * vh,
        marginBottom: 5 * vh
    }
});

export default styles;
