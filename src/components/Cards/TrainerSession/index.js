import React from 'react';
import {View, Image} from 'react-native';
import {dummyImage, icons} from '../../../assets';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';

const TrainerSession = props => {
  const {item} = props;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={item?.image} style={styles.imageStyle} />
        <EurostileBold style={styles.nameText}>{item?.name}</EurostileBold>
      </View>
      <View style={styles.rowContainer}>
        <Image source={icons.calender} style={styles.imageStyle} />
        <EurostileBold style={styles.nameText}>{item?.date}</EurostileBold>
      </View>
    </View>
  );
};

export default TrainerSession;
