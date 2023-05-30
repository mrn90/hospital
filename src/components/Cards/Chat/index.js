import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import styles from './styles';

const ChatItem = ({item}) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Message', {
      item,
    });
  };

  return (
    <Touchable style={styles.container} onPress={handleOnPress}>
      <Image source={item.profile} style={styles.profileImage} />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <EurostileBold style={styles.nameText}>{item.name}</EurostileBold>
          <EurostileBold style={styles.timeText}>{item.time}</EurostileBold>
        </View>
        <EurostileBold style={styles.lastMesaage}>
          {item.lastMesaage}
        </EurostileBold>
        <EurostileBold style={styles.dateText}>{item.date}</EurostileBold>
      </View>
    </Touchable>
  );
};

export default ChatItem;
