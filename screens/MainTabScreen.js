import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen=()=>(
  <Tab.Navigator>
  <Tab.Screen name="Home" component={HomeStackScreen} />
  <Tab.Screen name="Details" component={DetailsStackScreen} />
</Tab.Navigator>
);
const HomeStackScreen=({navigation}) =>(
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
    headerStyle:{ backgroundColor:"skyblue"},headerTintColor:'#fff',headerTitleStyle:{fontWeight:'bold'}
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      headerLeft:()=>(
       <Icon name="bars" size={30} color="white" onPress={()=>{
         navigation.openDrawer()
       }} />
      )
    }} />
       </HomeStack.Navigator>
);
const DetailsStackScreen=({navigation}) =>(
<DetailsStack.Navigator initialRouteName="Home" screenOptions={{
headerStyle:{ backgroundColor:"skyblue"},headerTintColor:'#fff',headerTitleStyle:{fontWeight:'bold'}
}}>
<DetailsStack.Screen name="Details" component={DetailsScreen}  options={{
      headerLeft:()=>(
       <Icon name="bars" size={30} color="white" onPress={()=>{
         navigation.openDrawer()
       }} />
      )
    }} /> 
 </DetailsStack.Navigator>
);
export default MainTabScreen;
