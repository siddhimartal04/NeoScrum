import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
const LoginStack = createStackNavigator();

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