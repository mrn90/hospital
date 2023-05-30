import React from 'react';
import {icons} from '../../../assets';
import {View, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import styles from './styles';

const FriendItem = props => {
  const {item} = props;

  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={item.profile} style={styles.profileImage} />
      <View style={styles.contentContainer}>
        <EurostileBold style={styles.nameText}>{item.name}</EurostileBold>
        <EurostileBold style={styles.dateText}>{item.time}</EurostileBold>
      </View>
      <Touchable onPress={handleOnPress}>
        <Image source={icons.threeDots} style={styles.threeDots} />
      </Touchable>
    </View>
  );
};

export default FriendItem;
