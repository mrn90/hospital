import React, {useState} from 'react';
import {icons} from '../../assets';
import {View, Image} from 'react-native';
import EurostileBold from '../Wrappers/Text/EurostileBold';
import Touchable from '../Wrappers/Touchable';
import {colors} from '../../utils/theme';
import styles from './styles';

const Checkbox = props => {
  const [checked, setChecked] = useState(false);

  const handleOnPress = () => {
    setChecked(!checked);
    if (props.onPress) props.onPress();
  };
  return (
    <Touchable style={styles.container} onPress={handleOnPress}>
      <View
        style={[
          styles.checkbox,
          {
            backgroundColor: checked ? colors.purple : colors.palceholderColor,
          },
        ]}>
        {checked && <Image source={icons.tick} style={styles.iconStyle} />}
      </View>
      {props.title && (
        <EurostileBold
          style={[
            styles.titleStyle,
            {color: checked ? colors.purple : colors.palceholderColor},
            props.titleStyle,
          ]}>
          {props.title}
        </EurostileBold>
      )}
    </Touchable>
  );
};

export default Checkbox;
