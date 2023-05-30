import React from 'react';
import {View, Image} from 'react-native';
import {getStatusBackgroundColor, getStatusColor} from '../../../utils/helper';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';

const OrderItem = props => {
  const {item} = props;
  const statusColor = getStatusColor(item.status);
  const backgroudnColor = getStatusBackgroundColor(item.status);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.imageStyle} />
      </View>
      <View style={styles.contentContainer}>
        <EurostileBold style={styles.productNameText}>
          Super Packed 100% Natural
        </EurostileBold>
        <View style={styles.priceContainer}>
          <EurostileBold style={styles.currencySymbol}>$</EurostileBold>
          <EurostileBold style={styles.priceText}>100.00</EurostileBold>
        </View>
        <EurostileBold style={styles.descriptionText}>
          Heather Navy, M
        </EurostileBold>
        <EurostileBold style={styles.quantityText}>Qty : 01</EurostileBold>
      </View>
      <View>
        <View
          style={[
            styles.statusContainer,
            {backgroundColor: backgroudnColor, borderColor: statusColor},
          ]}>
          <EurostileBold style={[styles.statusText, {color: statusColor}]}>
            {item.status}
          </EurostileBold>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
