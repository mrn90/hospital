import React, {useImperativeHandle, useRef} from 'react';
import {Image, View} from 'react-native';
import ModalHOC from '../../Wrappers/Modal';
import TextButton from '../../Buttons/TextButton';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {icons} from '../../../assets';
import styles from './styles';

const AlertModal = React.forwardRef((props, ref) => {
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

  const handleOnSuccess = () => {
    hideModal();
    if (props?.handleOnSuccess) {
      props.handleOnSuccess();
    }
  };

  return (
    <ModalHOC ref={modalRef} style={styles.modalStyle}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Touchable onPress={hideModal}>
            <Image source={icons.close} style={styles.crossBtn} />
          </Touchable>
        </View>

        <Image
          source={props?.icon ? props.icon : icons.speech}
          style={styles.modalIcon}
          resizeMode="contain"
        />
        <View style={styles.contentContainer}>
          <EurostileBold style={styles.titleText}>{props?.title}</EurostileBold>

          <EurostileBold style={styles.messageText}>
            {props?.message}
          </EurostileBold>

          <View style={styles.confirmBtnContainer}>
            <TextButton
              title={
                props?.successButtonTitle ? props.successButtonTitle : 'OK'
              }
              backgroundColor={true}
              style={styles.confirmBtn}
              onPress={handleOnSuccess}
            />
          </View>
        </View>
      </View>
    </ModalHOC>
  );
});

export default AlertModal;
