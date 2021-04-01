import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text,Button ,StyleSheet,TouchableWithoutFeedback,Image, ScrollView} from 'react-native';
import { Rating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
function Card({item}) {
  const navigation = useNavigation();
  return (

    <View style={{marginBottom:20,marginTop:10}}>
  
            <TouchableWithoutFeedback key={item.id} onPress={() => navigation.navigate('ProductDetails',{item})}
>
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
                                <Text style={{fontSize:16,fontWeight:'bold',color:'black'}}>
                                    Rs.{item.product_price}
                                </Text>
                                <StarRating
                                    maxStars={5}
                                    rating={item.rating}
                                    starSize={20}
                                    fullStarColor={'gold'}
                                    readonly={true}
                                    
                                />
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
  marginTop:2,
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
  fontSize:18,
  marginTop:10,
  fontWeight:'bold',
 
  },
  productTextStyle : {

  flexGrow:1,
  
  }
  })
