import React from 'react';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import TouchableHOC from '../../Wrappers/Touchable';
import styles from './styles';

const TextComponent = EurostileBold;

export default LinkButton = ({textColor, ...props}) => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableHOC
      {...props}
      style={[styles.container, props.style]}
      onPress={handleOnPress}
      rippleOpacity={0}>
      <TextComponent style={[styles.text, props?.style]}>
        {props?.title}
      </TextComponent>
    </TouchableHOC>
  );
};
