import React, {useImperativeHandle, useRef} from 'react';
import {Image, View} from 'react-native';
import ModalHOC from '../../Wrappers/Modal';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {icons} from '../../../assets';
import styles from './styles';

const ChatUserOptionModal = React.forwardRef((props, ref) => {
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

  const handleOnViewProfile = () => {
    hideModal();
    if (props?.handleOnViewProfile) {
      props.handleOnViewProfile();
    }
  };

  return (
    <ModalHOC ref={modalRef} style={styles.modalStyle}>
      <View style={styles.container}>
        <View style={styles.headerBarLine} />

        <View style={styles.contentContainer}>
          <Touchable style={styles.rowContainer} onPress={handleOnViewProfile}>
            <Image source={icons.friend} style={styles.rowContainerIcon} />
            <EurostileBold style={styles.rowContainerText}>
              View Profile
            </EurostileBold>
          </Touchable>
          <View style={styles.separatorView} />
          <Touchable style={styles.rowContainer} onPress={hideModal}>
            <Image source={icons.report} style={styles.rowContainerIcon} />
            <EurostileBold style={styles.rowContainerText}>
              Report User
            </EurostileBold>
          </Touchable>
          <View style={styles.separatorView} />
          <Touchable style={styles.rowContainer} onPress={hideModal}>
            <Image source={icons.trash} style={styles.rowContainerIcon} />
            <EurostileBold style={styles.rowContainerText}>
              Clear Chat
            </EurostileBold>
          </Touchable>
        </View>
      </View>
    </ModalHOC>
  );
});

export default ChatUserOptionModal;
