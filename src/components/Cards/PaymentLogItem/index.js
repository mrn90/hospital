import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {colors} from '../../../utils/theme';
import {icons} from '../../../assets';
import styles from './styles';

const PaymentLogItem = ({item, isSession}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.musicImageStyle}
          imageStyle={styles.musicImage}
        />
      </View>

      <View style={styles.contentContainer}>
        <EurostileBold style={styles.paymentIdText}>
          Payment ID {item.id}
        </EurostileBold>
        <View style={styles.rowContainer}>
          <EurostileBold style={styles.currencySymbol}>$</EurostileBold>
          <EurostileBold style={styles.priceText}>{item.price}</EurostileBold>
        </View>
        {isSession ? (
          <EurostileBold style={styles.descriptionText}>
            Session ABC
          </EurostileBold>
        ) : (
          <>
            <EurostileBold style={styles.descriptionText}>
              {item.description}
            </EurostileBold>
            <EurostileBold style={styles.descriptionText}>
              Recurring Payment {item?.resPayment}
            </EurostileBold>
          </>
        )}

        <View style={styles.headerContainer}>
          <Image source={icons.clock} style={styles.iconStyle} />
          <EurostileBold style={styles.valueText}>{item.time}</EurostileBold>
        </View>
        <View style={styles.headerContainer}>
          <Image source={icons.calender} style={styles.iconStyle} />
          <EurostileBold style={styles.valueText}>{item.date}</EurostileBold>
        </View>
      </View>
    </View>
  );
};

export default PaymentLogItem;
