import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from "./screens/MainTabScreen";
import { DrawerContent } from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';
const Drawer = createDrawerNavigator();


function App() {
  return (
    
    <NavigationContainer>

<RootStackScreen/>
    {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>

      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Details" component={DetailsStackScreen} />
    </Drawer.Navigator> */}
  </NavigationContainer>
  
  );
}

export default App;
