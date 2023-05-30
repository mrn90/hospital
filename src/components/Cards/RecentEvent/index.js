import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {colors} from '../../../utils/theme';
import {icons} from '../../../assets';
import styles from './styles';
import TextButton from '../../Buttons/TextButton';
import {getStatusColor} from '../../../utils/helper';

const EventItem = ({item, ...props}) => {
  const statusColor = getStatusColor(item.status);
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress(item);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        style={styles.sessionImage}
        imageStyle={styles.imageStyle}>
        <View style={styles.bkImageHeader}>
          <View
            style={[styles.statusContainer, {backgroundColor: statusColor}]}>
            <EurostileBold style={styles.statusText}>
              {item.status}
            </EurostileBold>
          </View>
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
      </ImageBackground>

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
          onPress={handleOnPress}
          style={styles.viewDetailBtn}
          textStyle={styles.btnTextStyle}
        />
        <TextButton
          title="Cancel"
          style={styles.cancelBtn}
          textStyle={styles.btnTextStyle}
        />
      </View>
    </View>
  );
};

export default EventItem;
