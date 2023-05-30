import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../../assets';
import IconButton from '../../Buttons/IconButton';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';

const ServicesItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.serviceContainer}>
      <Image source={item?.image} style={styles.icon} />
      <CenturyGothic style={styles.text}>{item?.name}</CenturyGothic>
    </TouchableOpacity>
  );
};

export default ServicesItem;
