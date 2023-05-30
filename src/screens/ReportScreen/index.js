import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { icons, images } from '../../assets';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { colors } from '../../utils/theme';
import MainInput from '../../components/InputField/MainInput';
import MainButton from '../../components/Buttons/MainButton';
import Pdf from 'react-native-pdf';

const source = { uri: 'https://www.lalpathlabs.com/SampleReports/Z614.pdf', cache: true };

const ReportScreen = props => {


    return (
        <View style={styles.mainView}>
            <Image source={images.logo} resizeMode='contain' style={styles.logo} />
            <CenturyGothic style={styles.login}>Hey Walking Customer</CenturyGothic>
            {/* <View style={styles.container}> */}
            <Pdf
                trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                    console.log(`Linkkkk : `, filePath);
                }}
                // onPageChanged={(page, numberOfPages) => {
                //     console.log(`Current page: ${page}`);
                // }}
                onError={(error) => {
                    console.log('error', error);
                    // console.log('error', filePath);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: `, source.uri);
                }}
                style={styles.pdf} />
            {/* </View> */}
        </View>
    );
};

export default ReportScreen;
