import React, { useEffect } from 'react';
import Navigation from './src/Navigation';
import { StatusBar, StyleSheet, View } from 'react-native';
import AnimatedSplash from 'react-native-animated-splash';
const App = props => {
  useEffect(() => {
    setTimeout(() =>  AnimatedSplash.hide() , 2500);
  
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        // backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;
