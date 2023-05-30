import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import HeaderBackground from '../../components/HeaderBackground';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';
import MainButton from '../../components/Buttons/MainButton';
import { vh, vw } from '../../utils/units';
import Footer from '../../components/Footer'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

const AppointmentBooking = props => {

  // const renderDoctors = ({ item }) => {
  //   return <AllDoctorsItem item={item} />;
  // };
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [changeColor, setChangeColor] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const selectDate = (date) => {
    console.log(new Date())
    console.log('datee', date)
    setDate(date)
    setOpen(!open)
  }
  const selectLocation = (obj) => {
    if (obj === 'Nazimabad') {
      console.log(obj)
      setSelectedLocation(obj)
      setChangeColor(!changeColor)
    }
    if (obj === 'Clifton') {
      setSelectedLocation(obj)
      setChangeColor(!changeColor)
    }
    if (obj === 'Kemari') {
      setSelectedLocation(obj)
      setChangeColor(!changeColor)
    }
  }

  const selectDetails = () => {
    if (changeColor === false) {
      console.log('please select a location')
    } else {
      setStep(2)
    }
  }

  return (
    <View style={styles.mainView}>
      <HeaderBackground heading={'Booking'} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 * vh, }}
      // style={styles.scrollView}
      >
        <View style={styles.tabContainer}>
          <View style={styles.box}>
            <CenturyGothic>1. TIME</CenturyGothic>
          </View>
          <View style={styles.box}>
            <CenturyGothic>2. DETAILS</CenturyGothic>
          </View>
          <View style={styles.box}>
            <CenturyGothic>3. FINISH</CenturyGothic>
          </View>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorTime}></View>
          {step == 2 ? <View style={styles.separatorTime}></View> :
            <View style={styles.separatorDetails}></View>}

          <View style={styles.separatorFinish}></View>
        </View>
        {step === 1 ? <View style={styles.TimeSection}>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <View style={styles.datePickerContainer}>
              {moment(date).format('DD MMM YYYY') === moment(new Date()).format('DD MMM YYYY') ? <CenturyGothic style={styles.text}>Pick Date</CenturyGothic> :
                <CenturyGothic style={styles.text}>{moment(date).format('DD MMM YYYY')}</CenturyGothic>}

            </View>
          </TouchableOpacity>
          <DatePicker
            modal={false}
            open={open}
            minimumDate={new Date()}
            mode={'date'}
            date={date}
            // onConfirm={(date) => {
            //   setOpen(false)
            //   console.log('date', date)
            //   setDate(date)
            // }}
            onCancel={() => {
              setOpen(false)
            }}
            onDateChange={(date) => selectDate(date)}
            style={styles.datePicker}
          />


          <CenturyGothic style={styles.headingTime}>Locations</CenturyGothic>

          <View style={styles.timeContainer}>
            {selectedLocation === 'Nazimabad' && changeColor === true ? <TouchableOpacity style={styles.timeBoxSelected} onPress={() => { selectLocation('Nazimabad') }}>
              <CenturyGothic>North Nazimabad</CenturyGothic>
              <CenturyGothic style={styles.timeText}>06:00 PM - 7:30 PM</CenturyGothic>
            </TouchableOpacity> : <TouchableOpacity style={styles.timeBox} onPress={() => { selectLocation('Nazimabad') }}>
              <CenturyGothic>North Nazimabad</CenturyGothic>
              <CenturyGothic style={styles.timeText}>06:00 PM - 7:30 PM</CenturyGothic>
            </TouchableOpacity>}
            {selectedLocation === 'Clifton' && changeColor === true ? <TouchableOpacity style={styles.timeBoxSelected}
              onPress={() => { selectLocation('Clifton') }}>
              <CenturyGothic>Clifton</CenturyGothic>
              <CenturyGothic style={styles.timeText}>06:00 PM - 7:30 PM</CenturyGothic>
            </TouchableOpacity> : <TouchableOpacity style={styles.timeBox}
              onPress={() => { selectLocation('Clifton') }}>
              <CenturyGothic>Clifton</CenturyGothic>
              <CenturyGothic style={styles.timeText}>06:00 PM - 7:30 PM</CenturyGothic>
            </TouchableOpacity>}
            {selectedLocation === 'Kemari' && changeColor === true ? <TouchableOpacity style={styles.timeBoxSelected}
              onPress={() => { selectLocation('Kemari') }}>
              <CenturyGothic>Kemari</CenturyGothic>
              <CenturyGothic style={styles.timeText}>02:00 PM - 3:30 PM</CenturyGothic>
            </TouchableOpacity> : <TouchableOpacity style={styles.timeBox} onPress={() => { selectLocation('Kemari') }}>
              <CenturyGothic>Kemari</CenturyGothic>
              <CenturyGothic style={styles.timeText}>02:00 PM - 3:30 PM</CenturyGothic>
            </TouchableOpacity>}

          </View>

          <MainButton
            text="Next"
            style={styles.btn}
            onPress={() => { selectDetails() }}
          />
        </View> : step == 2 ?
          <View style={styles.detailsSection}>


            <View style={styles.container}>

              {/* <Image source={icons.doctorIcon} style={styles.doctorIcon} /> */}

              <CenturyGothic style={styles.doctorNametext}>Doctor Name </CenturyGothic>
              <View style={styles.nameContainer}>
                <Image source={icons.doctorIcon} style={styles.doctorIcon} />
                <CenturyGothic style={styles.doctorName}>{'   '}Prof. ABBAS ZAFAR</CenturyGothic>
              </View>

              <View style={styles.chargesContainer}>
                <CenturyGothic style={styles.charges}>Charges</CenturyGothic>
                <CenturyGothic style={styles.charges}>300/=</CenturyGothic>
              </View>
            </View>

            <View styles={styles.lineBreak}></View>
            <View style={styles.paymentContainer}>
              <CenturyGothic >Payment</CenturyGothic>
              <View style={styles.paymentBtnContainer}>
                {paymentMethod === '' ? <View style={styles.paymentBtnContainer}>
                  <MainButton
                    text='PAY NOW'
                    style={styles.btnProfile}
                    onPress={() => { setPaymentMethod('PAYNOW') }}
                  />
                  <MainButton
                    text='ON ARRIVAL'
                    style={styles.btnConsult}
                    onPress={() => { setPaymentMethod('ONARRIVAL') }}
                  />
                </View> : paymentMethod === 'PAYNOW' ?

                  <View style={styles.paymentBtnContainer}>
                    <MainButton
                      text='PAY NOW'
                      style={styles.btnPAYNOW}
                      onPress={() => { setPaymentMethod('') }}
                    />
                    <MainButton
                      text='ON ARRIVAL'
                      style={styles.btnConsult}
                      onPress={() => { setPaymentMethod('ONARRIVAL') }}
                    />
                  </View>
                  :
                  <View style={styles.paymentBtnContainer}>
                    <MainButton
                      text='PAY NOW'
                      style={styles.btnPAYNOW}
                      onPress={() => { setPaymentMethod('PAYNOW') }}
                    />
                    <MainButton
                      text='ON ARRIVAL'
                      style={styles.btnONARRIVAL}
                      onPress={() => { setPaymentMethod('') }}
                    />
                  </View>

                }
              </View>

            </View>
            <MainButton
              text="Next"
              style={styles.btn}
            // onPress={() => { selectDetails() }}
            />
          </View> : null}






      </ScrollView>
      <Footer />
    </View>
  );
};

export default AppointmentBooking;
