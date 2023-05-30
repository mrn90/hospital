import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cheatHead: {
    flexDirection: 'row',
    marginBottom: vh * 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  userImage: {
    width: vw * 10,
    height: vw * 10,
    borderRadius: vw * 5,
  },
  senderMessage: {
    paddingVertical: vh * 0.8,
    paddingHorizontal: vw * 2,
    backgroundColor: colors.pink,
    borderBottomLeftRadius: vw * 3,
    borderTopLeftRadius: vw * 3,
    borderTopRightRadius: vw * 3,
    maxWidth: vw * 70,
    marginRight: vw * 3,
  },
  senderMessageText: {
    flex: 1,
    fontSize: vw * 4.5,
    color: colors.white,
  },
  receiverMessage: {
    paddingVertical: vh * 0.8,
    paddingHorizontal: vw * 2,
    backgroundColor: colors.darkBlue,
    borderBottomLeftRadius: vw * 3,
    borderBottomRightRadius: vw * 3,
    borderTopRightRadius: vw * 3,
    maxWidth: vw * 70,
    marginLeft: vw * 3,
  },
  receiverMessageText: {
    flex: 1,
    fontSize: vw * 4.5,
    color: colors.gray9,
  },
});

export default styles;
