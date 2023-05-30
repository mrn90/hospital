import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  reviewContainer: {
    width: vw * 85,
    padding: vw * 3,
    marginBottom: vh * 2,
    borderRadius: vw * 4,
    backgroundColor: colors.inputBackgroundColor,
  },
  reviewHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: vw * 14,
    height: vw * 14,
    borderRadius: (vw * 14) / 2,
  },
  reviewHeaderTextContainer: {
    marginLeft: vw * 2,
    alignItems: 'flex-start',
  },
  reviewNameText: {
    fontSize: vw * 4.5,
    color: colors.white,
  },
  userNameContainer: {
    width: vw * 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editReviewBtn: {
    fontSize: vw * 4,
    color: colors.lightBlue,
  },
  ratingContainer: {
    // width: vw * 20,
  },
  starContainerStyle: {
    width: vw * 20,
    justifyContent: 'space-evenly',
  },
  reviewRatingContainer: {},
  reviewDateText: {
    marginVertical: vh * 1,
    color: colors.white,
  },
  reviewText: {
    fontSize: vw * 3.5,
    color: colors.grayText4,
  },
});

export default styles;
