import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import IconButton from '../../Buttons/IconButton';
import InputWrapper from '../InputWrapper';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';
import { icons, fonts } from '../../../assets';
const MainInput = props => {
  const [visible, setVisible] = useState(false);
  const getSecureTextEntry = () => {
    if (props.secure === true) {
      if (visible === true) {
        return false;
      }
      return true;
    }
    return false;
  };
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <View style={[styles.container, props.style]}>
      {props.label && (
        <CenturyGothic style={[styles.label, props.labelStyle]}>
          {props.label}
          {props.required && '*'}
        </CenturyGothic>
      )}
      <View style={[styles.fieldContainer, props.containerStyle]}>
        {props.icon && (
          <Image source={props.icon} style={[styles.icon, props.iconStyle]} />
        )}
        <InputWrapper
          {...props}
          secureTextEntry={getSecureTextEntry()}
          style={[
            styles.field,
            props.fieldStyle,
            props.secure && styles.secure,
            props.rightIcon && styles.secure,
          ]}
        />
        {props.secure && (
          <IconButton
            onPress={toggleVisible}
            icon={visible ? icons.hidePassword : icons.showPassword}
          />
        )}
        {props.rightIcon && (
          <IconButton
            icon={props.rightIcon}
            iconStyle={props.rightIconStyle}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    // width: 90 * vh,
    // backgroundColor: 'red',
    alignSelf: 'center',
    // alignItems: 'center'
    // flex: 1
  },
  label: {
    // width: '90%'
    // fontSize: 3 * vh,
    // color: '#000',
    // marginBottom: 1 * vh,
    // backgroundColor: 'red'
    fontFamily: fonts.CenturyGothic.CenturyGothic,
    fontSize: 4 * vh
  },
  fieldContainer: {
    // alignSelf: 'center',
    borderWidth: 0.1 * vh,
    backgroundColor: '#EAECF0',
    borderColor: colors.lightGray,
    borderRadius: 4 * vh,
    paddingVertical: 0.7 * vh,
    // width: '90%',
    paddingLeft: 2 * vh,
    marginTop: 2 * vh,
    shadowOpacity: 0.4,
    shadowRadius: 0.4 * vh,
    flexDirection: 'row',
    // marginLeft: 2 * vh
    // backgroundColor: 'gray'
  },
  icon: {
    height: 1.5 * vw,
    width: 1.5 * vw,
    resizeMode: 'contain',
    // marginRight: 3 * vw,
  },
  field: {
    fontSize: 1.6 * vh,
    color: colors.black,
    fontFamily: fonts.CenturyGothic.CenturyGothic
    // fontFamily: fonts.heebo.light,
    // width: 70 * vw,
    // flex: 1,
  },
  secure: { marginRight: 5 * vw, width: 67 * vw },
});
export default MainInput;
