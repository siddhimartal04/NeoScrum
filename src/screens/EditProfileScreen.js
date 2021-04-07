import React, {useState, useEffect} from 'react';
import { View, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import { RadioButton, Checkbox } from 'react-native-paper'
import * as yup from 'yup';
import RadioForm from 'react-native-simple-radio-button';
import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native'
import { handleUserRegistration } from '../redux/userAction'
import {connect} from 'react-redux'

const registerSchema = yup.object({
    fname: yup
    .string()
    .required('Please enter first name')
    .min(2,'Length should be more than 2')
    .matches(/^[a-zA-Z]+$/, 'Must contain only alphabets'),
  lname: yup
    .string()
    .required('Please enter Last name')
    .min(2,'Length should be more than 2')
    .matches(/^[a-zA-Z]+$/, 'Must contain only alphabets'),
    email: yup.string().required('Please enter email').email('Enter valid email'),
       phoneno: yup
    .string()
    .required()
    .matches(/^\d{10}$/, 'Must contain only 10 digit number')
    .test('firstLetter', 'First number should be greater than 6', 
    function (val) {
        if (val) {
          return val[0] > 6;
        }
      }),
  
    
  });
  



function EditProfileScreen(props) {
  const navigation = useNavigation();
 



    
      useEffect(()=>{
        if (props.isLogin)
        {
          navigation.navigate('HomeScreen')
          
        }  
      },[props.isLogin])
return (
    <Formik
        initialValues={{fname:'',lname:'',email: '', password: '',confirmpassword:'',phoneno:'',gender:''}}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log('test')
          props.handleUserRegistration(values);
         
        }}>
    {({
     handleChange,
     handleBlur,
     handleSubmit,
     
     values,
     errors,
     touched,
     isValid,
     
   }) => (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="#48CCCD" />
                    <View style={{margin:30, flex:1}}>
                        
                        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>First Name</Text>
                            </View>
                            <View style={styles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={styles.textInput}
                                placeholder="First name"
                                onChangeText={handleChange('fname')}
                                onBlur={handleBlur('fname')}
                                value={values.fname}
                                />
                            </View>
                            {(errors.fname && touched.fname)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.fname}</Text>}
                       <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>Last Name</Text>
                            </View>
                            <View style={styles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={styles.textInput}
                                placeholder="Last name"
                                onChangeText={handleChange('lname')}
                                onBlur={handleBlur('lname')}
                                value={values.lname}
                                />
                            </View>
                            {(errors.lname && touched.lname)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.lname}</Text>}
                            
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>Email</Text>
                            </View>
                            <View style={styles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={styles.textInput}
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"/>
                            </View>
                            {(errors.email && touched.email)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.email}</Text>}
                            
                            
                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>Phone Number</Text>
                            </View>
                              <View style={styles.action}>
                                <Icon
                                name="phone"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Phone Number"
                                    onChangeText={handleChange('phoneno')}
                                    onBlur={handleBlur('phoneno')}
                                    value={values.phoneno}
                                    />
                                            
                            </View>
                            {(errors.phoneno && touched.phoneno)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.phoneno}</Text>}
                                    <LinearGradient colors={[ '#48CCCD','#a1c4fd']} style={globalStyles.submitButton}>
                           
                            <TouchableOpacity 
                                onPress={handleSubmit}  disabled={!isValid}
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



const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
       
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop:  -12,
        paddingLeft: 10,
        color: 'black',
        
    },
    submitButton : {
        marginTop:25,
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#48CCCD',
        borderRadius:10,
        opacity:1
    },
    header : {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    termConditionStyle : {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
     
  },
});




export default EditProfileScreen
