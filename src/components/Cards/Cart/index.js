import React from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../assets';
import IconButton from '../../Buttons/IconButton';
import EurostileBold from './../../Wrappers/Text/EurostileBold';
import styles from './styles';

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <EurostileBold style={styles.nameText}>{item.name}</EurostileBold>
        <View style={styles.productPriceContainer}>
          <EurostileBold style={styles.currencySymbol}>$</EurostileBold>
          <EurostileBold style={styles.priceText}>{item.price}</EurostileBold>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.quantityContianer}>
            <IconButton
              icon={icons.minus}
              style={[styles.iconButton, styles.minusButton]}
              iconStyle={styles.btnIconStyle}
            />
            <EurostileBold style={styles.quantityText}>
              {item.quantity}
            </EurostileBold>
            <IconButton
              icon={icons.plus}
              style={styles.iconButton}
              iconStyle={styles.btnIconStyle}
            />
          </View>

          <IconButton
            icon={icons.trash}
            style={styles.deleteButton}
            iconStyle={styles.deleteButtonIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
