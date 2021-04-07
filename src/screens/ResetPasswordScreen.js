import React, {useState, useEffect} from 'react';
import { View, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
const setSchema = yup.object({
    password: yup
      .string()
      .required('Please enter current Password')
      .min(5,'Password length cannot be less than 5 ')
      .max(8,'Password length cannot be more than 8 ')
      .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric'),
    newpassword: yup
      .string()
      .required('Please enter new Password')
      .min(5,'Password length cannot be less than 5 ')
      .max(8,'Password length cannot be more than 8 ')
      .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric'),
      confirmpassword: yup
      .string()
      .required('Please enter confirm Password')
      .oneOf([yup.ref('newpassword')], 'Must be same as new password'),

  });

function ResetPasswordScreen({navigation}) {

    const [securePassword, setSecurePassword] = useState(true);
    const [eyeicon, setEyeIcon] = useState('eye-slash');
    const [secureNPassword, setSecureNPassword] = useState(true);
    const [secureCPassword, setSecureCPassword] = useState(true);
    const [eyenicon, setNEyeIcon] = useState('eye-slash');
    const [eyecicon, setCEyeIcon] = useState('eye-slash');

    const handleEyeClick = () => {
        setSecurePassword(!securePassword);
        if (eyeicon === 'eye-slash') {
          setEyeIcon('eye');
        } else {
          setEyeIcon('eye-slash');
        }
      };
      const handleCEyeClick = () => {
        setSecureCPassword(!secureCPassword);
        if (eyecicon === 'eye-slash') {
          setCEyeIcon('eye');
        } else {
          setCEyeIcon('eye-slash');
        }
      };
      const handleNEyeClick = () => {
        setSecureNPassword(!secureNPassword);
        if (eyenicon === 'eye-slash') {
          setNEyeIcon('eye');
        } else {
          setNEyeIcon('eye-slash');
        }
      };

return (
    <Formik
        initialValues={{newpassword: '', password: '',confirmpassword:''}}
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
                               NeoStore
                               
                            </Text>
                        </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>Current Password</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={globalStyles.textInput}
                                placeholder="Enter current password"
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
                            {(errors.password && touched.password)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.password}</Text>}
                            
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>New Password</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={globalStyles.textInput}
                                    placeholder="Enter new Password"
                                    onChangeText={handleChange('newpassword')}
                                    onBlur={handleBlur('newpassword')}
                                    value={values.newpassword}
                                    secureTextEntry={secureNPassword}/>
                                            <Icon
                            name={eyenicon}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'absolute',
                              right: 13,
                              paddingTop: 2,
                              opacity: 0.6,
                            }}
                            onPress={() => handleNEyeClick()}
                          />
                            </View>
                            {(errors.newpassword && touched.newpassword)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.newpassword}</Text>}
                            
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
                                    secureTextEntry={secureCPassword}/>
                                            <Icon
                            name={eyecicon}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'absolute',
                              right: 13,
                              paddingTop: 2,
                              opacity: 0.6,
                            }}
                            onPress={() => handleCEyeClick()}
                          />
                            </View>
                            {(errors.confirmpassword && touched.confirmpassword)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.confirmpassword}</Text>}
                            <LinearGradient colors={[ '#48CCCD','#a1c4fd']} style={globalStyles.submitButton}>
                           
                            <TouchableOpacity 
                                onPress={()=>handleSubmit()}  disabled={!isValid}
                            >
                                <Text style={{fontSize:20, color:'white'}}>
                                    SUBMIT
                                </Text  >
                            </TouchableOpacity>
                            </LinearGradient>
                            
                            
                    </View>
            </ScrollView>
        )}
      </Formik>
  
  );
}

export default ResetPasswordScreen;

