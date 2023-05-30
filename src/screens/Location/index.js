import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { icons, images } from '../../assets';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';

const Location = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.background}>
        <ImageBackground source={images.hexagon} style={styles.hexagon}>
          <Image source={images.logo} resizeMode='contain' style={styles.logo} />
        </ImageBackground>
        <CenturyGothic style={styles.text}>Select your city</CenturyGothic>
      </View>
      {/* <TextInput
            style={styles.field}
            placeholder='Search here'
            placeholderTextColor={colors.grayText}
          ></TextInput> */}

      <View style={styles.locations}>
        <View style={styles.countrycontainer}>
          <Image source={icons.flag} resizeMode='contain' style={styles.flag} />
          <CenturyGothic style={styles.countryText}>Pakistan</CenturyGothic>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.countrycontainer}>
          {/* <Image source={icons.flag} resizeMode='contain' style={styles.flag}/> */}
          <TouchableOpacity onPress={() => {props?.navigation.navigate('Login')}}>
            <CenturyGothic style={styles.cityText}>North Nazimabad</CenturyGothic>
          </TouchableOpacity>
        </View>
        <View style={styles.separatorcity}></View>
        <View style={styles.countrycontainer}>
          {/* <Image source={icons.flag} resizeMode='contain' style={styles.flag}/> */}
          <TouchableOpacity onPress={() => {props?.navigation.navigate('Login')}}> 
            <CenturyGothic style={styles.cityText}>Clifton</CenturyGothic>
          </TouchableOpacity>
        </View>
        <View style={styles.separatorcity}></View>
        <View style={styles.countrycontainer}>
          {/* <Image source={icons.flag} resizeMode='contain' style={styles.flag}/> */}
          <TouchableOpacity onPress={() => {props?.navigation.navigate('Login')}}>
            <CenturyGothic style={styles.cityText}>Sukkur</CenturyGothic>
          </TouchableOpacity>
        </View>
        <View style={styles.separatorcity}></View>
      </View>
    </View>
  );
};

export default Location;
