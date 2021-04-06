import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { connect } from 'react-redux'

import DisplayCartProducts from '../components/DisplayCartProducts'

function MyCart(props) {
    return (

        <>

            
            
            <View style={{flex:1,backgroundColor:'white'}}>
                
                    <FlatList 
                    data = {props.cartItems}
                    renderItem = { ({item}) => (
                        <View>
                            <DisplayCartProducts item={item} />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    />

                
            </View>




        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.UserCart.cartItems
    }
}

export default connect(mapStateToProps)(MyCart)
