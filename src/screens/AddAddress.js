import React, {useState, useEffect} from 'react';
import { View, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';

const addressSchema = yup.object({
    address: yup.string().required(),
    pincode: yup
      .string()
      .required()
      .min(6)
      .max(6)
      .matches(/^[0-9]+$/, 'Must contain only digit'),
      landmark:yup.string().required(),
    city: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/, 'Must contain only alphabets'),
    state: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/, 'Must contain only alphabets'),
    country: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/, 'Must contain only alphabets'),
  });
/**
 * @author Siddhi Martal
 * @param {object} props contains address of user that he/she want to change.
 * @description this screen contains different input fields where user can edit the address.
 * @returns jsx which contains input fields and button to perform changes in database.
 */
function AddAddressScreen({navigation}) {

  

return (
    <Formik
        initialValues={{   address: '',
        pincode: '',
        city: '',
        state: '',
        country: '',landmark:''}}
        validationSchema={addressSchema}>
    {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     touched,
     isValid,
   }) => (
            <ScrollView style={globalStyles.container}>

                <StatusBar backgroundColor="#48CCCD" />
                    <View style={{margin:30, flex:1}}>
                        <View style={globalStyles.header}>
                            <Text style={{fontSize:40 , color:'black',marginTop:10}}>
                               NeoStore
   
                            </Text>
                        </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>Address</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={globalStyles.textInput}
                                multiline
                                placeholder="Address"
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                                />
                            </View>
                            {(errors.address && touched.address)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.address}</Text>}
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>Landmark</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={globalStyles.textInput}
                               
                                placeholder="landmark"
                                onChangeText={handleChange('landmark')}
                                onBlur={handleBlur('landmark')}
                                value={values.landmark}
                                />
                            </View>
                            {(errors.landmark && touched.landmark)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.landmark}</Text>}
                            
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>City</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="City"
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                    />
                                            
                            </View>
                            {(errors.city && touched.city)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.city}</Text>}
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>State</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="State"
                                    onChangeText={handleChange('state')}
                                    onBlur={handleBlur('state')}
                                    value={values.state}
                                    />
                                            
                            </View>
                            {(errors.state && touched.state)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.state}</Text>}
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>Pin Code</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Enter pin code"
                                    onChangeText={handleChange('pincode')}
                                    onBlur={handleBlur('pincode')}
                                    value={values.pincode}
                                    />
                                            
                            </View>
                            {(errors.pincode && touched.pincode)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.pincode}</Text>}
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>Country</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Enter your Country"
                                    onChangeText={handleChange('country')}
                                    onBlur={handleBlur('country')}
                                    value={values.country}
                                    />
                                            
                            </View>
                            {(errors.country && touched.country)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.country}</Text>}
                           
                            <LinearGradient colors={[ '#48CCCD','#a1c4fd']} style={globalStyles.submitButton}>
                            <TouchableOpacity 
                                onPress={()=>handleSubmit()}  disabled={!isValid}
                            >
                                <Text style={{fontSize:20, color:'white'}}>
                                    Submit
                                </Text  >
                            </TouchableOpacity>
                           </LinearGradient>
                            
                           

                      </View>
                    
            </ScrollView>
        )}
      </Formik>
  
  );
}

export default AddAddressScreen;

