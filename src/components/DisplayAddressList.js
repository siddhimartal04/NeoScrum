import { RadioButton} from 'react-native-paper';

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { handleRemoveAddress } from '../redux/userAction'

import { connect } from 'react-redux'

function DisplayAddressList(props) {

const [address, setAddress] = useState(null);

const [active, setActive] = useState(false);

return (

<View style={{alignItems:'center',alignSelf:'center',width:'100%'}}>
<TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={() => {props.setRequiredAddress(props.address)}}>



<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:18,alignSelf:'center',textAlign:'center'}}>{props.address.address},</Text>
<Text style={{fontSize:18,alignSelf:'center',textAlign:'center'}}>{props.address.city} - {props.address.pinCode}, {props.address.state}, {props.address.country}</Text>
</View>




</TouchableOpacity>

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,borderTopWidth:1,borderTopColor:'lightgrey',paddingTop:10}}>
<TouchableOpacity style={{flex:1}}>
<Text style={{alignSelf:'center',fontSize:17}}>
Edit
</Text>
</TouchableOpacity>
<TouchableOpacity style={{flex:1}}
onPress={() => { props.address=== props.selectedAddress ? (props.setRequiredAddress(null) , props.handleRemoveAddress(props.address) ) : props.handleRemoveAddress(props.address); } }>
<Text style={{alignSelf:'center',fontSize:17}}>
Remove
</Text>
</TouchableOpacity>
</View>

</View>

// </RadioButton.Group>
)
}

const mapDispatchToProps = (dispatch) => {
return {
handleRemoveAddress: (address) => dispatch(handleRemoveAddress(address))
}
}

export default connect(null,mapDispatchToProps)(DisplayAddressList)