import React from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {vh} from '../../../utils/units';
import styles from './styles';

const TrainerItem = ({item, index}) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('TrainerDetail', {
      name: item?.name,
    });
  };

  return (
    <Touchable onPress={handleOnPress}>
      <ImageBackground
        source={item.image}
        style={[styles.container, index == 1 && {marginTop: vh * 6}]}
        imageStyle={styles.imageStyle}>
        <EurostileBold style={styles.nameText}>{item?.name}</EurostileBold>
      </ImageBackground>
    </Touchable>
  );
};

export default TrainerItem;
