import { Text , View, Image, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import { handleRemoveFromCart,handleUpdateProductQuantity } from '../redux/CartRedux/CartAction'
function DisplayCartProducts(props) {
    return (

        <View style={styles.container}>
                <Image 
                source={props.item.product_images}
                style={styles.imageStyles}
                />
                <View style={styles.productTextStyle}>
                
                    <View style={{flex:1,justifyContent:'space-between',maxWidth:'75%',marginTop:10,marginBottom:10}}>
                        
                        <View>

                            <Text style={styles.productNameStyles}>
                                {props.item.product_name}
                            </Text>

                            <Text style={{color:'grey',fontSize:16}}>{props.item.product_category}</Text>
                        
                        </View>

                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            
                            <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
                                Rs.{props.item.product_price}
                            </Text>                            
                        
                            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
                                
                                
                                <TouchableOpacity 
                                style={{backgroundColor:'white',paddingLeft:5,marginRight:10,paddingRight:5}}
                                onPress={
                                    () => {
                                        props.handleUpdateProductQuantity(props.item,props.quantity+1)
                                    }
                                }
                                >
                                    
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                                        +
                                    </Text>

                                </TouchableOpacity>

                                <View style={{backgroundColor:'dodgerblue',paddingLeft:7,paddingRight:7,borderRadius:20}}>
                                    <Text style={{fontSize:20,color:'white'}}>{props.quantity}</Text>
                                </View>

                                <TouchableOpacity 
                                style={{backgroundColor:'white',paddingLeft:6,marginLeft:10,paddingRight:6}}
                                onPress={
                                    () => {
                                        props.quantity > 1 ?
                                            props.handleUpdateProductQuantity(props.item,props.quantity-1)
                                        : null
                                    }
                                }
                                >
                                    
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                                        -
                                    </Text>

                                </TouchableOpacity>
                            </View>                      
                        
                        </View>
                    
                    </View>
                
                </View>
                
                
                <TouchableOpacity  style={{position:'absolute',right:5,top:5}} onPress={() => props.handleRemoveFromCart(props.item)}>
                    <Icon 
                    name={'delete'}
                   
                    size={20}
                    
                    />
                </TouchableOpacity>

            </View>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleRemoveFromCart : (item) => dispatch(handleRemoveFromCart(item)),
        handleUpdateProductQuantity : (item,quantity) => dispatch(handleUpdateProductQuantity(item,quantity))
    }
}
const styles = StyleSheet.create({
    container : {
        marginTop:10,
        flex:1,
        flexDirection:'row',
        //alignItems:'center',
        borderColor:'lightgrey',
        //width:'90%'
        marginLeft:10,
        marginRight:10,
        backgroundColor: 'white',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height: 1 
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 7,
        borderRadius:20,
        // maxWidth:'90%'
        marginBottom:10
    },
    imageStyles : {
        height:120,
        width:120,
        margin:10,
        resizeMode:'stretch',
        borderRadius:5
    },
    productNameStyles : {
        fontSize:22,
        alignSelf:'flex-start',
        fontWeight:'bold'
    },
    productTextStyle : {
        //flex:1,
        //flexDirection:'column',
        //justifyContent:'space-between',
        //alignItems:'center'
        flexGrow:1,
        minWidth:'75%'
    }
})


export default connect(null,mapDispatchToProps)(DisplayCartProducts)