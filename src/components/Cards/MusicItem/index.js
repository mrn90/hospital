import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {colors} from '../../../utils/theme';
import {icons} from '../../../assets';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const MusicItem = ({item}) => {
  const navigation = useNavigation();

  const handleOnNaviate = () => {
    navigation.navigate('MusicFullScreen');
  };

  return (
    <View style={styles.container}>
      <Touchable onPress={handleOnNaviate}>
        <ImageBackground
          source={item.image}
          style={styles.musicImageStyle}
          imageStyle={styles.musicImage}>
          <Image source={icons.play} style={styles.playIcon} />
        </ImageBackground>
      </Touchable>

      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <EurostileBold style={styles.nameText}>{item.name}</EurostileBold>
          <Touchable
            style={[
              styles.whishlistContainer,
              item?.isFavorite && {
                backgroundColor: colors.pink,
                borderColor: colors.pink,
              },
            ]}>
            <Image
              source={item?.isFavorite ? icons.fillHeart : icons.whishlist}
              style={[
                styles.whishlistIcon,
                item?.isFavorite && {tintColor: colors.white},
              ]}
            />
          </Touchable>
        </View>

        <EurostileBold style={styles.musicTypeText}>
          {item.musicType}
        </EurostileBold>

        <EurostileBold style={styles.durationText}>
          {item.duration}
        </EurostileBold>
      </View>
    </View>
  );
};

export default MusicItem;
