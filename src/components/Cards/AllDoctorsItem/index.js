import React from 'react';
import { View, Image } from 'react-native';
import { icons } from '../../../assets';
import IconButton from '../../Buttons/IconButton';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';
import MainButton from '../../Buttons/MainButton';
const AllDoctorsItem = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>

                <Image source={icons.doctorIcon} style={styles.doctorIcon} />
                <View style={styles.onlineFavContainer}>
                    <View style={styles.online}></View>
                    <Image source={icons.heart} style={styles.heart} />
                </View>
                <CenturyGothic style={styles.doctorName}>Prof. ABBAS ZAFAR</CenturyGothic>
                <CenturyGothic style={styles.qualification}>MBBS, FRCS</CenturyGothic>
                <CenturyGothic style={styles.speciality}>ENT SURGERY</CenturyGothic>
                <View style={styles.btnContainer}>
                    <MainButton
                        text="VIEW PROFILE"
                        style={styles.btnProfile}
                    // onPress={() => { props.navigation.navigate('Location') }}
                    />
                    <MainButton
                        text="CONSULT NOW"
                        style={styles.btnConsult}
                    // onPress={() => { props.navigation.navigate('Location') }}
                    />
                </View>
            </View>
            <View style={styles.container}>

                <Image source={icons.doctorIcon} style={styles.doctorIcon} />
                <View style={styles.onlineFavContainer}>
                    <View style={styles.online}></View>
                    <Image source={icons.heart} style={styles.heart} />
                </View>
                <CenturyGothic style={styles.doctorName}>Prof. ABBAS ZAFAR</CenturyGothic>
                <CenturyGothic style={styles.qualification}>MBBS, FRCS</CenturyGothic>
                <CenturyGothic style={styles.speciality}>ENT SURGERY</CenturyGothic>
                <View style={styles.btnContainer}>
                    <MainButton
                        text="VIEW PROFILE"
                        style={styles.btnProfile}
                    // onPress={() => { props.navigation.navigate('Location') }}
                    />
                    <MainButton
                        text="CONSULT NOW"
                        style={styles.btnConsult}
                    // onPress={() => { props.navigation.navigate('Location') }}
                    />
                </View>
            </View>
        </View>

    );
};

export default AllDoctorsItem;
