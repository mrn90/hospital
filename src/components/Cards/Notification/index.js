import React from 'react';
import {View} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';

const NotificationItem = ({item}) => {
  return (
    <View style={styles.container}>
      <EurostileBold style={styles.messageText}>{item?.message}</EurostileBold>
      <EurostileBold style={styles.dateText}>{item?.date}</EurostileBold>
    </View>
  );
};

export default NotificationItem;
