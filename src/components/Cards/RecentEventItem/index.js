import React from 'react';
import {View, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {icons} from '../../../assets';
import styles from './styles';

const RecentEventItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.eventImageContainer}>
        <Image source={item.image} style={styles.eventImage} />
      </View>
      <View style={styles.contentContainer}>
        <EurostileBold style={styles.sessionNameText}>
          {item.name}
        </EurostileBold>
        <EurostileBold style={styles.descriptionText}>
          {item.description}
        </EurostileBold>
        <View style={styles.footerContainer}>
          <EurostileBold style={styles.timeText}>{item.date}</EurostileBold>
          <EurostileBold style={styles.timeText}>{item.time}</EurostileBold>
        </View>
      </View>
    </View>
  );
};

export default RecentEventItem;
