import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import TextButton from '../../Buttons/TextButton';
import styles from './styles';
import Touchable from '../../Wrappers/Touchable';

const FriendRequestItem = props => {
  const {item} = props;

  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };

  const handleOnAcceptRequest = () => {
    if (props.onAcceptRequest) {
      props.onAcceptRequest();
    }
  };

  const handleOnRejectRequest = () => {
    if (props.onRejectRequest) {
      props.onRejectRequest();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image source={item.profile} style={styles.profileImage} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <EurostileBold style={styles.nameText}>{item.name}</EurostileBold>
        <EurostileBold style={styles.dateText}>{item.time}</EurostileBold>
        <View style={styles.rowContainer}>
          <TextButton
            title="Accept"
            onPress={handleOnAcceptRequest}
            style={styles.acceptButton}
          />
          <TextButton
            title="Rejct"
            onPress={handleOnRejectRequest}
            style={styles.rejectButton}
          />
        </View>
      </View>
    </View>
  );
};

export default FriendRequestItem;
