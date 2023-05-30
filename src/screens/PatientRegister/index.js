import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { icons, images } from '../../assets';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import MainInput from '../../components/InputField/MainInput';
import MainButton from '../../components/Buttons/MainButton';


const PatientRegister = props => {
    const [showPassword, setShowPassword] = useState(false)
    const securePassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <View style={styles.mainView}>


            <Image source={images.logo} resizeMode='contain' style={styles.logo} />
            <CenturyGothic style={styles.login}>Patient Registration</CenturyGothic>
            <TextInput
                style={styles.field}
                placeholder='Email'
                placeholderTextColor={colors.lightGray}
                placeholderStyle={styles.placeholder}
                keyboardType={'email-address'}
            ></TextInput>
            <View style={styles.container}>
                <TextInput
                    style={styles.field}
                    placeholder='Password'
                    placeholderTextColor={colors.lightGray}
                    placeholderStyle={styles.placeholder}
                    secureTextEntry={showPassword ? true : false}
                ></TextInput>
                <TouchableOpacity onPress={() => { securePassword() }}>
                    {!showPassword ? <Image source={icons.hidePassword} resizeMode='contain' style={styles.icon} /> : <Image source={icons.showPassword} resizeMode='contain' style={styles.icon} />}

                </TouchableOpacity>
            </View>

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
                onPress={() => {props?.navigation.navigate('PatientRegister')}}
            />
            <MainButton text="Doctor Register"
                style={styles.registerBtn}
                icon={icons.doctor}
                onPress={() => {props?.navigation.navigate('DoctorRegister')}}
            /> */}
        </View>
    );
};

export default PatientRegister;
