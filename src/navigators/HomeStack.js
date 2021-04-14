import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import MyCart from '../screens/MyCart';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductDetails from '../screens/ProductDetails';
import { View ,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import OrderSummary from '../screens/OrderSummary';
import AddressList from '../screens/AddressList';
import AddAddress from '../screens/AddAddress';
const HomeStack = createStackNavigator();


/**
 * @author Siddhi Martal
 * @param {object} props  navigation object used to navigate between different screen
 * @description this function contains navigations screens of home stack.
 * @returns jsx
 */
function HomeStackScreen (props)  {
    const  navigation  = useNavigation();
    return(
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
            ),
            headerRight: () => (
                <View>
                <Icon
                name={'shopping-cart'}
                color='black'
                solid
                size={25}
                style={{
                marginRight: 30,
                }}
                onPress={() => navigation.navigate('My Cart')}
                />
                <View style={{position:'absolute',top:-7,right:7,backgroundColor:'red',paddingLeft:5,paddingRight:5,borderRadius:50}}>
                <Text style={{color:'white'}}>{props.cartItems.length}</Text>
            </View>
            </View>
                )
            }}/>

          <HomeStack.Screen name="ProductListingScreen" component={ProductListingScreen}
          options={{
           
            headerRight: () => (
                <View>
                <Icon
                name={'shopping-cart'}
                color='black'
                solid
                size={25}
                style={{
                marginRight: 30,
                }}
                onPress={() => navigation.navigate('My Cart')}
                />
                <View style={{position:'absolute',top:-7,right:7,backgroundColor:'red',paddingLeft:5,paddingRight:5,borderRadius:50}}>
                <Text style={{color:'white'}}>{props.cartItems.length}</Text>
            </View>
            </View>
                )
            }}/>
          <HomeStack.Screen name="ProductDetails" component={ProductDetails}
          options={{
           
            headerRight: () => (
                <View>
                <Icon
                name={'shopping-cart'}
                color='black'
                solid
                size={25}
                style={{
                marginRight: 30,
                }}
                onPress={() => navigation.navigate('My Cart')}
                />
                <View style={{position:'absolute',top:-7,right:7,backgroundColor:'red',paddingLeft:5,paddingRight:5,borderRadius:50}}>
                <Text style={{color:'white'}}>{props.cartItems.length}</Text>
            </View>
            </View>
                )
            }}/>
          <HomeStack.Screen name="My Cart" component={MyCart}/> 
          <HomeStack.Screen name="Order Summary" component={OrderSummary}/> 
          <HomeStack.Screen name="Address List" component={AddressList}/> 
          <HomeStack.Screen name="AddAddress" component={AddAddress}/> 
    </HomeStack.Navigator>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItems : state.UserCart.cartItems
    }
}

export default connect(mapStateToProps,null)(HomeStackScreen)

