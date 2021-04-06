import React ,{useEffect}from 'react';
import { View, StyleSheet,Image ,Text,TouchableWithoutFeedback} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'

import { handleLogout } from '../redux/userAction'

 function DrawerContent(props) {

    

   // const { signOut } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                            { !props.isLogin ? 
                        (<Text style={styles.title}>NeoStore</Text>) 
                        : (
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image
                                source={require('../assets/profilePic.jpeg')}
                                style={{width:90,height:90}}
                                
                            />
                                <Text style={{fontSize:25,textAlign:'center'}}>
                                {props.email}
                            </Text>
                        </View>)
                    }               
                                
                            </View>
                        </View>


                    </View>

                    {/* <Drawer.Section style={styles.drawerSection}> */}
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        {
                        !props.isLogin ? (
                                                <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="user" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Login"
                            onPress={() => {props.navigation.navigate('Login')}}
                        />):(null)}
                                                <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="user" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Registration"
                            onPress={() => {props.navigation.navigate('Registration')}}
                        />
                                            {
                        props.isLogin ? ( 
                            <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="user" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="My Cart"
                            onPress={() => {props.navigation.navigate('MyCart')}}
                        />
                            
                           
                        ) : (
                            null
                         )
                    }
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="map" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Add Address"
                            onPress={() => {props.navigation.navigate('AddAddress')}}
                        
                               />
                      <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="shopping-bag" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="All Products"
                            onPress={() => props.navigation.navigate('ProductListingScreen',{item:{category:'All Products'}})} />
                        {
                        props.isLogin ? ( 
                            <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="sign-out" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sign out"
                            onPress={() => (props.handleLogout())} />
                      
                          
                        ) : (
                            null
                         )
                    }

                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bed" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bed"
                            onPress={() => props.navigation.navigate('ProductListingScreen',{item:{category:'bed'}})} />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <FontAwesome5
                              name="couch" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sofa"
                            onPress={() => props.navigation.navigate('ProductListingScreen',{item:{category:'sofa'}})} />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="table" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Table"
                            onPress={() => props.navigation.navigate('ProductListingScreen',{item:{category:'table'}})} />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5
                                name="chair" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Chair"
                            onPress={() => props.navigation.navigate('ProductListingScreen',{item:{category:'chair'}})} />
                                                            
 */}

                    {/* </Drawer.Section> */}

                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 36,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });




const mapStateToProps = (state) => {
    return {
        isLogin: state.AuthUser.isLogin,
        email: state.AuthUser.email,
        firstName: state.AuthUser.firstName,
        lastName: state.AuthUser.lastName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout : () => dispatch(handleLogout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DrawerContent)