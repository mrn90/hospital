import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import { fonts } from '../../../assets';

import { colors } from '../../../utils/theme';
import { vh } from '../../../utils/units';
const InputWrapper = props => {
  return (
    <TextInput
      selectionColor={colors.darkBackground}
      {...props}
      style={[styles.input, props.style]}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.CenturyGothic.CenturyGothic,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    fontSize: 1.7 * vh,
    color: '#000',
  },
});
export default InputWrapper;
