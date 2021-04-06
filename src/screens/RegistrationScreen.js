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
      // radioOption:yup.string().required('choose one'),
      // acceptTerms: yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
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
  
    gender: yup.string().required(),
  });
  

  var radio_props = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
  ];
  // var check_props = [
  //   {label: 'Male', value: 0},
    
  // ];

function RegistrationScreen(props) {
  const navigation = useNavigation();
    const [securePassword, setSecurePassword] = useState(true);
    const [eyeicon, setEyeIcon] = useState('eye-slash');
    // const [value, setValue] = useState('');
    // const [termsCondition , setTermsCondition] = useState(false)  


    const handleEyeClick = () => {
        setSecurePassword(!securePassword);
        if (eyeicon === 'eye-slash') {
          setEyeIcon('eye');
        } else {
          setEyeIcon('eye-slash');
        }
      };

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
     setFieldValue
   }) => (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="#48CCCD" />
                    <View style={{margin:30, flex:1}}>
                        <View style={styles.header}>
                            <Text style={{fontSize:40 , color:'black',marginTop:10}}>
                               NeoStore
                            </Text>
                        </View>
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
                                <Text style={{fontSize:20, marginTop:25,color:'black'}}>Password</Text>
                            </View>
                            <View style={styles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={styles.textInput}
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
                            <View style={styles.action}>
                                <Icon
                                name="lock"
                                color="black"
                                size={20}/>
                                <TextInput
                                    style={styles.textInput}
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
                            <View style={{flexDirection: 'row'}}>
                             
                            <Text style={{fontSize:20, color:'black'}}>Gender</Text>   
                            <RadioForm
                            
                            style={{
                              flexDirection: 'row',
                              marginLeft:40,
                              marginTop:4
                            }}
                            animation={false}
                            labelStyle={{marginRight: 10}}
                            buttonSize={12}
                            buttonColor={'skyblue'}
                            radio_props={radio_props}
                            initial={
                              values.gender == 'Male'
                                ? 0
                                : values.gender == 'Female'
                                ? 1
                                : -1
                            }
                            onPress={(value) => {
                              if (value === 0) {
                                setFieldValue('gender', 'Male');
                              } else {
                                setFieldValue('gender', 'Female');
                              }
                            }}
                          />
                          </View>
                           {touched.gender &&errors.gender && (<Text style={{ marginTop:5,color:'red',fontSize:18 }}>{touched.gender && errors.gender}</Text>)}
                           {/* <View style={{justifyContent:'center',alignItems:'center'}}>
<View style={styles.termConditionStyle}>
<Checkbox
status={termsCondition ? 'checked' : 'unchecked'}
onPress={() => {
setTermsCondition(!termsCondition);
}}
color="dodgerblue"
/>
<Text style={{fontSize:18}}>I agree the <Text style={{color:'dodgerblue',}}>{`Terms & Conditions`}</Text></Text>
</View>
{ !termsCondition ? (<Text style={{color:'red',fontSize:20}}>please agree with the terms </Text>) : (<Text></Text>)}


</View> */}
                           {/* <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>I agree the terms and conditions</Text>
                            
                            
                                
                                <CheckBox
                               
                                
                                value={values.acceptTerms}
                                />
                                </View> */}
                            
                            {/* {(errors.lname && touched.lname)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.lname}</Text>}
                             */}
                                    {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                        <View style={{alignContent:'center', flexDirection: 'row',marginTop:30}}>
                                                <Text style={{fontSize:20, color:'black'}}>Gender</Text>
                                                <RadioButton value="male" color='#d9534f' />
                                                <Text style={{color: '#3D3D3D',marginTop:8}}>Male</Text>
                                                <RadioButton value="female" color='#d9534f' />
                                                <Text style={{color: '#3D3D3D',marginTop:8}}>Female</Text>
                                        </View>
                                    </RadioButton.Group>
                                    {(errors.gender && touched.gender)  && <Text style={{ marginTop:5,color:'red',fontSize:18 }}>{errors.gender}</Text>}
                                     */}
                                     <LinearGradient colors={[ '#48CCCD','#a1c4fd']} style={globalStyles.submitButton}>
                           
                            <TouchableOpacity 
                                onPress={handleSubmit}  disabled={!isValid}
                            >
                                <Text style={{fontSize:20, color:'white'}}>
                                    Register
                                </Text  >
                            </TouchableOpacity>
                            </LinearGradient>
                            
                            {/* <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('ForgotPasswordScreen');
                          }}>
                              <Text style={{fontSize:20, color:'black',textAlign:'center',marginTop:10}}>Forgot Password?</Text>
                            </TouchableOpacity> */}
                            
 
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


const mapStateToProps = (state) => {
  return {
      isLogin: state.AuthUser.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleUserRegistration : (data) => dispatch(handleUserRegistration(data))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(RegistrationScreen)
