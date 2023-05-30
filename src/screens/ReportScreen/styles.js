import { StyleSheet } from 'react-native';
import { fonts } from '../../assets';
import { colors } from '../../utils/theme';
import { vh, vw } from '../../utils/units';
import { Dimensions } from 'react-native';
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
        margin: 3 * vh,
        // alignSelf: 'center',
        textAlign: 'left',
        fontFamily: fonts.CenturyGothic.CenturyGothic,
        // color: colors.red,
        fontSize: 2.5 * vh,
        // fontWeight: 'bold',
        marginTop: 2 * vh
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 25,
        marginBottom: 10 * vh
        // width: 60 * vh,
        // backgroundColor: 'red'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
        // backgroundColor: 'green'
    }
});

export default styles;
