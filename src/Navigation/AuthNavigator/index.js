import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Registration from '../../screens/Registration';
import Location from '../../screens/Location';
import Welcome from '../../screens/Welcome'
import Login from '../../screens/Login'
import LoginScreen from '../../screens/LoginScreen';
import PatientRegister from '../../screens/PatientRegister';
import DoctorRegister from '../../screens/DoctorRegister';
import ForgotPassword from '../../screens/ForgotPasswordScreen';
import ReportLogin from '../../screens/ReportLogin';
import ReportScreen from '../../screens/ReportScreen';
import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
// import TabNavigator from '../TabNavigator'
// import ForgetPassword from '../../screens/ForgetPassword';
// import SubscriptionPackages from '../../screens/SubscriptionPackages';
// import Payment from '../../screens/Payment';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      gestureDirection: 'vertical',
      headerShown: false
    }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Location" component={Location} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="PatientRegister" component={PatientRegister} />
      <AuthStack.Screen name="DoctorRegister" component={DoctorRegister} />
      <AuthStack.Screen name="ReportLogin" component={ReportLogin} />
      <AuthStack.Screen name="ReportScreen" component={ReportScreen} />
      <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />


      {/* <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="ForgotPassword" component={ForgetPassword} />
      <AuthStack.Screen
        name="SubscriptionPackages"
        component={SubscriptionPackages}
      />
      <AuthStack.Screen name="SubscriptionPayment" component={Payment} /> */}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
