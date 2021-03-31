import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator initialRouteName="HomeScreen" >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}
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
          <HomeStack.Screen name="ProductListingScreen" component={ProductListingScreen}/>
       {/* <LoginStack.Screen name="SetPasswordScreen" component={SetPasswordScreen}/>
        <LoginStack.Screen name="RegistrationScreen" component={RegistrationScreen}/> */}
      
    </HomeStack.Navigator>
);

export default HomeStackScreen;