import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'
import { useNavigation } from '@react-navigation/native'


function OrderId() {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
             <TouchableRipple onPress={()=>{}}>
                <View style={styles.addressCard}>
                    <Text style={styles.name}>Product Name</Text>
                    <Text style={styles.bodyText}>Product Material: Wood</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.bodyText}>Quantity:1</Text>
                        <Text style={{textAlign:'right',color:'black'}}> ₹1400</Text>
                    </View>
                </View>
            </TouchableRipple>

        </View>
       
       
    )
}

const styles = StyleSheet.create({
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

})

export default OrderId
