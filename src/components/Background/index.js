import React from 'react';
import {ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {images} from '../../assets';
import ExtendedHeader from '../ExtendedHeader';
import styles from './styles';

const BackgroundWrapper = props => {
  return (
    <ImageBackground
      source={props.background ? props?.background : images.background}
      style={[styles.container, props?.style]}>
      {props?.hideHeader ? null : <ExtendedHeader />}

      {props.scroll ? (
        <KeyboardAwareScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          {props.children}
        </KeyboardAwareScrollView>
      ) : (
        props.children
      )}
    </ImageBackground>
  );
};

export default BackgroundWrapper;
