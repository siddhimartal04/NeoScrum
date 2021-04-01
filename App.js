import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import  DrawerContent  from './screens/DrawerContent';
import LoginStack from './navigators/LoginStack';
import RegistrationStack from './navigators/RegistrationStack';
import HomeStack from './navigators/HomeStack';
import AddAddressScreen from './screens/AddAddress';
const Drawer = createDrawerNavigator();
import { Provider } from 'react-redux'
import { store } from './redux/store'
function App(props) {
  return (
    <Provider store={store} >
    <NavigationContainer>


<Drawer.Navigator 
            initialRouteName='Home'
            drawerContent={props => <DrawerContent {...props} />}
        >

    <Drawer.Screen name="Home" component={HomeStack} />
    {
            !props.isLogin ?
              (<Drawer.Screen name='Login' component={LoginStack} />)
              : (null)
          }
     
      <Drawer.Screen name="Registration" component={RegistrationStack} />
      <Drawer.Screen name="AddAddress" component={AddAddressScreen} />

    </Drawer.Navigator>
  </NavigationContainer>
  </Provider>
  
  );
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.AuthUser.isLogin
  }
}
export default App;
