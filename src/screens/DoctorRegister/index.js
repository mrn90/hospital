import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import { icons, images } from '../../assets';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import MainInput from '../../components/InputField/MainInput';
import MainButton from '../../components/Buttons/MainButton';
import { vh } from '../../utils/units';


const DoctorRegister = props => {
    const [showPassword, setShowPassword] = useState(false)
    const securePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <ScrollView style={styles.mainView}
            contentContainerStyle={{ marginBottom: 20 * vh }}
        >


            <Image source={images.logo} resizeMode='contain' style={styles.logo} />
            <CenturyGothic style={styles.login}>Doctor Registration</CenturyGothic>
            <TextInput
                style={styles.field}
                placeholder='Employee ID'
                placeholderTextColor={colors.lightGray}
                placeholderStyle={styles.placeholder}
                keyboardType={'number-pad'}
            ></TextInput>

            <TextInput
                style={styles.field}
                placeholder='Name'
                placeholderTextColor={colors.lightGray}
                placeholderStyle={styles.placeholder}
                keyboardType={'default'}
            ></TextInput>
            <TextInput
                style={styles.field}
                placeholder='Email'
                placeholderTextColor={colors.lightGray}
                placeholderStyle={styles.placeholder}
                keyboardType={'email-address'}
            ></TextInput>
            <TextInput
                style={styles.field}
                placeholder='Contact Number'
                placeholderTextColor={colors.lightGray}
                placeholderStyle={styles.placeholder}
                keyboardType={'number-pad'}
            ></TextInput>
            {/* <TouchableOpacity onPress={() => { securePassword() }}>
                    {!showPassword ? <Image source={icons.hidePassword} resizeMode='contain' style={styles.icon} /> : <Image source={icons.showPassword} resizeMode='contain' style={styles.icon} />}

                </TouchableOpacity> */}


            <MainButton
                text="Log in"
                style={styles.loginButton}
                onPress={() => { props?.navigation.navigate('DrawerNavigator') }}

            />
            {/* <TouchableOpacity onPress={() => { props?.navigation.navigate('ForgotPasswordScreen') }}>
                <CenturyGothic style={styles.text}>Forgot your password?</CenturyGothic>
            </TouchableOpacity> */}


            {/* <MainButton text="Patient Register"
                style={styles.registerBtn}
                icon={icons.patient}
                onPress={() => { props?.navigation.navigate('PatientRegister') }}
            />
            <MainButton text="Doctor Register"
                style={styles.registerBtn}
                icon={icons.doctor}
                onPress={() => { props?.navigation.navigate('DoctorRegister') }}
            /> */}
        </ScrollView>
    );
};

export default DoctorRegister;
