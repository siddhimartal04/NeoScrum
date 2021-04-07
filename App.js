import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  DrawerContent  from './src/screens/DrawerContent';
import LoginStack from './src/navigators/LoginStack';
import RegistrationStack from './src/navigators/RegistrationStack';
import HomeStack from './src/navigators/HomeStack';
import ProfileStack from './src/navigators/ProfileStack';
import AddAddressScreen from './src/screens/AddAddress';
const Drawer = createDrawerNavigator();
import { Provider } from 'react-redux'
import {Root} from 'native-base';

import { PersistGate } from 'redux-persist/es/integration/react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/redux/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthUser']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
const persistor = persistStore(store)




function App(props) {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={null}>
        <Root>
          <NavigationContainer>
            <Drawer.Navigator 
            initialRouteName='Home'
            drawerContent={props => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="Home" component={HomeStack} />
              <Drawer.Screen name='Login' component={LoginStack} />
              <Drawer.Screen name="Registration" component={RegistrationStack} />
              <Drawer.Screen name="AddAddress" component={AddAddressScreen} />   
              <Drawer.Screen name="My Account" component={ProfileStack} />     
            </Drawer.Navigator>
          </NavigationContainer>
        </Root>
      </PersistGate>
    </Provider>
  
  );
}

export default App;
