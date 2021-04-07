import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import MyCart from '../screens/MyCart';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductDetails from '../screens/ProductDetails';
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
          <HomeStack.Screen name="ProductDetails" component={ProductDetails}/> 
          <HomeStack.Screen name="MyCart" component={MyCart}/> 

      
    </HomeStack.Navigator>
);

export default HomeStackScreen;