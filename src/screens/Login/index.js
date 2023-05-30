import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Animated, Easing, ImageBackground } from 'react-native';
import styles from './styles';
import { colors } from '../../utils/theme';
import { vh } from '../../utils/units';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import { icons, images } from '../../assets';

import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Footer from '../../components/Footer';



const Login = props => {

  const [gestureName, setGestureName] = useState('none')
  const jumpValue = new Animated.Value(0);
  useEffect(() => {
    ActiveAnim()
  });

  const ActiveAnim = () => {
    Animated.spring(jumpValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: false
    }).start()
  }

  const onSwipeUp = () => {
    console.log('we here')
    props.navigation.navigate('LoginScreen')
  }

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP } = swipeDirections;
    setGestureName({ gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        props.navigation.navigate('LoginScreen');
        break;
      // case SWIPE_DOWN:
      //   this.setState({backgroundColor: 'green'});
      //   break;
      // case SWIPE_LEFT:
      //   this.setState({backgroundColor: 'blue'});
      //   break;
      // case SWIPE_RIGHT:
      //   this.setState({backgroundColor: 'yellow'});
      //   break;
    }
  }


  const config = {
    velocityThreshold: 0.2, // Number 0.3 Velocity that has to be breached in order for swipe to be triggered
    directionalOffsetThreshold: 80 // if the velocityThreshold is greater than 0.3 means that the user needs to swipe harder (with greater velocity)
  };

  return (

    <View style={styles.mainView}>
      <View style={styles.container}>

        <GestureRecognizer
          onSwipe={(direction, state) => onSwipe(direction, state)}
          config={config}
          style={styles.gestureContainer}
        >
          <View style={styles.textContainer}>

            <CenturyGothic style={styles.text}>Swipe up to Log In</CenturyGothic>

            <Animated.View style={{ transform: [{ scale: jumpValue }], }}>
              <View style={styles.arrowContainer}>
                <Image source={icons.arrow} style={styles.arrow} />
              </View>
            </Animated.View>



          </View>
        </GestureRecognizer>
      </View>
      {/* footer component */}
      <Footer />

    </View>
  );
};

export default Login;
