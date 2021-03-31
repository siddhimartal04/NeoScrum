import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from '../screens/RegistrationScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
const RegistrationStack = createStackNavigator();

const RegistrationStackScreen = ({navigation}) => (
    <RegistrationStack.Navigator initialRouteName="RegistrationScreen" >
        <RegistrationStack.Screen name="RegistrationScreen" component={RegistrationScreen}
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
         
    </RegistrationStack.Navigator>
);

export default RegistrationStackScreen;