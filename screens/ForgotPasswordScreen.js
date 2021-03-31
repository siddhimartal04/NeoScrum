import * as React from 'react';
import { View, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import {globalStyles} from '../styles/globalStyles';

const forgotSchema = yup.object({
    email: yup.string().required('Please enter email').email('Enter valid email')
  });

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
                               Neo
                               <Text style={{color: 'red'}}>
                                Store
                                </Text>
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

export default ForgotPasswordScreen;

