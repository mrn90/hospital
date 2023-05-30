import React from 'react';
import {Image} from 'react-native';
import RippleHOC from '../../Wrappers/Ripple';
import styles from './styles';

export default IconButton = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };

  return (
    <RippleHOC
      {...props}
      style={[styles.container, props?.style]}
      onPress={handleOnPress}>
      <Image
        source={props?.icon}
        style={[styles.iconStyle, props.iconStyle]}
        resizeMode="contain"
      />
    </RippleHOC>
  );
};
