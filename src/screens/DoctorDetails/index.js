import React from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import HeaderBackground from '../../components/HeaderBackground';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
// import ServicesItem from '../../components/Cards/ServicesItem'
import MainButton from '../../components/Buttons/MainButton';
import { vh, vw } from '../../utils/units';
// import Banner from '../../components/Banners';
// import DoctorItem from '../../components/Cards/DoctorItem';
import Footer from '../../components/Footer'
// import AllDoctorsItem from '../../components/Cards/AllDoctorsItem';


const DoctorDetails = props => {

  // const renderDoctors = ({ item }) => {
  //   return <AllDoctorsItem item={item} />;
  // };


  return (
    <View style={styles.mainView}>
      <HeaderBackground heading={'Doctor Details'} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 * vh, }}
      // style={styles.scrollView}
      >
        {/* <Banner /> */}
        <View style={styles.container}>

          <Image source={icons.doctorIcon} style={styles.doctorIcon} />

          <View style={styles.nameContainer}>
            <CenturyGothic style={styles.text}>Name {'            '}:</CenturyGothic>
            <CenturyGothic style={styles.doctorName}>{'     '}Prof. ABBAS ZAFAR</CenturyGothic>
          </View>
          <View style={styles.nameContainer}>
            <CenturyGothic style={styles.text}>Qualification {' '}:</CenturyGothic>
            <CenturyGothic style={styles.doctorName}>{'     '}MBBS, FRCS</CenturyGothic>
          </View>
          <View style={styles.nameContainer}>
            <CenturyGothic style={styles.text}>Speciality{'        '}:</CenturyGothic>
            <CenturyGothic style={styles.doctorName}>{'     '}ENT SURGERY</CenturyGothic>
          </View>
          <View style={styles.nameContainer}>
            <CenturyGothic style={styles.text}>Charges {'         '}:</CenturyGothic>
            <CenturyGothic style={styles.charges}>{'     '}PKR 300</CenturyGothic>
          </View>

          <View style={styles.btnContainer}>

            <MainButton
              text="Get Appointment"
              style={styles.btnConsult}
              onPress={() => { props?.navigation.navigate('AppointmentBooking') }}
            />
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <CenturyGothic style={styles.aboutHeading}>About</CenturyGothic>
          <CenturyGothic style={styles.aboutText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.</CenturyGothic>
        </View>
        <View style={styles.separator}></View>

        <View style={styles.aboutContainer}>
          <CenturyGothic style={styles.aboutHeading}>Availability</CenturyGothic>

          <View style={styles.locationTextTopBorder}>
            <CenturyGothic style={styles.locationText}>Location: Nazimabad</CenturyGothic>
            <View style={styles.topBorder}></View>
          </View>
          <View style={styles.iconDateContainer}>
            <Image source={icons.calendar} style={styles.calendar} />
            <CenturyGothic style={styles.dateText}>Tuesday, December 28, 2022</CenturyGothic>
          </View>

          <View style={styles.locationContainerBorder}>
            <View style={styles.timeContainer}>
              <View style={styles.timeBox}>
                <CenturyGothic style={styles.timeText}>06:00 PM</CenturyGothic>
              </View>
              <View style={styles.timeBox}>
                <CenturyGothic style={styles.timeText}>06:00 PM</CenturyGothic>
              </View>
              <View style={styles.timeBox}>
                <CenturyGothic style={styles.timeText}>06:00 PM</CenturyGothic>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.seeAllContainer}>
          <CenturyGothic style={styles.seeAllText}>SEE ALL AVAILABILITY</CenturyGothic>
        </View>

      </ScrollView>
      <Footer />
    </View>
  );
};

export default DoctorDetails;
