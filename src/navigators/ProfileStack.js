import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import AddAddressScreen from '../screens/AddAddress';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddressList from '../screens/AddressList';
import MyCart from '../screens/MyCart';
import OrderList from '../screens/OrderList';
import OrderId from '../screens/OrderId';
const ProfileStack = createStackNavigator();
/**
 * @author Siddhi Martal
 * @param {object} props contains navigation object is used to navigate between different available screen.
 * @description This function is used to create stack and different screens so that we can place that one over the other which is use while navigation.
 * @returns jsx which contains Stack Navigation of Home screen.
 */
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
         <ProfileStack.Screen name="AddressList" component={AddressList}/>
         <ProfileStack.Screen name="AddAddress" component={AddAddressScreen}/>
         <ProfileStack.Screen name="Order List" component={OrderList}/>
         <ProfileStack.Screen name="MyCart" component={MyCart}/>
          <ProfileStack.Screen name="SetPasswordScreen" component={SetPasswordScreen}/>
          <ProfileStack.Screen name="EditProfile" component={EditProfileScreen}/>
          <ProfileStack.Screen name="Order Id" component={OrderId}/>
        {/* <LoginStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
       */}
    </ProfileStack.Navigator>
);

export default ProfileStackScreen;