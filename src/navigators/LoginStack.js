import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
const LoginStack = createStackNavigator();
/**
 * @author Siddhi Martal
 * @param {object} props contains navigation object is used to navigate between different available screen.
 * @description This function is used to create stack and different screens so that we can place that one over the other which is use while navigation.
 * @returns jsx which contains Stack Navigation Of login Screen
 */
const LoginStackScreen = ({navigation}) => (
    <LoginStack.Navigator initialRouteName="LoginScreen" >
        <LoginStack.Screen name="LoginScreen" component={LoginScreen}
        options={{
            headerLeft: () => (
            <Icon
            name={'bars'}
            color='black'
            solid
            size={20}
            style={{
            marginLeft: 20,
            }}
            onPress={() => navigation.openDrawer()}
            />
            )
            }}/>
         <LoginStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
        <LoginStack.Screen name="SetPasswordScreen" component={SetPasswordScreen}/>
        <LoginStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
      
    </LoginStack.Navigator>
);

export default LoginStackScreen;