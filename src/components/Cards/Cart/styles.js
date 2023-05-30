import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/units';
import {colors} from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: vh * 1.5,
  },
  imageContainer: {
    width: vw * 30,
    height: vw * 30,
    alignItems: 'center',
    borderRadius: vw * 5,
    justifyContent: 'center',
    backgroundColor: colors.inputBackgroundColor,
  },
  productImage: {
    width: vw * 25,
    height: vw * 25,
    resizeMode: 'contain',
  },
  contentContainer: {
    marginLeft: vw * 5,
  },
  nameText: {
    fontSize: vw * 4.5,
    color: colors.grayText5,
  },
  productPriceContainer: {
    flexDirection: 'row',
  },
  currencySymbol: {
    marginTop: vh * 1.2,
    marginRight: vw * 1,
    color: colors.grayText5,
  },
  priceText: {
    fontSize: vw * 6.5,
    marginVertical: vh * 1,
    color: colors.grayText5,
  },
  footerContainer: {
    width: vw * 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityContianer: {
    width: vw * 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: vw * 2,
    paddingVertical: vh * 0.5,
    justifyContent: 'space-around',
    backgroundColor: colors.inputBackgroundColor,
  },
  quantityText: {
    fontSize: vw * 4.5,
    color: colors.palceholderColor,
  },
  iconButton: {
    height: vw * 5,
    width: vw * 5,
  },
  minusButton: {
    backgroundColor: colors.palceholderColor,
  },
  btnIconStyle: {
    height: vw * 3,
    width: vw * 3,
  },
  deleteButton: {
    height: vw * 8,
    width: vw * 8,
    backgroundColor: colors.red,
  },
  deleteButtonIcon: {
    height: vw * 4.5,
    width: vw * 4.5,
  },
});

export default styles;
