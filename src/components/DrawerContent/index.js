import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

import { icons, images } from '../../assets';
import { vh, vw } from '../../utils/units';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const DrawerContent = props => {
    // const navigation = useNavigation();
    return (

        <View style={styles.drawerScreensContainer}>

            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>My Doctors</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Medical Records</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Payments</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Medical Orders</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Address Book</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>My Vouchers</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Saved Cards</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Order History</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Settings</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Tests Bookings</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Privacy Policy</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Terms & Conditions</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            <View style={styles.screenContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 2 * vh }}>
                    <Image source={icons.profileIcon} style={styles.profileIcon} />
                    <CenturyGothic style={styles.text}>Help Center</CenturyGothic>
                </View>


                <Image source={icons.rightArrow} style={styles.arrow} />
            </View>
            
        </View>



    );
};

export default DrawerContent;
