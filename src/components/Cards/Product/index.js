import React from 'react';
import {ImageBackground, Image, View} from 'react-native';
import {vh, vw} from '../../../utils/units';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {AirbnbRating} from 'react-native-ratings';
import styles from './styles';
import {icons} from '../../../assets';
import {colors} from '../../../utils/theme';
import Touchable from '../../Wrappers/Touchable';
import {useNavigation} from '@react-navigation/native';

const ProductItem = ({item, index}) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('ProductDetail', {
      item,
    });
  };

  return (
    <Touchable onPress={handleOnPress}>
      <ImageBackground
        source={item.image}
        style={[styles.container, index == 1 && {marginTop: vh * 6}]}
        imageStyle={styles.imageStyle}>
        <Touchable
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
        </Touchable>
        <EurostileBold style={styles.nameText}>{item?.name}</EurostileBold>
        <View style={styles.footerContainer}>
          <AirbnbRating
            count={5}
            defaultRating={4}
            size={vw * 3}
            reviewSize={0}
            isDisabled
            showRating={false}
            starContainerStyle={styles.starContainerStyle}
          />
          <EurostileBold style={styles.priceText}>
            $ {item?.price}
          </EurostileBold>
        </View>
      </ImageBackground>
    </Touchable>
  );
};

export default ProductItem;
