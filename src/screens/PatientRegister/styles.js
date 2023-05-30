import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
    },

    logo: {
        height: 15 * vh,
        width: 15 * vh,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 5.5 * vh
    },
    login: {
        alignSelf: 'center',
        color: colors.red,
        fontSize: 2.5 * vh,
        fontWeight: 'bold',
        marginTop: 1 * vh
    },
    icon: {
        height: 2 * vh,
        width: 2 * vh,
        resizeMode: 'contain',
        right: 5 * vh,
        // alignSelf: 'center',
        // justifyContent: 'center',
        marginTop: 2 * vh,
        // elevation: 0 * vh,
        // zIndex: 2 * vh
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
        color: colors.black,
        elevation: 1 * vh,
        // zIndex: 2 * vh
        // shadowRadius: 0.4 * vh,
        // zIndex: 2 * vh

    },
    loginButton: {
        marginTop: 2 * vh,
        width: '90%',
        backgroundColor: '#E54E36',
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
        marginBottom: 5 * vh,
        color: colors.black
    }
});

export default styles;
