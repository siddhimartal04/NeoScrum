import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
/**
 *
 * @param {object} props contains user information and list of address added by user.
 * @description this screen will show all address of user from which user will select address that he want product to be delivered.
 * @returns jsx which contains list of address.
 */
function AddressList() {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <View style={{flex: 1,}}>
              
                <View style={styles.body}>
                    <TouchableRipple onPress={()=>{}}>
                        <View style={styles.addressCard}>
                            <Text style={styles.name}>Name</Text>
                            <Text style={styles.bodyText}>Address</Text>
                            <Text style={styles.bodyText}>Landmark</Text>
                            <Text style={styles.bodyText}>City, State</Text>
                            
                            <Text style={styles.bodyText}>ZipCode</Text>
                            <Text style={styles.bodyText}>Country</Text>
                              <Icon 
                                name='delete'
                                size={22}
                                color={'#1a1a1a'}
                                onPress={()=>{}}
                                style={styles.delete}
                            />
                        </View>
                    </TouchableRipple>
                   
                </View>
            </View>
                <View>
                    <Icon 
                        name={'plus'}
                        size={36}
                        color={'white'}
                        style={styles.addAddress}
                        onPress={()=> navigation.navigate('AddAddress')}
                    />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        
        borderBottomColor: '#3d3d3d',
        borderBottomWidth: 1,
    },
    headerText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#4a4a4a',
        letterSpacing: 0.15
    },

    addressCard: {
       
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: 14.5,
        color: '#3e3e3e'
    },
    botbtn: {
        fontSize: 14,
        color: '#2d2d2d',
        fontWeight: 'bold',
        marginTop: 8,
    },
    delete: {
        position: 'absolute',
        bottom: 12,
        right: 15
    },
    addAddress: {
        position: 'absolute',
        bottom: 18,
        right: 18,
        zIndex: 2000,
        padding: 8,
       backgroundColor:'black',
        borderRadius: 70,
        elevation: 6,
    }
})

export default AddressList
