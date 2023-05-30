import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';
const TextButton = props => {
  console.log('props TEXTBUTTON', props);
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
    
        <EurostileBold style={[styles.text, props.textStyle]}>
          {props.text}
        </EurostileBold>
      
    </TouchableOpacity>
  );
};
export default TextButton;
