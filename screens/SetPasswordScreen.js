import React, {useState, useEffect} from 'react';
import { View, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../styles/globalStyles';

const setSchema = yup.object({
    otp: yup.string().required('Please enter otp').matches(/^\d{4}$/, 'Must be a 4 digit number'),
    password: yup
      .string()
      .required('Please enter Password')
      .min(5,'Password length cannot be less than 5 ')
      .max(8,'Password length cannot be more than 8 ')
      .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric'),
      confirmpassword: yup
      .string()
      .required('Please enter confirm Password')
      .oneOf([yup.ref('password')], 'Must be same as password'),

  });

function SetPasswordScreen({navigation}) {

    const [securePassword, setSecurePassword] = useState(true);
    const [eyeicon, setEyeIcon] = useState('eye-slash');

    const handleEyeClick = () => {
        setSecurePassword(!securePassword);
        if (eyeicon === 'eye-slash') {
          setEyeIcon('eye');
        } else {
          setEyeIcon('eye-slash');
        }
      };


return (
    <Formik
        initialValues={{otp: '', password: '',confirmpassword:''}}
        validationSchema={setSchema}>
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
                               Neo
                               <Text style={{color: 'red'}}>
                                Store
                                </Text>
                            </Text>
                        </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>OTP</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={globalStyles.textInput}
                                placeholder="Enter OTP"
                                onChangeText={handleChange('otp')}
                                onBlur={handleBlur('otp')}
                                value={values.otp}
                                />
                            </View>
                            {(errors.otp && touched.otp)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.otp}</Text>}
                            
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>Password</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={securePassword}/>
                                            <Icon
                            name={eyeicon}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'absolute',
                              right: 13,
                              paddingTop: 2,
                              opacity: 0.6,
                            }}
                            onPress={() => handleEyeClick()}
                          />
                            </View>
                            {(errors.password && touched.password)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.password}</Text>}
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>Confirm Password</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Confirm Password"
                                    onChangeText={handleChange('confirmpassword')}
                                    onBlur={handleBlur('confirmpassword')}
                                    value={values.confirmpassword}
                                    secureTextEntry={securePassword}/>
                                            <Icon
                            name={eyeicon}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'absolute',
                              right: 13,
                              paddingTop: 2,
                              opacity: 0.6,
                            }}
                            onPress={() => handleEyeClick()}
                          />
                            </View>
                            {(errors.confirmpassword && touched.confirmpassword)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.confirmpassword}</Text>}
                
                            <TouchableOpacity style={globalStyles.submitButton}
                                onPress={()=>handleSubmit()}  disabled={!isValid}
                            >
                                <Text style={{fontSize:20, color:'white'}}>
                                    SUBMIT
                                </Text  >
                            </TouchableOpacity>
                            
                            
                    </View>
            </ScrollView>
        )}
      </Formik>
  
  );
}

export default SetPasswordScreen;

