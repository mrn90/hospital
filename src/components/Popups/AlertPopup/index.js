import {View, Image} from 'react-native';
import React, {useImperativeHandle, useRef} from 'react';
import PopupHOC from '../PopupHOC';
import styles from './styles';
import IconButton from '../../Buttons/IconButton';
import {icons} from '../../../assets';
import MainButton from '../../Buttons/MainButton';

import { vh, vw} from '../../../utils/units';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
const AlertPopup = props => {
  console.log('alert props', props);
  const modalRef = useRef();
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    modalRef?.current.show();
  };

  const hide = () => {
    modalRef?.current.hide();

    props.onPress();
  };

  return (
    <PopupHOC style={styles.container} reference={modalRef}>
      {/* <View style={styles.tick}></View> */}
      <View
        style={{
          backgroundColor: '#D60000',
          height: 65,
          width: 65,
          borderRadius: 100,
          marginTop: -7 * vh,
          justifyContent: 'center',
        }}>
        <Image source={icons.close} style={styles.close} />
      </View>
      <IconButton
        onPress={hide}
        icon={icons.close}
        style={styles.IconButton}
        iconStyle={styles.iconStyle}
      />

      <View style={styles.contentContainer}>
        <Image source={props.icon} style={styles.icon} />
        <CenturyGothic numberOfLines={4} style={styles.title}>
          {props.heading}
        </CenturyGothic>
        <CenturyGothic numberOfLines={4} style={styles.subText}>
          {props.text1}
        </CenturyGothic>
        <CenturyGothic numberOfLines={2} style={styles.subText}>
          {props.text2}
        </CenturyGothic>
        <CenturyGothic numberOfLines={1} style={styles.title}>
          {props.text3}
        </CenturyGothic>
        {props?.heading === 'Login Rejected' ||
        'Incorrect Email Address' ||
        'Incorrect Code' ? null : (
          <MainButton
            onPress={hide}
            text={'Contact Here'}
            style={styles.button}
          />
        )}
      </View>
    </PopupHOC>
  );
};

export default AlertPopup;
