import React from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import HeaderBackground from '../../components/HeaderBackground';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
// import ServicesItem from '../../components/Cards/ServicesItem'

import { vh, vw } from '../../utils/units';
// import Banner from '../../components/Banners';
// import DoctorItem from '../../components/Cards/DoctorItem';
import Footer from '../../components/Footer'
import AllDoctorsItem from '../../components/Cards/AllDoctorsItem';
const doctors = [
  {
    name: 'Prof Abbas Zafar',
    qualifications: ['MBBS', 'FRCS'],
    speciality: 'ENT SURGERY'
  },
  {
    name: 'Prof Nadeem Ahmed',
    qualifications: ['MBBS', 'MCPS (Chest)', 'MRCP'],
    speciality: 'PULMONOLOGY'
  },
  {
    name: 'Prof Nadeem Ahmed',
    qualifications: ['MBBS', 'MCPS (Chest)', 'MRCP'],
    speciality: 'PULMONOLOGY'
  },
  {
    name: 'Prof Nadeem Ahmed',
    qualifications: ['MBBS', 'MCPS (Chest)', 'MRCP'],
    speciality: 'PULMONOLOGY'
  },
  {
    name: 'Prof Nadeem Ahmed',
    qualifications: ['MBBS', 'MCPS (Chest)', 'MRCP'],
    speciality: 'PULMONOLOGY'
  },
  {
    name: 'Prof Nadeem Ahmed',
    qualifications: ['MBBS', 'MCPS (Chest)', 'MRCP'],
    speciality: 'PULMONOLOGY'
  },
  {
    name: 'Prof Nadeem Ahmed',
    qualifications: ['MBBS', 'MCPS (Chest)', 'MRCP'],
    speciality: 'PULMONOLOGY'
  },
];

const AllDoctorsScreen = props => {

  const renderDoctors = ({ item }) => {
    return <AllDoctorsItem item={item} />;
  };


  return (
    <View style={styles.mainView}>
      <HeaderBackground heading={'All Doctors'} />
      {/* <ScrollView
        contentContainerStyle={{ paddingBottom: 20 * vh, }}
        style={styles.scrollView}
      > */}
      {/* <Banner /> */}
      <View style={styles.searchContainer}>
        <TextInput placeholder='Search..' placeholderTextColor={colors.grayText6} style={styles.search}>

        </TextInput>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Image source={icons.searchIcon} style={styles.searchIcon} />
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.servicesHeading}>
        <CenturyGothic style={styles.text3}>All Doctors</CenturyGothic>

      </View> */}
      <FlatList
        // horizontal
        nestedScrollEnabled
        data={doctors}
        style={styles.services}
        contentContainerStyle={styles.bestProductListContentContainer}
        keyExtractor={item => item.id}
        renderItem={renderDoctors}
        showsHorizontalScrollIndicator={false}
      />

      {/* </ScrollView> */}
      <Footer />
    </View>
  );
};

export default AllDoctorsScreen;
