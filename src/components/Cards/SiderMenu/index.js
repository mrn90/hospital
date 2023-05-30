import React from 'react';
import {Image} from 'react-native';
import Ripple from '../../Wrappers/Ripple';
import {useNavigation} from '@react-navigation/native';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';

const SiderMenuItem = ({item, index, size, ...props}) => {
  const navigation = useNavigation();

  const handleOnNavigate = () => {
    if (item.route === 'Logout') {
      if (props.handleOnLogout) {
        props.handleOnLogout();
      }
    } else {
      navigation.navigate(item.route);
    }
  };

  return (
    <Ripple
      onPress={handleOnNavigate}
      style={[
        styles.container,
        index === 0 && {borderTopWidth: 0},
        index === size && {borderBottomWidth: 0},
      ]}>
      <Image source={item.icon} style={styles.iconStyle} />
      <EurostileBold style={styles.nameText}>{item?.name}</EurostileBold>
    </Ripple>
  );
};

export default SiderMenuItem;
