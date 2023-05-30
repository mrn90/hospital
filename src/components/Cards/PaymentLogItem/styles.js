import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    width: vw * 90,
    flexDirection: 'row',
    marginVertical: vh * 2,
    alignItems: 'center',
  },
  imageContainer: {
    width: vw * 35,
    height: vw * 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw * 5,
    borderWidth: vw * 0.4,
    borderColor: colors.grayBorderColor1,
    backgroundColor: colors.inputBackgroundColor,
  },
  musicImageStyle: {
    width: vw * 25,
    height: vw * 25,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicImage: {
    borderRadius: vw * 4,
  },
  contentContainer: {
    width: vw * 62,
    marginLeft: vw * 4,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  paymentIdText: {
    fontSize: vw * 4,
    color: colors.grayText5,
    textTransform: 'uppercase',
    marginVertical: vh * 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  currencySymbol: {
    color: colors.grayText5,
  },
  priceText: {
    fontSize: vw * 5.5,
    color: colors.grayText5,
  },
  descriptionText: {
    fontSize: vw * 3.5,
    color: colors.grayText5,
    marginVertical: vh * 0.5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 0.6,
  },
  iconStyle: {
    width: vw * 5,
    height: vw * 5,
    resizeMode: 'contain',
  },
  valueText: {
    fontSize: vw * 4,
    marginLeft: vw * 2,
    color: colors.grayText5,
  },
});

export default styles;
