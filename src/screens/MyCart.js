import { View, Text, FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

import { connect } from 'react-redux'

import DisplayCartProducts from '../components/DisplayCartProducts'

function MyCart(props) {
    const getTotalCost = (sum , product) => sum + product.product.product_price * product.quantity

    return (

        <>
{
                props.cartItems.length > 0 ?
            
                <>
            
            
            <View style={{flex:1,backgroundColor:'white'}}>
                
                    <FlatList 
                    data = {props.cartItems}
                    renderItem = { ({item}) => (
                        <View>
                            <DisplayCartProducts item={item.product} quantity={item.quantity} />
                        </View>
                    )}
                    keyExtractor={item => item.product.id.toString()}
                    />

                
            </View>

            <View style={styles.bottomContainer}>

<View style={{flex:1,alignItems:'center',padding:10,backgroundColor:'#F8F8F8'}}>
    <Text style={{fontSize:20}}>Rs.{props.cartItems.reduce(getTotalCost,0)}</Text>
</View>

<TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'tomato',padding:10}}>
        <Text style={{fontSize:20,color:'white'}}>
            Order Now
        </Text>
</TouchableOpacity>
</View>
</>

:

<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
{/* <Image 
source={require('../../assets/ProductImages/emptycart.webp')}
style={{height:200,width:200,resizeMode:'stretch'}}
/> */}
<Text style={{fontSize:20}}>Cart is Empty</Text>
</View>

}


        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.UserCart.cartItems
    }
}
const styles = StyleSheet.create({
    bottomContainer: {
        flexDirection:'row',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})
export default connect(mapStateToProps)(MyCart)
