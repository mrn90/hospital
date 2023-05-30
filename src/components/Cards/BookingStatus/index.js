import React from 'react';
import {View} from 'react-native';
import {getStatusBackgroundColor, getStatusColor} from '../../../utils/helper';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';

const BookingStatus = props => {
  const color = getStatusColor(props?.status);
  const backgroundColor = getStatusBackgroundColor(props?.status);
  return (
    <View
      style={[
        styles.statusContainer,
        {borderColor: color, backgroundColor: backgroundColor},
      ]}>
      <EurostileBold style={[styles.statusText, {color: color}]}>
        {props?.status}
      </EurostileBold>
    </View>
  );
};

export default BookingStatus;
