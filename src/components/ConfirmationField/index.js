import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import EurostileBold from '../Wrappers/Text/EurostileBold';
import styles from './styles';

const CELL_COUNT = 4;

const ConfirmField = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => (
    <View
      key={index}
      style={[styles.cellContainer, isFocused && styles.focusedCellContainer]}
      onLayout={getCellOnLayoutHandler(index)}>
      <EurostileBold
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </EurostileBold>
    </View>
  );

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={renderCell}
    />
  );
};

export default ConfirmField;
