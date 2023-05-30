import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  itemContainer: {
    width: vw * 90,
    flexDirection: 'row',
    marginVertical: vh * 1,
  },
  imageContainer: {
    width: vw * 32,
    height: vw * 32,
    borderRadius: vw * 8,
    borderWidth: vw * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.grayBorderColor1,
    backgroundColor: colors.inputBackgroundColor,
  },
  imageStyle: {
    width: vw * 30,
    height: vw * 25,
    resizeMode: 'contain',
  },
  contentContainer: {
    marginLeft: vw * 4,
    justifyContent: 'center',
  },
  productNameText: {
    width: vw * 35,
    fontSize: vw * 4,
    color: colors.grayText5,
    textTransform: 'uppercase',
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: vh * 1,
  },
  currencySymbol: {
    fontSize: vw * 3,
    color: colors.grayText5,
  },
  priceText: {
    fontSize: vw * 6,
    color: colors.grayText5,
  },
  descriptionText: {
    fontSize: vw * 3.5,
    marginBottom: vh * 0.8,
    color: colors.grayText5,
  },
  quantityText: {
    fontSize: vw * 3.5,
    color: colors.grayText5,
  },
  statusContainer: {
    width: vw * 20,
    height: vh * 3.5,
    marginTop: vh * 1,
    borderRadius: vw * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: vw * 0.5,
    borderStyle: 'dashed',
    backgroundColor: colors.green,
  },
  statusText: {
    fontSize: vw * 3,
    color: colors.white,
    textTransform: 'uppercase',
  },
});

export default styles;
