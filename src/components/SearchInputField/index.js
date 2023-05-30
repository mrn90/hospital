import React from 'react';
import {icons} from '../../assets';
import {colors} from '../../utils/theme';
import styles from './styles';

const SearchInputField = props => {
  return (
    <InputField
      placeholder="Search Here...."
      style={styles.inputField}
      leftIcon={icons.search}
      textInput={styles.textInput}
      placeholderTextColor={colors.palceholderColor2}
      {...props}
    />
  );
};

export default SearchInputField;
