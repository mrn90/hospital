import React, {useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import ModalHOC from '../../Wrappers/Modal';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import InputField from '../../InputField';
import {icons} from '../../../assets';
import styles from './styles';
import TextButton from '../../Buttons/TextButton';

const ReportUserModal = React.forwardRef((props, ref) => {
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

  const handleOnSubmit = () => {
    hideModal();
    if (props?.onSubmit) {
      props.onSubmit();
    }
  };

  return (
    <ModalHOC ref={modalRef} style={styles.modalStyle}>
      <View style={styles.container}>
        <View style={styles.headerBarLine} />

        <View style={styles.contentContainer}>
          <EurostileBold style={styles.modalTitle}>Report</EurostileBold>
          <InputField
            required
            editable={false}
            style={{flexDirection: 'row-reverse'}}
            leftIcon={icons.downArrow}
            placeholder="Select Option"
            title="Reason For Reporting"
          />

          <InputField
            required
            multiline={true}
            placeholder="State Reason"
            title="Other"
            textInput={styles.textInput}
          />
          <View style={styles.footerBtnContainer}>
            <TextButton
              title="Submit"
              style={styles.submitBtn}
              onPress={handleOnSubmit}
            />
            <TextButton
              title="Cancel"
              style={styles.cancelBtn}
              onPress={hideModal}
            />
          </View>
        </View>
      </View>
    </ModalHOC>
  );
});

export default ReportUserModal;
