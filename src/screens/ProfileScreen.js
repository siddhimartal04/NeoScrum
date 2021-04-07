import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'


import Icon from 'react-native-vector-icons/MaterialIcons'

function ProfileScreen({navigation}) {
    return (
        
        <>

           

                
            <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:'white'}} >
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image 
                        source={require('../assets/profilePic.jpeg')}
                        style={styles.profileImageStyle}
                    />
                    {/* <Text style={{fontSize:20,color:'white',marginBottom:20}}>Abhishek Badugu</Text> */}
                </View>
                {/* <View style={styles.container}> */}

                <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                   
                   <View style={{flex:0.5,justifyContent:'center',marginBottom:20}}>
                        
                        <View style={styles.userDetails}>
                            <Icon name="person-outline" size={25} style={{marginLeft:10}} />
                            <Text style={{fontSize:20,marginLeft:10,paddingLeft:5,paddingRight:15}}>Siddhi</Text>
                        </View>

                        <View style={styles.userDetails}>
                            <Icon name="person-outline" size={25} style={{marginLeft:10}} />
                            <Text style={{fontSize:20,marginLeft:10,paddingLeft:5,paddingRight:15}}>Martal</Text>
                        </View>

                        <View style={styles.userDetails}>
                            <Icon name="mail-outline" size={25} style={{marginLeft:10}} />
                            <Text style={{fontSize:20,marginLeft:10,paddingLeft:5,paddingRight:15}}>siddhimartal98@gmail.com</Text>
                        </View>

                        <View style={styles.userDetails}>
                            <Icon name="phone-android" size={25} style={{marginLeft:10}} />
                            <Text style={{fontSize:20,marginLeft:10,paddingLeft:5,paddingRight:15}}>9869677118</Text>
                        </View>

                    </View>

                    <View style={{flex:0.5,width:'80%'}}>
                        <TouchableOpacity style={styles.editProfileButton}>
                            <Text style={{fontSize:20,color:'white'}}>Edit Profile</Text>
                        </TouchableOpacity>
                        

                        <TouchableOpacity style={styles.resetPasswordBtn} onPress={() => {
                            navigation.navigate('ResetPasswordScreen');}}>
                            <Text style={{fontSize:20,color:'white'}}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                </ScrollView>

</>

)
}

const styles = StyleSheet.create({
container : {
flex : 1,
justifyContent: 'center',
alignItems:'center',
//margin:10,

},
inputStyles : {
fontSize:20,
//width:'70%'
padding:8,
flex:3
},
inputContainer : {
flexDirection: 'row',
alignItems:'center',
backgroundColor: 'white',
shadowColor:'#000',
shadowOffset: {
    width:0,
    height: 1 
},
shadowOpacity: 0.19,
shadowRadius: 5,
elevation: 7,
borderRadius:10,
marginTop:15,
//marginBottom: 3,
padding:3
//width:'90%'
},
iconStyles : {
fontSize:25,
marginLeft:10,
marginRight:10,
color: 'grey'
},
editProfileBtnStyle : {
shadowColor:'#000',
shadowOffset: {
    width:0,
    height: 1 
},
shadowOpacity: 0.19,
shadowRadius: 5,
elevation: 7,
borderRadius:10,
marginTop:15,
//marginBottom: 3,
padding:3,
//width:'90%'
backgroundColor: 'dodgerblue',
width:'100%',
padding : 9,
marginTop:30,justifyContent:'center'
,alignItems:'center',
alignSelf:'center'
},
profileImageStyle : {
height:120,
width:120,
borderRadius:60,
marginTop:20,
marginBottom:20
},
userDetails : {
//justifyContent:'center',
flexDirection:'row',
alignItems:'center',
marginTop:30,
borderWidth:1,
paddingTop:10,
paddingBottom:10
},
editProfileButton: {
justifyContent:'center',
alignItems:'center',
backgroundColor:'#48CCCD',
padding:6,
//marginTop:10
borderRadius:7,
shadowColor:'#000',
shadowOffset: {
    width:0,
    height: 1 
},
shadowOpacity: 0.19,
shadowRadius: 5,
elevation: 7,
},
resetPasswordBtn : {
justifyContent:'center',
alignItems:'center',
marginTop:30,
backgroundColor:'#48CCCD',
padding:6,
borderRadius:7,
shadowColor:'#000',
shadowOffset: {
    width:0,
    height: 1 
},
shadowOpacity: 0.19,
shadowRadius: 5,
elevation: 7,
}
})

export default ProfileScreen
