import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AnimatedSplash from 'react-native-animated-splash';
import AuthNavigator from '../AuthNavigator';
import DrawerNavigator from '../DrawerNavigator';
// import Message from '../../screens/Message';
// import {options} from '../NavigationHeader';

const RootStack = createNativeStackNavigator();

const MainNavigator = () => {
  // useEffect(() => {
  //   AnimatedSplash.hide();
  // }, []);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
      <RootStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
      />
      {/* <RootStack.Screen name="Message" component={Message} options={options} /> */}
    </RootStack.Navigator>
  );
};

export default MainNavigator;
