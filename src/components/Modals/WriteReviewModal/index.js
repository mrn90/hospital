import React, {useImperativeHandle, useRef} from 'react';
import {View} from 'react-native';
import ModalHOC from '../../Wrappers/Modal';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import {AirbnbRating} from 'react-native-ratings';
import TextButton from '../../Buttons/TextButton';
import InputField from '../../InputField';
import {vw} from '../../../utils/units';
import styles from './styles';
import Checkbox from '../../Checkbox';

const WriteReviewModal = React.forwardRef((props, ref) => {
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
          <EurostileBold style={styles.modalTitle}>
            {props?.title}
          </EurostileBold>
          <AirbnbRating showRating={false} size={vw * 5} />

          <InputField
            required
            multiline={true}
            placeholder="Enter Review Here"
            title="Review*"
            textInput={styles.textInput}
          />
          {!props?.isEdit && (
            <View style={styles.checkboxContainer}>
              <Checkbox title="Review Anonymously" />
            </View>
          )}

          <View style={styles.footerBtnContainer}>
            <TextButton
              title="SUBMIT"
              style={styles.submitBtn}
              onPress={handleOnSubmit}
            />
          </View>
        </View>
      </View>
    </ModalHOC>
  );
});

export default WriteReviewModal;
