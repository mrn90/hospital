import React from 'react';
import {View, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {AirbnbRating} from 'react-native-ratings';
import styles from './styles';
import {vw} from '../../../utils/units';
import LinkButton from '../../Buttons/LinkButton';

const ReviewItem = ({item, ...props}) => {
  return (
    <View style={[styles.reviewContainer, props?.style]}>
      <View style={styles.reviewHeaderContainer}>
        <Image source={item?.image} style={styles.userImage} />
        <View style={styles.reviewHeaderTextContainer}>
          <View style={styles.userNameContainer}>
            <EurostileBold style={styles.reviewNameText}>
              {item?.name}
            </EurostileBold>
            {item?.isUser && (
              <LinkButton
                title="Edit Review"
                style={styles.editReviewBtn}
                onPress={props.onPress}
              />
            )}
          </View>

          <AirbnbRating
            showRating={false}
            size={vw * 3.5}
            readonly
            startingValue={item?.rating}
            starContainerStyle={styles.starContainerStyle}
          />
        </View>
      </View>
      <View style={styles.reviewRatingContainer}>
        <EurostileBold style={styles.reviewDateText}>
          {item?.date}
        </EurostileBold>
      </View>
      <EurostileBold style={styles.reviewText}>{item?.review}</EurostileBold>
    </View>
  );
};

export default ReviewItem;
