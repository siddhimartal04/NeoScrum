import * as React from 'react';
import { View, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
const forgotSchema = yup.object({
    email: yup.string().required('Please enter email').email('Enter valid email')
  });
/**
 * @author Siddhi Martal
 * @param {object} props contains navigation object which is use to navigate between different screens
 * @description forgotPassword screen is used if user of a application forgot his/her password, Using this screen user can enter  registered email so that app can send verification code to change password.
 * @return jsx which is used to get registered email as a input from user.
 */
function ForgotPasswordScreen({navigation}) {


return (
    <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={forgotSchema}
        onSubmit={() => {
            navigation.navigate('SetPasswordScreen');

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
            <ScrollView style={globalStyles.container}>
                <StatusBar backgroundColor="#48CCCD" />
                    <View style={{margin:30, flex:1}}>
                        <View style={globalStyles.header}>
                            <Text style={{fontSize:40 , color:'black',marginTop:10}}>
                               NeoStore
                               
                            </Text>
                        </View>
                            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:20, color:'black',marginTop:25}}>Forgot password?</Text>
                            </View>
                            <View style={globalStyles.action}>
                                <Icon
                                name="user-o"
                                color="black"
                                size={20}/>
                                <TextInput
                                style={globalStyles.textInput}
                                placeholder="Enter Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"/>
                            </View>
                            {(errors.email && touched.email)&& <Text style={{ marginTop:5,color:'red',fontSize:18}}>{errors.email}</Text>}
                            {/* <Button
         onPress={handleSubmit}
         onPress={() => {
            navigation.navigate('SetPasswordScreen');
          }}
         title="LOGIN"
         disabled={!isValid}
       /> */}
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

export default ForgotPasswordScreen;

