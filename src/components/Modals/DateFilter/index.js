import React, {useImperativeHandle, useRef} from 'react';
import {Image, View} from 'react-native';
import ModalHOC from '../../Wrappers/Modal';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {icons} from '../../../assets';
import styles from './styles';
import InputField from '../../InputField';
import TextButton from '../../Buttons/TextButton';

const DateFilterModal = React.forwardRef((props, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    show: () => showModal(),
    hide: () => hideModal(),
  }));

  const showModal = () => {
    modalRef.current.show();
  };

  const hideModal = () => {
    modalRef.current.hide();
  };

  const handleOnPress = () => {
    hideModal();
  };

  return (
    <ModalHOC ref={modalRef} style={styles.modalStyle}>
      <View style={styles.container}>
        <View style={styles.headerBarLine} />

        <EurostileBold style={styles.titleText}>Filter by Date</EurostileBold>

        <View style={styles.contentContainer}>
          <InputField
            title="From"
            placeholder="mm/dd/yyyy"
            rightIcon={icons.calender}
          />

          <InputField
            title="To"
            placeholder="mm/dd/yyyy"
            rightIcon={icons.calender}
          />

          <View style={styles.btnContainer}>
            <TextButton
              title="APPLY"
              style={styles.btnStyle}
              onPress={hideModal}
            />
          </View>
        </View>
      </View>
    </ModalHOC>
  );
});

export default DateFilterModal;
