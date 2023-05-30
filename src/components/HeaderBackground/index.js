import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import { fonts, icons } from '../../assets';
import { vh, vw } from '../../utils/units';
import { colors } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
// import JosefinSansSemiBold from '../Wrappers/Text/JosefinSansSemiBold';
import EurostileBold from '../Wrappers/Text/EurostileBold';
// import {vh, vw} from './Untis';
const HeaderBackground = props => {
  const navigation = useNavigation();
  console.log('headerBackground', props?.heading);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {props?.heading === 'Doctor Details' || 'Booking' ? <View>
          <TouchableOpacity
          // onPress={() => { navigation.openDrawer() }}
          >
            <Image source={icons.iconBackArrow} style={styles.menu}></Image>
          </TouchableOpacity>
        </View> : <View>
          <TouchableOpacity
            onPress={() => { navigation.openDrawer() }}
          >
            <Image source={icons.menu} style={styles.menu}></Image>
          </TouchableOpacity>
        </View>}


        {props?.heading === 'All Doctors' || 'Doctor Details' || 'Booking' ? <View><EurostileBold style={styles.heading}>
          {props.heading}
        </EurostileBold></View> : <View><EurostileBold style={styles.headingNotShown}>
          {props.heading}
        </EurostileBold></View>}

        <View>
          <View style={styles.notificationProfileContainer}>
            {props?.heading === 'Doctor Details' || 'Booking' ? null : <TouchableOpacity>
              <Image
                source={icons.notificationIcon}
                style={styles.notificationIcon}></Image>
            </TouchableOpacity>}

            <TouchableOpacity>
              <Image
                source={icons.profileIcon}
                style={styles.profileIcon}></Image>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignContent: 'center',
    marginTop: 4 * vh,
    // margin: 2 * vh
    // height: 14 * vh,
    // paddingVertical: 7 * vh,
    // width: '100%',
    // backgroundColor: colors.white,
    // position: 'relative',
    // alignItems: 'center',
    // margin: 4 * vh,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'green',
    paddingVertical: 2 * vh
    // alignSelf: 'center'
  },
  heading: {
    // alignSelf: 'center',
    justifyContent: 'center',
    // justifyContent: 'center',
    fontSize: 2.5 * vh,
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    // display: 'none',
    color: colors.red,
    // height: 4 * vh,
    // width: 4 * vw
  },
  headingNotShown: {
    // alignSelf: 'center',
    justifyContent: 'center',
    // justifyContent: 'center',
    fontSize: 3 * vh,
    // display: 'none',
    color: 'transparent',
    // height: 4 * vh,
    // width: 4 * vw
  },
  menu: {
    resizeMode: 'contain',
    alignItems: 'center',
    height: 4 * vh,
    width: 4 * vh,
    right: 2 * vh
    // backgroundColor: 'red',
    // justifyContent: 'flex-start',
  },
  notificationProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // width: '40%'
  },
  profileIcon: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vh,
    alignItems: 'center',
    left: 2 * vh
    // justifyContent: 'flex-start',
    // position: 'relative',
  },
  notificationIcon: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vh,
    alignItems: 'center',
    // left: 2 * vh
    // justifyContent: 'flex-start',

  }
});
export default HeaderBackground;
