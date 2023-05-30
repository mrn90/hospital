import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import EurostileBold from '../Wrappers/Text/EurostileBold';
import TextInputHOC from '../Wrappers/Input';
import { vh, vw } from '../../utils/units';
import { icons } from '../../assets';
import styles from './styles';

export default InputField = props => {
  console.log('props InputField', props)
  const [isShow, setIsShow] = useState(false);

  const handlePassword = () => {
    setIsShow(!isShow);
  };

  const getTextInputWidth = () => {
    let width = vw * 80;

    if (props?.style?.width) {
      width = props?.style?.width - vw * 6;
    }

    if (props?.leftIcon) {
      width -= vw * 8;
    }

    if (props?.rightIcon) {
      width -= vw * 8;
    }

    if (props.secureTextEntry) {
      // width -= vw * 10;
    }

    return width;
  };

  return (
    <View>
      {props?.title && (
        <EurostileBold style={[styles.titleText, props.titleText]}>
          {props?.title}
          {/* {props?.required && (
            <EurostileBold style={styles.requiredText}>{props?.placeholder}</EurostileBold>
          )} */}
        </EurostileBold>
      )}
      <View style={[styles.container, props.style]}>
        {props?.leftIcon && (
          <View style={styles.inputContainer}>
            <View style={styles.leftIconContainer}>
              <Image
                source={props?.leftIcon}
                style={[styles.leftIcon, props?.leftIconStyle]}
                resizeMode="contain"
              />
            </View>
            <View>
              <EurostileBold style={styles.requiredText}>{props?.placeholder}</EurostileBold>
              <TextInputHOC
                {...props}
                textInputStyle={[
                  styles.textInput,
                  { width: getTextInputWidth() },
                  props?.textInput,
                ]}
                secureTextEntry={props?.secureTextEntry && !isShow}
              />
        
              {/* {props?.secureTextEntry && (
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={handlePassword}>
                  <Image
                    source={isShow ? icons.eyeClose : icons.email}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              )} */}
            </View>


          </View>

        )}





      </View>
    </View>
  );
};
