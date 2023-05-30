import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ExtendedHeader = props => {
  return <View style={[styles.container, props?.style]}></View>;
};

export default ExtendedHeader;
