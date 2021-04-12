import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native'


import{ useNavigation , useRoute} from '@react-navigation/native'

function OrderSummary(props) {

    const navigation = useNavigation();
    const route = useRoute();

    const {products} = route.params; 

    const getTotalCost = (sum , product) => sum + product.product.product_price * product.quantity


    return (
        <>
          

            <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:'white'}} >

                <View style={styles.addressStyle}>

                    <View>
                        <Text style={{fontSize:22}}>Siddhi Martal</Text>
                        <Text style={{fontSize:18,marginTop:10}}>NeoSoft Technologies</Text>
                        <Text style={{fontSize:18}}>Mumbai-400025, Maharashtra, India</Text>
                        <Text style={{fontSize:18,color:'grey'}}>Mobile No.: 9869677118</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.addressBtnStyle} onPress={() => navigation.navigate('Add Address')} >
                            <Text style={{fontSize:20,color:'white',alignSelf:'center'}}>Change/Add Address</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View>
                    {
                        products.map(product =>
                            <View key={product.product.id} style={styles.productListStyle}>
                                
                                <View style={{flex:0.6,justifyContent:'space-between'}}>
                                    
                                    <View>
                                        <Text style={{fontSize:20}}>{product.product.product_name}</Text>
                                        
                                        <Text style={{fontSize:17,color:'grey'}}>{product.product.product_category}</Text>
                                    </View>
                                    
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View>
                                            <Text style={{fontSize:17}}>Price: Rs.{product.product.product_price}</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontSize:17}}>Quantity- {product.quantity}</Text>
                                        </View>
                                    </View>
                                </View>
                                
                                
                                <View style={{flex:0.4,alignItems:'center'}}>
                                    <Image 
                                    source={product.product.product_images}
                                    style={{resizeMode:'stretch',height:110,width:110,alignSelf:'flex-end'}}
                                    />
                                </View>
                            </View>
                        
                        
                        )
                    }
                </View>

                <View style={{padding:10,borderBottomColor:'lightgrey',borderBottomWidth:1,margin:10}}>
                    <Text style={{fontSize:20}}>Price Details</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10,paddingLeft:10,paddingRight:10,marginBottom:15}}>
                    <Text style={{fontSize:20}}>Total Amount</Text>
                    <Text style={{fontSize:20}}>Rs.{products.reduce(getTotalCost,0)}</Text>
                </View>

            </ScrollView>

            <View style={styles.bottomContainer}>

                <View style={{flex:1,alignItems:'center',padding:10,backgroundColor:'#F8F8F8',paddingBottom:Platform.OS === 'ios' ? 25 : 0}}>
                    <Text style={{fontSize:20}}>Rs.{products.reduce(getTotalCost,0)}</Text>
                </View>

                <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'#48CCCD',padding:10}}>
                        <Text style={{fontSize:20,color:'white'}}>
                            Order Now
                        </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    addressStyle : {
        margin:10,
        padding:10,
        backgroundColor: 'white',
  
        borderRadius:10
    },
    productListStyle : {
        backgroundColor: 'white',
      
  
       
        borderBottomWidth:1,
    margin:8,
        padding:10,
        flex:1,
        flexDirection:'row'
    },
    bottomContainer: {
        flexDirection:'row',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
    addressBtnStyle : {
        backgroundColor:'#48CCCD',
        padding:8,
        marginTop:10,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height: 1 
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 7,
    }
})
export default OrderSummary
