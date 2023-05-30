import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

import { icons, images } from '../../assets';
import { vh, vw } from '../../utils/units';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const Footer = props => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (

        <View style={styles.footer}>
            <View style={styles.iconsContainer}>
                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => { navigation.navigate('ReportLogin') }}>
                        <Image source={icons.medicalReport} style={styles.laboratory} />
                        <CenturyGothic style={styles.iconText}>Reports</CenturyGothic>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 2 * vh }}>

                        <Image source={icons.package} style={styles.laboratory} />
                        <CenturyGothic style={styles.iconText}>Order</CenturyGothic>
                    </TouchableOpacity>
                </View>
                <ImageBackground source={images.hexagon} style={styles.hexagon}>
                    <Image source={images.logo} resizeMode='contain' style={styles.logo} />
                </ImageBackground>
                <View style={styles.subContainer2}>
                    <TouchableOpacity>
                        <Image source={icons.appointment} style={styles.laboratory} />
                        <CenturyGothic style={styles.iconText}>Appointment</CenturyGothic>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 2 * vh }} onPress={() => { toggleModal() }}>
                        <Image source={icons.more} style={styles.laboratory} />
                        <CenturyGothic style={styles.iconText}>More</CenturyGothic>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                isVisible={isModalVisible}
                animationIn={'slideInUp'}
                onBackdropPress={() => toggleModal()}
                style={styles.modal}
            >
                <View style={{
                    height: '25%',
                    width: '100%',
                    marginTop: 'auto',
                    backgroundColor: '#EAECF0',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    borderTopLeftRadius: 3 * vh,
                    borderTopRightRadius: 3 * vh,
                }}>
                    <TouchableOpacity>
                        <ImageBackground source={images.hexagon2} style={styles.hexagon2}>
                            <Image source={icons.consultation} resizeMode='contain' style={styles.icon} />
                            <CenturyGothic style={styles.consultancy}>Consultancy</CenturyGothic>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={images.hexagon2} style={styles.hexagon2}>
                            <Image source={icons.drugs} resizeMode='contain' style={styles.icon} />
                            <CenturyGothic style={styles.consultancy}>Pharmacy</CenturyGothic>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground source={images.hexagon2} style={styles.hexagon2}>
                            <Image source={icons.microscope} resizeMode='contain' style={styles.icon} />
                            <CenturyGothic style={styles.consultancy}>Laboratory</CenturyGothic>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>



    );
};

export default Footer;
