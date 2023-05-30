import React, { useState, useRef } from 'react';
import { View, LayoutAnimation, Image, TouchableOpacity, TextInput } from 'react-native';
import MainButton from '../../components/Buttons/MainButton';
import TextButton from '../../components/Buttons/TextButton';
import MainInput from '../../components/InputField/MainInput';
import styles from './styles';
import AlertPopup from '../../components/Popups/AlertPopup';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import { icons, images } from '../../assets';

const ForgotPassword = props => {
    const emailInvalidAlert = useRef();
    const codeInvalidAlert = useRef();

    const [showPassword, setShowPassword] = useState(false)
    const [showPassword1, setShowPassword1] = useState(false)
    const securePassword = () => {
        console.log('password')
        setShowPassword(!showPassword)
    }
    const securePassword1 = () => {
        console.log('password1')
        setShowPassword1(!showPassword1)
    }

    const [step, setStep] = useState(1);
    const getInstruction = () => {
        switch (step) {
            case 1:
                return 'Please enter your email address to';
            case 2:
                return 'Please enter verification code';
            case 3:
                return 'Please reset new password';
        }
    };
    const renderSteps = () => {
        switch (step) {
            case 1: {
                return (
                    // <PhoneInput
                    //   icon={icons.email}
                    //   required={true}
                    //   label="Mobile Number"
                    //   placeholder="Enter your Phone"
                    //   style={[styles.field, styles.firstField]}
                    // />
                    <TextInput
                        style={styles.field}
                        placeholder='Email'
                        placeholderTextColor={colors.lightGray}
                        placeholderStyle={styles.placeholder}
                        keyboardType={'email-address'}
                    ></TextInput>
                );
            }
            case 2: {
                return (
                    <TextInput
                        style={styles.field}
                        placeholder='Code'
                        placeholderTextColor={colors.lightGray}
                        placeholderStyle={styles.placeholder}
                        keyboardType={'number-pad'}
                    ></TextInput>
                );
            }
            case 3: {
                return (
                    <>
                        <View style={styles.forgotPassContainer}>
                            <TextInput
                                style={styles.field}
                                placeholder='Password'
                                placeholderTextColor={colors.lightGray}
                                placeholderStyle={styles.placeholder}
                                secureTextEntry={showPassword ? true : false}
                            ></TextInput>
                            <TouchableOpacity onPress={() => { securePassword() }}>
                                {showPassword ? <Image source={icons.showPassword} resizeMode='contain' style={styles.icon} /> : <Image source={icons.hidePassword} resizeMode='contain' style={styles.icon} />}

                            </TouchableOpacity>
                        </View>
                        <View style={styles.forgotPassContainer}>
                            <TextInput
                                style={styles.field}
                                placeholder='Confirm Password'
                                placeholderTextColor={colors.lightGray}
                                placeholderStyle={styles.placeholder}
                                secureTextEntry={showPassword1 ? true : false}
                            ></TextInput>
                            <TouchableOpacity onPress={() => { securePassword1() }}>
                                {showPassword1 ? <Image source={icons.showPassword} resizeMode='contain' style={styles.icon} /> : <Image source={icons.hidePassword} resizeMode='contain' style={styles.icon} />}

                            </TouchableOpacity>
                        </View>
                    </>
                );
            }
        }
    };
    const next = () => {
        if (step === 3) {
            return props.navigation.pop();
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setStep(step + 1);
    };
    return (
        <View style={styles.mainView}>
            {/* <ImageBackground
                resizeMode="cover"
                source={sampleImages.world_map}
                style={styles.world_map}> */}
                <Image source={images.logo} style={styles.logo} />
            <CenturyGothic style={styles.heading}>
                Password Recovery
            </CenturyGothic>
            <View style={styles.innerView}>
                <CenturyGothic style={styles.instruction}>
                    {getInstruction()}
                </CenturyGothic>
                {renderSteps()}
                {step === 3 ? (
                    <MainButton
                        text="Update"
                        onPress={next}
                        style={styles.loginButton}
                    />
                ) : (
                    <MainButton
                        text="Continue"
                        // onPress={emailInvalidAlert?.current?.show}
                        // onPress={codeInvalidAlert?.current?.show}
                        onPress={next}
                        style={styles.loginButton}
                    />
                )}

                <View style={styles.signupContainer}>
                    <TextButton
                        onPress={() => props.navigation.pop()}
                        text="Back to Login"
                        style={styles.forgotButton}
                    />
                </View>
                {/* <View style={styles.footerContainer}>
    <TextButton
            onPress={() => props.navigation.pop()}
            text="Back to Login"
            style={styles.forgotButton}/>
        </View> */}
                <AlertPopup
                    text1={'Please enter registered email address!'}
                    heading="Incorrect Email Address"
                    contact
                    reference={emailInvalidAlert}
                // onPress={() => loginAlertRef?.current?.show()}
                />
                <AlertPopup
                    text1={'Please enter correct verification code!'}
                    heading="Incorrect Code"
                    contact
                    reference={codeInvalidAlert}
                // onPress={() => loginAlertRef?.current?.show()}
                />
            </View>
            {/* <HeaderRing style={styles.ring} /> */}
            {/* </ImageBackground> */}
        </View>
    );
};

export default ForgotPassword;
