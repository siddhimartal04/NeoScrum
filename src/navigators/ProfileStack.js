import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import AddAddressScreen from '../screens/AddAddress';
import MyCart from '../screens/MyCart';
const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator initialRouteName="ProfileScreen" >
        <ProfileStack.Screen name="Profile" component={ProfileScreen}
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
         <ProfileStack.Screen name="AddAddress" component={AddAddressScreen}/>
         <ProfileStack.Screen name="MyCart" component={MyCart}/>
          <ProfileStack.Screen name="SetPasswordScreen" component={SetPasswordScreen}/>
          <ProfileStack.Screen name="EditProfile" component={EditProfileScreen}/>
        {/* <LoginStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
       */}
    </ProfileStack.Navigator>
);

export default ProfileStackScreen;