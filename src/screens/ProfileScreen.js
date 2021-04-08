import React from 'react';
import {View, SafeAreaView, StyleSheet,Image,Text} from 'react-native';
import {
  
  Title,
  Caption,

  TouchableRipple,
} from 'react-native-paper';


import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image
                                source={require('../assets/profilePic.jpeg')}
                                style={{width:90,height:90}}
                                
                            />
          <View style={{marginLeft: 20}}>
            <Text style={[styles.title, {
              marginTop:25,
              marginBottom: 5,
            }]}>Siddhi Martal</Text>
            
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-pin" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 28}}>Maharashtra, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 25}}>91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="envelope" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>siddhi@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>₹1400</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>2</Title>
            <Caption>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple  onPress={() => {
                            navigation.navigate('ResetPasswordScreen');
                          }}>
          <View style={styles.menuItem}>
            <Icon name="lock" color="#48CCCD" size={25}/>
            <Text style={{ color: '#777777',
    marginLeft: 28,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,}}>Reset Password</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple  onPress={() => {
                            navigation.navigate('AddressList');
                          }}>
          <View style={styles.menuItem}>
            <Icon name="map-marker" color="#48CCCD" size={25}/>
            <Text style={{ color: '#777777',
    marginLeft: 30,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,}}>Shipping Address</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple  onPress={() => {
                            navigation.navigate('Order List');
                          }}>
          <View style={styles.menuItem}>
            <Icon name="shopping-bag" color="#48CCCD" size={20}/>
            <Text style={{ color: '#777777',
    marginLeft: 27,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,}}>My Orders</Text>
          </View>
        </TouchableRipple>
        
        <TouchableRipple onPress={() => {
                            navigation.navigate('MyCart');
                          }}>
          <View style={styles.menuItem}>
            <Icon name="shopping-cart" color="#48CCCD" size={23}/>
            <Text style={styles.menuItemText}>My Cart</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
                            navigation.navigate('EditProfile');
                          }}>
          <View style={styles.menuItem}>
            <Icon name="pencil" color="#48CCCD" size={25}/>
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 25,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
