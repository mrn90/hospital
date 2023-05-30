import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../../assets';
import IconButton from '../../Buttons/IconButton';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';

const AllSpecialityItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.serviceContainer}>
        <Image source={item?.image} style={styles.icon} />
        <CenturyGothic style={styles.text}>{item?.name}</CenturyGothic>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceContainer}>
        <Image source={item?.image} style={styles.icon} />
        <CenturyGothic style={styles.text}>{item?.name}</CenturyGothic>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceContainer}>
        <Image source={item?.image} style={styles.icon} />
        <CenturyGothic style={styles.text}>{item?.name}</CenturyGothic>
      </TouchableOpacity>
    </View>

  );
};

export default AllSpecialityItem;
