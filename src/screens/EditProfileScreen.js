import React, {useState, useEffect} from 'react';
import { View,ImageBackground, Text,Button,ScrollView,StatusBar,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
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
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'react-native-image-picker'
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
  

/**
 * @author Siddhi Martal
 * @param {object} props which contains user details.
 * @description this screen shows customer details and  input fields to change the user details.
 * @returns jsx which contains input fields and button to perform changes.
 */

function EditProfileScreen(props) {
  const navigation = useNavigation();

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

 
  const [DOB, setDOB] = useState(new Date(1598051730000))
  const handleBirthDate = (event, selectedDate) => {
    const currentDate = selectedDate || DOB;
    setShow(Platform.OS === 'ios');
    setDOB(currentDate);
  };

  const [ photo, setPhoto ] = useState(null)

  const handleChooseImage = () => {
      let options = {}

      ImagePicker.launchImageLibrary(options, (response) => {
          console.log(response.uri);
          if(response.uri) {
              setPhoto(response.uri)
          }
      });
  }
    
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
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.imageContainer}>
                            {
                                photo
                                    ?
                                        <ImageBackground 
                                            source={{uri: photo}}
                                            style={{height: 100, width: 100}}
                                            imageStyle={{borderRadius: 100,}}
                                        >
                                            <View style={styles.iconContainer}>
                                                <Icon 
                                                    name={'camera'}
                                                    color={'#fff'}
                                                    size={35}
                                                    style={styles.camIcon}
                                                    onPress={handleChooseImage}
                                                />
                                            </View>
                                        </ImageBackground>
                                    :
                                        <ImageBackground 
                                            source={require('../assets/profilePic.jpeg')}
                                            style={{height: 100, width: 100}}
                                            imageStyle={{borderRadius: 100,}}
                                        >
                                            <View style={styles.iconContainer}>
                                                <Icon 
                                                    name={'camera'}
                                                    color={'#fff'}
                                                    size={35}
                                                    style={styles.camIcon}
                                                    onPress={handleChooseImage}
                                                />
                                            </View>
                                        </ImageBackground>
                            }
                        </View>
                    </TouchableOpacity>
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
                            <View>


      {show ?
        <DateTimePicker
          testID="dateTimePicker"
          value={DOB}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={handleBirthDate}
          onTouchCancel={() => setShow(false)}
          maximumDate={new Date()}
        />
      :null}
      <View style={{flexDirection: 'row',
        marginTop: 15,
       }}>
     
                            <Icon
                                name="calendar"
                                color="black"
                                size={20}
                                onPress={()=>setShow(true)}/>
                                
                        <Text style={{fontSize:18,marginLeft:18}}>
                       {DOB.toString().substr(4, 12)}
                        </Text>
</View>

    </View>
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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
    fontSize:18
},
imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 15,
   marginLeft:115,
    alignItems: 'center',
    marginTop: 12,
},
iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
camIcon: {
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#fff'
},
});




export default EditProfileScreen
