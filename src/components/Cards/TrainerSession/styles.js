import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: vh * 3,
    borderRadius: vw * 3.5,
    borderWidth: vw * 0.6,
    borderStyle: 'dashed',
    paddingVertical: vh * 1,
    paddingHorizontal: vw * 5,
    borderColor: colors.grayBorderColor2,
    backgroundColor: colors.inputBackgroundColor,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 1,
  },
  imageStyle: {
    width: vw * 6,
    height: vw * 6,
    marginRight: vw * 4,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: vw * 5,
    color: colors.white,
  },
});

export default styles;
