import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator initialRouteName="ProfileScreen" >
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}
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
         <ProfileStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
        <ProfileStack.Screen name="SetPasswordScreen" component={SetPasswordScreen}/>
        {/* <LoginStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
       */}
    </ProfileStack.Navigator>
);

export default ProfileStackScreen;