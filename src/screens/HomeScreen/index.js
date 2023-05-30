import React from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import HeaderBackground from '../../components/HeaderBackground';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
import ServicesItem from '../../components/Cards/ServicesItem'

import { vh, vw } from '../../utils/units';
import Banner from '../../components/Banners';
import DoctorItem from '../../components/Cards/DoctorItem';
import Footer from '../../components/Footer'
const services = [
  {
    name: 'Angiography',
    image: icons.angiography,
  },
  {
    name: 'Audiology',
    image: icons.audiology,
  },
  {
    name: 'Cardiology',
    image: icons.cardiology,
  },
];

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
];

const Home = props => {

  const renderServices = ({ item }) => {
    return <ServicesItem item={item} />;
  };

  const renderDoctors = ({ item }) => {
    return <DoctorItem item={item} />;
  };


  return (
    <View style={styles.mainView}>
      <HeaderBackground heading={'Home'} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 * vh, }}
        style={styles.scrollView}
      >
        <Banner />
        <View style={styles.searchContainer}>
          <TextInput placeholder='Search..' placeholderTextColor={colors.grayText6} style={styles.search}>

          </TextInput>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Image source={icons.searchIcon} style={styles.searchIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.servicesHeading}>
          <CenturyGothic style={styles.text3}>Specialities</CenturyGothic>
          <TouchableOpacity style={styles.seeAllContainer} onPress={() => { props?.navigation.navigate('SpecialitiesScreen') }}>
            <CenturyGothic style={styles.text4}>See all</CenturyGothic>
            <Image source={icons.seeAllArrow} style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          nestedScrollEnabled
          data={services}
          style={styles.services}
          // contentContainerStyle={styles.bestProductListContentContainer}
          keyExtractor={item => item.id}
          renderItem={renderServices}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.servicesHeading}>
          <CenturyGothic style={styles.text3}>Doctors</CenturyGothic>
          <TouchableOpacity style={styles.seeAllContainer} onPress={() => { props?.navigation.navigate('AllDoctorsScreen') }}>
            <CenturyGothic style={styles.text4}>See all</CenturyGothic>
            <Image source={icons.seeAllArrow} style={styles.rightArrow} />
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          nestedScrollEnabled
          data={doctors}
          style={styles.services}
          // contentContainerStyle={styles.bestProductListContentContainer}
          keyExtractor={item => item.id}
          renderItem={renderDoctors}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.orderBackground}>
          <View style={styles.dashedContainer}>
            <View>
              <CenturyGothic style={styles.quickOrder}>Quick Order</CenturyGothic>
              <CenturyGothic style={styles.uploadPrescription}>Upload Prescription</CenturyGothic>
              <TouchableOpacity style={styles.orderBtn}>
                <CenturyGothic style={styles.orderNow}>ORDER NOW</CenturyGothic>
              </TouchableOpacity>
            </View>
            <Image source={images.prescription} style={styles.prescription} />

          </View>
        </View>
      </ScrollView>
      <Footer />
      {/* <ScrollView
          style={styles.scrollContainer}
        // showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.scrollViewContentContainer}
        >


          <Banner />


          
          

          

          
          <View style={styles.doctorCard}>
            <Image source={icons.doctorIcon} style={styles.doctorIcon} />
            <View style={styles.onlineFavContainer}>
              <View style={styles.online}></View>
              <Image source={icons.heart} style={styles.heart} />
            </View>
            <CenturyGothic style={styles.doctorName}>Prof. ABBAS ZAFAR</CenturyGothic>
            <CenturyGothic style={styles.qualification}>MBBS, FRCS</CenturyGothic>
            <CenturyGothic style={styles.speciality}>ENT SURGERY</CenturyGothic>


          </View>
          
        </ScrollView> */}

    </View>
  );
};

export default Home;
