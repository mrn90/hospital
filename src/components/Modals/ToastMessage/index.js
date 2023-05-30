import React, {useImperativeHandle, useRef} from 'react';
import {Image, View} from 'react-native';
import ModalHOC from '../../Wrappers/Modal';
import TextButton from '../../Buttons/TextButton';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {icons} from '../../../assets';
import styles from './styles';

const ToastMessage = React.forwardRef((props, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    show: () => showModal(),
    hide: () => hideModal(),
  }));

  const showModal = () => {
    modalRef.current.show();

    setTimeout(() => {
      hideModal();
    }, 2000);
  };

  const hideModal = () => {
    modalRef.current.hide();
    if (props.onHide) {
      props.onHide();
    }
  };

  return (
    <ModalHOC ref={modalRef} style={styles.modalStyle} isBlur={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Touchable onPress={hideModal}>
            <Image source={icons.close} style={styles.crossBtn} />
          </Touchable>
        </View>

        <Image
          source={props?.icon ? props.icon : icons.notification}
          style={styles.modalIcon}
          resizeMode="contain"
        />
        <EurostileBold style={styles.messageText}>
          {props?.message}
        </EurostileBold>
      </View>
    </ModalHOC>
  );
});

export default ToastMessage;
