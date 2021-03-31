import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './screens/DrawerContent';
import LoginStack from './navigators/LoginStack';
import RegistrationStack from './navigators/RegistrationStack';
import HomeStack from './navigators/HomeStack';
import AddAddressScreen from './screens/AddAddress';
const Drawer = createDrawerNavigator();


function App() {
  return (
    
    <NavigationContainer>


    <Drawer.Navigator >

    <Drawer.Screen name="Home" component={HomeStack} />

      <Drawer.Screen name="Login" component={LoginStack} />
      <Drawer.Screen name="Registration" component={RegistrationStack} />
      <Drawer.Screen name="AddAddress" component={AddAddressScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  
  );
}

export default App;
