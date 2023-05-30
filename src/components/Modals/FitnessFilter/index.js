import React, {useImperativeHandle, useRef} from 'react';
import {Image, View} from 'react-native';
import ModalHOC from '../../Wrappers/Modal';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import Touchable from '../../Wrappers/Touchable';
import {icons} from '../../../assets';
import styles from './styles';

const FitnessFilterModal = React.forwardRef((props, ref) => {
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
        <EurostileBold style={styles.titleText}>Filter by</EurostileBold>
        <View style={styles.contentContainer}>
          <Touchable style={styles.selectTextContainer} onPress={handleOnPress}>
            <EurostileBold style={styles.selectionText}>Select</EurostileBold>
            <Image source={icons.downArrow} style={styles.arrowDownIcons} />
          </Touchable>
          <View style={styles.barLine} />
          <Touchable
            style={styles.selectionTextContainer}
            onPress={handleOnPress}>
            <EurostileBold style={styles.selectionText}>
              Cancelled
            </EurostileBold>
          </Touchable>
          <Touchable
            style={styles.selectionTextContainer}
            onPress={handleOnPress}>
            <EurostileBold style={styles.selectionText}>
              Rescheduled
            </EurostileBold>
          </Touchable>
          <Touchable
            style={styles.selectionTextContainer}
            onPress={handleOnPress}>
            <EurostileBold style={styles.selectionText}>Confirm</EurostileBold>
          </Touchable>
        </View>
      </View>
    </ModalHOC>
  );
});

export default FitnessFilterModal;
