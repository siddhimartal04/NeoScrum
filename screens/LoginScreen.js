import React, {useState, useEffect} from 'react';
import { View, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';

const loginSchema = yup.object({
    email: yup.string().required('Please enter email').email('Enter valid email'),
    password: yup
      .string()
      .required('Please enter Password')
      .min(5,'Password length cannot be less than 5 ')
      .max(8,'Password length cannot be more than 8 ')
      .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric'),
  });

function LoginScreen({navigation}) {

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
        initialValues={{email: '', password: ''}}
        validationSchema={loginSchema}>
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
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>Email</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={globalStyles.textInput}
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"/>
                            </View>
                            {(errors.email && touched.email)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.email}</Text>}
                            
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
                            <LinearGradient colors={[ '#48CCCD','#a1c4fd']} style={globalStyles.submitButton}>
                            <TouchableOpacity 
                                onPress={()=>handleSubmit()}  disabled={!isValid}
                            >
                                <Text style={{fontSize:20, color:'white'}}>
                                    Login
                                </Text  >
                            </TouchableOpacity>
                           </LinearGradient>
                            <TouchableOpacity style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginTop: 47,
                        }}
                          onPress={() => {
                            navigation.navigate('ForgotPasswordScreen');
                          }}>
                              <Text style={{fontSize:20, color:'black',textAlign:'center',marginTop:10}}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <View style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginTop: 67,
                        }}>
                            <TouchableOpacity 
                          onPress={() => {
                            navigation.navigate('RegistrationScreen');
                          }}>
                            <Text style={{fontSize: 18, marginRight: 15}}>
                        DON'T HAVE AN ACCOUNT?
                      </Text>
                      </TouchableOpacity>
                      <Icon 
                        name={'plus-square'}
                        color={'black'}
                        
                        solid
                        size={30}
                        style={{
                          opacity: 0.8,
                          
                        }}
                       
                      />
                      </View>
                    </View>
            </ScrollView>
        )}
      </Formik>
  
  );
}

export default LoginScreen;

