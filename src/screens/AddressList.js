// import React from 'react'
// import {
//     View,
//     Text,
//     StyleSheet,
// } from 'react-native'
// import { TouchableRipple } from 'react-native-paper'
// import { globalStyles } from '../styles/globalStyles'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { useNavigation } from '@react-navigation/native'

// import { handleSaveAddress } from '../redux/userAction'
// import { connect } from 'react-redux'

// /**
//  *
//  * @param {object} props contains user information and list of address added by user.
//  * @description this screen will show all address of user from which user will select address that he want product to be delivered.
//  * @returns jsx which contains list of address.
//  */
// function AddressList(props) {

//     const navigation = useNavigation();

//     return (
//         <View style={globalStyles.container}>
//             <View style={{flex: 1,}}>
              
//                 <View style={styles.body}>
//                     <TouchableRipple onPress={()=>{}}>
//                         <View style={styles.addressCard}>
//                             <Text style={styles.name}>Name</Text>
//                             <Text style={styles.bodyText}>Address</Text>
//                             <Text style={styles.bodyText}>Landmark</Text>
//                             <Text style={styles.bodyText}>City, State</Text>
                            
//                             <Text style={styles.bodyText}>ZipCode</Text>
//                             <Text style={styles.bodyText}>Country</Text>
//                               <Icon 
//                                 name='delete'
//                                 size={22}
//                                 color={'#1a1a1a'}
//                                 onPress={()=>{}}
//                                 style={styles.delete}
//                             />
//                         </View>
//                     </TouchableRipple>
                   
//                 </View>
//             </View>
//                 <View>
//                     <Icon 
//                         name={'plus'}
//                         size={36}
//                         color={'white'}
//                         style={styles.addAddress}
//                         onPress={()=> navigation.navigate('AddAddress')}
//                     />
//                 </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     header: {
//         paddingHorizontal: 12,
//         paddingVertical: 16,
        
//         borderBottomColor: '#3d3d3d',
//         borderBottomWidth: 1,
//     },
//     headerText: {
//         fontSize: 21,
//         fontWeight: 'bold',
//         color: '#4a4a4a',
//         letterSpacing: 0.15
//     },

//     addressCard: {
       
//         padding: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd'
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     bodyText: {
//         fontSize: 14.5,
//         color: '#3e3e3e'
//     },
//     botbtn: {
//         fontSize: 14,
//         color: '#2d2d2d',
//         fontWeight: 'bold',
//         marginTop: 8,
//     },
//     delete: {
//         position: 'absolute',
//         bottom: 12,
//         right: 15
//     },
//     addAddress: {
//         position: 'absolute',
//         bottom: 18,
//         right: 18,
//         zIndex: 2000,
//         padding: 8,
//        backgroundColor:'black',
//         borderRadius: 70,
//         elevation: 6,
//     }
// })

// const mapStateToProps = (state) => {
//     return {
//         addressList: state.AuthUser.addressList,
//         authUser : state.AuthUser
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleSaveAddress: (address) => dispatch(handleSaveAddress(address))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(AddressList)

import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React , { useEffect, useState } from 'react'

import { FAB } from 'react-native-paper'
import { Item, Radio, Toast } from 'native-base'
import DisplayAddressList from '../components/DisplayAddressList'

import { RadioButton} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native'

import { handleSaveAddress } from '../redux/userAction'
import { connect } from 'react-redux'

function AddressList(props) {

const navigation = useNavigation()


const [address, setAddress] = useState(null)

// useEffect(() => {
// console.log(props.authUser);
// },[])

const setRequiredAddress = (address) => {
setAddress(address)
}

return (


<>
<ScrollView contentContainerStyle={styles.container}>
{
address ?
<View style={{marginTop:20,borderBottomWidth:1,width:'100%',borderBottomColor:'lightgrey'}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:23}}>Ship To This Address</Text>
<View style={{justifyContent:'center',alignItems:'center',marginBottom:20,marginTop:20}}>

<Text style={{fontSize:18}}>{address.address},</Text>
<Text style={{fontSize:18}}>{address.city} - {address.pinCode}, {address.state}, {address.country}</Text>
</View>

<TouchableOpacity style={{backgroundColor:'#48CCCD',margin:10,padding:9,borderRadius:10,width:'90%'}} onPress={() => {props.handleSaveAddress(address); setAddress(null); Toast.show({text:'Address Saved Successfully', type:'success'});navigation.goBack()}}>
<Text style={{fontSize:18,color:'white',textAlign:'center'}}>Save Address</Text>
</TouchableOpacity>

</View>
</View>
: null
}

{
props.addressList.length > 0 ? (
<View style={{marginTop:20}}>
{
props.addressList.map((addresses,index) =>
<View key={index} style={styles.listAddress} >
<DisplayAddressList address={addresses} setRequiredAddress={setRequiredAddress} selectedAddress = {address} />
</View>
)
}

</View>
) : (
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:20}}>No Address Added</Text>
</View>
)
}





</ScrollView>



<FAB
icon={'plus'}
style={{position:'absolute',right:18,bottom:18,backgroundColor:'#48CCCD'}}
onPress={() => navigation.navigate('AddAddress') }
/>


</>
)
}

const mapStateToProps = (state) => {
return {
addressList: state.AuthUser.addressList,
authUser : state.AuthUser
}
}

const mapDispatchToProps = (dispatch) => {
return {
handleSaveAddress: (address) => dispatch(handleSaveAddress(address))
}
}

const styles = StyleSheet.create({
container : {
flexGrow:1,
backgroundColor:'white'
},
listAddress : {
flexDirection:'row',
alignItems:'center',
padding:20,
backgroundColor: 'white',
shadowColor:'#000',
shadowOffset: {
width:0,
height: 1
},
shadowOpacity: 0.19,
shadowRadius: 5,
elevation: 7,
margin:10,
borderRadius:10
}
})

export default connect(mapStateToProps,mapDispatchToProps)(AddressList)