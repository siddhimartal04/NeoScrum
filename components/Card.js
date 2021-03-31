import * as React from 'react';
import { View, Text,Button ,StyleSheet,TouchableWithoutFeedback,Image, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
function Card({item}) {
  return (

    <View style={{marginBottom:20,marginTop:10}}>
  
            <TouchableWithoutFeedback key={item.id} >
                <View style={styles.container}>
                    <Image 
                    source={item.product_images}
                    style={styles.imageStyles}
                    />
                    <View style={styles.productTextStyle}>
                      <View style={{flex:1,alignItems:'center',maxWidth:'75%'}}>
                            <View>
                                <Text style={styles.productNameStyles}>
                                    {item.product_name}
                                </Text>
                                <Text style={{color:'grey',fontSize:16}}>{item.product_category}</Text>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                                    Rs.{item.product_price}
                                </Text>
                                <Text style={{fontSize:15,color:'black'}}>{item.rating} <Icon name="star" /></Text>
                                </View>
                        </View>
                    
                    </View>

                </View>
                

            </TouchableWithoutFeedback>

</View>
 
  );
}







export default Card;
const styles = StyleSheet.create({
  container : {
  marginTop:20,
  flex:1,
  flexDirection:'row',
  alignItems:'center',
  borderColor:'grey',
  marginLeft:10,
  marginRight:10,
  backgroundColor: 'white',
  shadowColor:'#000',
  
  shadowOpacity: 0.6,
  shadowRadius: 5,
  elevation: 7,
  borderRadius:20,
  },
  
  imageStyles : {
  height:120,
  width:120,
  margin:10,
  resizeMode:'stretch',
  },
  productNameStyles : {
  fontSize:22,
  alignSelf:'flex-start',
  fontWeight:'bold'
  },
  productTextStyle : {

  flexGrow:1,
  
  }
  })
