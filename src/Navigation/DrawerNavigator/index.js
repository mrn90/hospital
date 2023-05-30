import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import AnimatedSplash from 'react-native-animated-splash';
// import AuthNavigator from '../AuthNavigator';
// import DrawerNavigator from '../DrawerNavigator';
import HomeScreen from '../../screens/HomeScreen'
import SpecialitiesScreen from '../../screens/SpecialitiesScreen'
import AllDoctorsScreen from '../../screens/AllDoctorsScreen'
import DoctorDetails from '../../screens/DoctorDetails'
import AppointmentBooking from '../../screens/AppointmentBooking'
// import Message from '../../screens/Message';
// import {options} from '../NavigationHeader';
import { vw, vh } from '../../utils/units';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { icons } from '../../assets';
import DrawerContent from '../../components/DrawerContent';
import { useNavigation } from '@react-navigation/native';

import { DrawerActions } from '@react-navigation/native';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = (props) => {
    const navigation = useNavigation();

    return (
        <DrawerStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                drawerStyle: {
                    backgroundColor: 'white',

                    width: vw * 100,
                },

                // tabBarStyle: { position: 'absolute', backgroundColor: 'red' },
                // tabBarInactiveTintColor: '#fff',
                // tabBarBackground: () => renderTabBarBackground(),
            }}
            drawerContent={(props) => {
                return (
                    <ScrollView
                        style={{ overflow: 'scroll' }}
                        contentContainerStyle={{ paddingBottom: 60 * vh }}
                    >
                        <View style={styles.drawerContainer}>
                            <View style={styles.topContainer}>
                                <View style={styles.headingContainer}>
                                    <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.closeDrawer()); }}>
                                        <Image source={icons.iconBack} style={styles.iconBack} />
                                    </TouchableOpacity>
                                    {/* <CenturyGothic style={styles.headingText}>Menu</CenturyGothic> */}
                                    <View style={styles.notificationBackground}>
                                        <Image source={icons.bell} style={styles.bell} />
                                    </View>
                                </View>

                                <View style={styles.profileImageContainer}>
                                    <Image source={icons.iconawesomeuser} style={styles.profileImage} />
                                    {/* <TouchableOpacity>
                                    <View style={styles.cameraContainer}>
                                        <Image source={icons.iconCamera2} style={styles.IconCamera2} />
                                    </View>
                                </TouchableOpacity> */}
                                </View>
                                <CenturyGothic style={styles.userName}>Sheikh Bilal Bashir</CenturyGothic>
                                <View style={styles.location}>
                                    <Image source={icons.pin} style={styles.pin} />
                                    <CenturyGothic style={styles.locationText}>Karachi, Pakistan</CenturyGothic>
                                </View>


                                {/* drawer screen names component */}

                                <DrawerContent />
                                <View style={styles.versionLogoutContainer}>
                                    <View style={styles.logoutContainer}>
                                        <Image source={icons.iconLogout} style={styles.iconLogout} />
                                        <CenturyGothic style={styles.logoutText}>Logout</CenturyGothic>
                                    </View>
                                    <CenturyGothic>v 1.0</CenturyGothic>
                                </View>
                                <View style={styles.separator}></View>
                                <View style={styles.socialsLogoContainer}>
                                    <TouchableOpacity>
                                        <CenturyGothic style={styles.facebook}>f</CenturyGothic>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={icons.instagram} style={styles.instagram} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={icons.twitter} style={styles.twitter} />
                                    </TouchableOpacity>


                                </View>
                            </View>

                        </View>
                    </ScrollView>
                )
            }}
        >
            <DrawerStack.Screen name="Home" component={HomeScreen} />
            <DrawerStack.Screen name="SpecialitiesScreen" component={SpecialitiesScreen} />
            <DrawerStack.Screen name="AllDoctorsScreen" component={AllDoctorsScreen} />
            <DrawerStack.Screen name="DoctorDetails" component={DoctorDetails} />
            <DrawerStack.Screen name="AppointmentBooking" component={AppointmentBooking} />

            {/* <Drawer.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
      /> */}
            {/* <RootStack.Screen name="Message" component={Message} options={options} /> */}
        </DrawerStack.Navigator >
    );
};

export default DrawerNavigator;
