import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

import { icons, images } from '../../assets';
import { vh, vw } from '../../utils/units';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Swiper from 'react-native-swiper'
import { colors } from '../../utils/theme';
const Banner = props => {
    // const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Swiper
            loop={false}
            showsButtons={false}
            dotStyle={styles.dot}
            activeDotColor={colors.red}
            activeDotStyle={styles.activeDot}
            // containerStyle={{ position: 'absolute' }}
            style={styles.swiper}
        >
            <View style={styles.bannerContainer}>
                <Image source={images.newsBanner} style={styles.banner} />
            </View>
            <View style={styles.bannerContainer}>
                <Image source={images.newsBanner} style={styles.banner} />
            </View>
            <View style={styles.bannerContainer}>
                <Image source={images.newsBanner} style={styles.banner} />
            </View>
            <View style={styles.bannerContainer}>
                <Image source={images.newsBanner} style={styles.banner} />
            </View>
        </Swiper>
    );
};

export default Banner;
