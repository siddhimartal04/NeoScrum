import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './HomeScreen';
// import SignUpScreen from './SignUpScreen';
const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('HomeScreen');
    }, 3000);
 
     return (
         <Text style={{fontSize:20}}>Welcome To Neoscrum!</Text>
        );
 };
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator initialRouteName="SplashScreen" headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
        {/* <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
    </RootStack.Navigator>
);

export default RootStackScreen;