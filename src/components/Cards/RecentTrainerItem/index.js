import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import styles from './styles';

const RecentTrainerItem = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Touchable
      style={styles.container}
      onPress={() => navigation.navigate('TrainerDetail')}>
      <Image source={item.image} style={styles.imageStyle} />
      <EurostileBold style={styles.nameText}>{item?.name}</EurostileBold>
    </Touchable>
  );
};

export default RecentTrainerItem;
