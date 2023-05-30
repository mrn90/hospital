import React from 'react';
import {View, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {dummyImage} from '../../../assets';
import styles from './styles';

let previous = false;

const MessageItem = ({item, index, lastIndex}) => {
  let isShow = false;

  if (index === 0) {
    isShow = true;
    previous = item.isShow;
  } else {
    if (previous !== item?.own) {
      isShow = true;
      previous = item?.own;
    }
  }

  return (
    <View
      style={[
        styles.cheatHead,
        {justifyContent: item.own ? 'flex-end' : 'flex-start'},
      ]}>
      <View
        style={[
          styles.contentContainer,
          {flexDirection: item.own ? 'row-reverse' : 'row'},
        ]}>
        {isShow ? (
          <Image
            source={dummyImage.profile1}
            style={styles.userImage}
            resizeMode="stretch"
          />
        ) : (
          <View style={styles.userImage} />
        )}

        <View
          style={[item.own ? styles.senderMessage : styles.receiverMessage]}>
          <EurostileBold
            style={[
              item.own ? styles.senderMessageText : styles.receiverMessageText,
            ]}>
            {item.message}
          </EurostileBold>
        </View>
      </View>
    </View>
  );
};

export default MessageItem;
