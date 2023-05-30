import React from 'react';
import {View, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {getStatusColor} from '../../../utils/helper';
import Touchable from '../../Wrappers/Touchable';
import {colors} from '../../../utils/theme';
import {icons} from '../../../assets';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const FitnessSessionItem = ({item}) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('SessionDetail', {item});
  };

  return (
    <View style={styles.container}>
      <Touchable onPress={handleOnPress}>
        <Image source={item.image} style={styles.sessionImage} />
        <Touchable
          style={[
            styles.whishlistContainer,
            item?.isFavorite && {backgroundColor: colors.pink},
          ]}>
          <Image
            source={item?.isFavorite ? icons.fillHeart : icons.whishlist}
            style={[
              styles.whishlistIcon,
              item?.isFavorite && {tintColor: colors.white},
            ]}
          />
        </Touchable>
      </Touchable>
      <View style={styles.contentContainer}>
        <EurostileBold
          style={[styles.statusText, {color: getStatusColor(item.status)}]}>
          {item.status}
        </EurostileBold>
        <View style={styles.headerContainer}>
          <Image source={icons.calender} style={styles.calenderIcons} />
          <EurostileBold style={styles.timeText}>{item.date}</EurostileBold>
        </View>
        <EurostileBold style={styles.nameText}>{item.name}</EurostileBold>
        <EurostileBold style={styles.sessionNameText}>
          {item.sessionName}
        </EurostileBold>
      </View>
    </View>
  );
};

export default FitnessSessionItem;
