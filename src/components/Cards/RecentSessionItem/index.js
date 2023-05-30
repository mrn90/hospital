import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {getStatusColor} from '../../../utils/helper';
import {icons} from '../../../assets';
import styles from './styles';

const RecentSessionItem = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        style={styles.sessionImage}
        imageStyle={styles.imageStyle}>
        <EurostileBold
          style={[styles.statusText, {color: getStatusColor(item.status)}]}>
          {item.status}
        </EurostileBold>
        <EurostileBold style={styles.sessionNameText}>
          {item.sessionName}
        </EurostileBold>
        <View style={styles.headerContainer}>
          <Image source={icons.calender} style={styles.calenderIcons} />
          <EurostileBold style={styles.timeText}>{item.date}</EurostileBold>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RecentSessionItem;
