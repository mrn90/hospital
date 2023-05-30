import React from 'react';
import { View, Image, ImageBackground, ViewBase } from 'react-native';
import { vh, vw } from '../../utils/units'
import { icons, images } from '../../assets';
import styles from './styles';
import Swiper from 'react-native-swiper'
import { colors } from '../../utils/theme';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import MainButton from '../../components/Buttons/MainButton';
const Welcome = props => {
  return (
    <View style={styles.mainView}>
      <Image source={images.background} resizeMode='contain' style={styles.background} blurRadius={3}>
      </Image>
      <Swiper
        // showsButtons={true}
        loop={false}
        showsButtons={false}
        dotStyle={styles.dot}
        activeDotColor={colors.red}
        activeDotStyle={styles.activeDot}
        containerStyle={{ position: 'relative', bottom: 32 * vh }}
        style={styles.swiper}
      >
        <View>
          <Image source={images.doctor} resizeMode='contain' style={styles.image} />
          <View style={{
            marginTop: 8 * vh,
            // top: 3 * vh
          }}>
            <CenturyGothic style={styles.text}>Search Doctors</CenturyGothic>
            <CenturyGothic style={styles.subText}>Best doctors for you nearby</CenturyGothic>
          </View>
        </View>
        <View>
          <Image source={images.groupDoctor} resizeMode='contain' style={styles.groupDoctor} />
          <View style={{ marginTop: 5 * vh }}>
            <CenturyGothic style={styles.text}>Book Appointment</CenturyGothic>
            <CenturyGothic style={styles.subText}>Best doctors for you nearby</CenturyGothic>
          </View>

        </View>
        <View>
          <Image source={images.instruments} resizeMode='contain' style={styles.instruments} />
          <View style={{ marginTop: 5 * vh }}>
            <CenturyGothic style={styles.text}>Online Pharmacy</CenturyGothic>
            <CenturyGothic style={styles.subText}>Best doctors for you nearby</CenturyGothic>
          </View>
        </View>
      </Swiper>


      <MainButton
        text="Next"
        style={styles.btn}
        onPress={() => { props.navigation.navigate('Location') }}
      />


    </View>
  );
};

export default Welcome;
