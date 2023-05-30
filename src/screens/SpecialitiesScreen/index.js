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
import DoctorItem from '../../components/Cards/DoctorItem';
import Footer from '../../components/Footer'
import AllSpecialityItem from '../../components/Cards/AllSpecialityItem';
const specialities = [
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
  {
    name: 'Cardiology',
    image: icons.cardiology,
  },
  {
    name: 'Cardiology',
    image: icons.cardiology,
  },
  {
    name: 'Cardiology',
    image: icons.cardiology,
  },
  {
    name: 'Cardiology',
    image: icons.cardiology,
  },
  {
    name: 'Cardiology',
    image: icons.cardiology,
  },
  {
    name: 'Cardiology',
    image: icons.cardiology,
  },
];

const SpecialitiesScreen = props => {

  const renderSpecialities = ({ item }) => {
    return <AllSpecialityItem item={item} />;
  };


  return (
    <View style={styles.mainView}>
      <HeaderBackground heading={'Home'} />
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

      <View style={styles.servicesHeading}>
        <CenturyGothic style={styles.text3}>Specialities</CenturyGothic>

      </View>
      <FlatList
        // horizontal
        nestedScrollEnabled
        data={specialities}
        style={styles.services}
        contentContainerStyle={styles.bestProductListContentContainer}
        keyExtractor={item => item.id}
        renderItem={renderSpecialities}
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />

      {/* </ScrollView> */}
      <Footer />
    </View>
  );
};

export default SpecialitiesScreen;
