import React from 'react';
import {View, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import TextButton from '../../Buttons/TextButton';
import {colors} from '../../../utils/theme';
import {icons} from '../../../assets';
import styles from './styles';

const EventItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={item.image} style={styles.sessionImage} />
        <View
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
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.headerContainer}>
            <Image source={icons.calender} style={styles.calenderIcons} />
            <EurostileBold style={styles.timeText}>{item.date}</EurostileBold>
          </View>
          <View style={styles.headerContainer}>
            <Image source={icons.clock} style={styles.calenderIcons} />
            <EurostileBold style={styles.timeText}>{item.time}</EurostileBold>
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Image source={icons.address} style={styles.calenderIcons} />
          <EurostileBold style={styles.timeText}>{item.address}</EurostileBold>
        </View>
        <EurostileBold style={styles.nameText}>{item.name}</EurostileBold>
        <EurostileBold style={styles.sessionNameText}>
          {item.sessionName}
        </EurostileBold>
      </View>
      <View style={styles.btnRowContainer}>
        <TextButton
          title="View Details"
          style={styles.viewDetailBtn}
          textStyle={styles.btnTextStyle}
        />
        <TextButton
          title="Book Event"
          style={styles.cancelBtn}
          textStyle={styles.btnTextStyle}
        />
      </View>
    </View>
  );
};

export default EventItem;
