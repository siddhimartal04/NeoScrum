import React, {useState,useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity,
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {globalStyles} from '../styles/globalStyles'
import RBSheet from "react-native-raw-bottom-sheet";
import StarRating from 'react-native-star-rating'
import Swiper from 'react-native-swiper'
import { Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native'
import Modal from 'react-native-modal';
import Share from 'react-native-share';

import { handleAddToCart } from '../redux/CartRedux/CartAction'
import { Toast } from 'native-base';
import { connect } from 'react-redux'
const ProductDetail = (props) => {


    const MyCustomShare =async() => {
        const shareOptions ={
            message:'this is msg',
        }
        try{
            const ShareResponse =await Share.open(shareOptions);
        }
        catch(error){
            console.log('error =>',error)
        }
    };
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const refRBSheet = useRef();

    const route = useRoute();

    const {item} = route.params
    const [starCount, setStarCount] = useState(1);
    const handleStarPress = (rating) => {
        setStarCount(rating);
    }
    var includesProduct = false
    return (
        <View style={globalStyles.container}>
            <ScrollView style={globalStyles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.product_name}</Text>
                    <Text style={styles.category}>{item.product_category}</Text>
                    <View style={styles.headerBottom}>
                        <Text style={styles.material}>{item.product_material}</Text>
                        <StarRating 
                            maxStars={5}
                            rating={item.rating}
                            readonly={true}
                            starSize={20}
                            fullStarColor={'#ffd60a'}
                            emptyStarColor={'#ffd60a'}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyHead}>
                        <Text>Rs.{item.product_price} </Text>
                        <FontAwesome5 
                            name='share'
                            size={20}
                            color={'black'}
                            
                            onPress={MyCustomShare} 
                        />
                    </View>
                    <View>
                        <FontAwesome5 
                            name='shopping-cart'
                            size={20}
                            color={'#f5f3f4'}
                            style={styles.icon}
                            onPress={
                                () => {
                                    props.isLogin ? (        
                                        props.cartItems.map(product => product.product.id === item.id ? includesProduct = true : null),
                                        !includesProduct ?

                                        (
                                            props.handleAddToCart(item)

                                        )
                                        : 
                                        Toast.show({
                                            text:'Product already added to cart',
            
                                        })
            
                                    
                                        )
                                                                :
                                    Toast.show({
                                        text:'Need to login first'
                                    })
            
                                }
                            }
                            color={'white'}
                        />
                        <Swiper 
                            style={{height: 240,}}
                            loop
                            activeDotColor={'#48CCCD'}
                        >
                        {
                            item.product_subimages.map((item, index)=> (
                            <View style={styles.carousel} key={index}>
                                <TouchableWithoutFeedback>
                                    <Image 
                                        source={item}
                                        style={styles.image}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            ))
                        }
                        </Swiper>
                         </View>
                    
                </View>
                <View style={styles.buttonGroup}>
                        <View style={styles.buyNow}>
                            <TouchableOpacity >
                                <Text style={styles.buttonTitle}>BUY NOW</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rate}>
                            <TouchableOpacity onPress={toggleModal} >
                                <Text style={styles.buttonTitle}>RATE</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible} style={{backgroundColor:'white',width:300,marginBottom:200,alignItems:'center',paddingTop:10,paddingBottom:10,paddingLeft:10,marginTop:150,marginLeft:50}}>
          <View style={{flex: 1,justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.title}>{item.product_name}</Text>
            <Image 
                                        source={item.product_images}
                                        style={{width:190,height:190}}
                                    />
                                        <StarRating 
                                        maxStars={5}
                                        starSize={30}
                                        fullStarColor={'#ffd60a'}
                                        emptyStarColor={'#ffd60a'}
                                        halfStarEnabled={true}
                                        disabled={false}
                                        rating={starCount}
                                        selectedStar={(rating) => handleStarPress(rating)}
                                    />
            <Button title="Rate Now" onPress={toggleModal}  />
          </View>
        </Modal>
        <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      
      {/* <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
    <View style={{backgroundColor:'#F8F8F8',flex:1,marginLeft:10}}>
                                
                                <Text style={{fontSize:20}}>Share with</Text>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                        <Icon name="whatsapp" size={25} style={{marginRight:10,color:'#34A34F'}} />
                                        <Text style={{fontSize:20}}>WhatsApp</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                    <Icon name="facebook" size={25} style={{marginRight:10, color:'#3B5998'}}  />
                                        <Text style={{fontSize:20}}>  Facebook</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                    <Icon name="google" size={25} style={{marginRight:10, color:'#3B5998'}}  />
                                        <Text style={{fontSize:20}}>  Gmail</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                    <Icon name="twitter" size={25} style={{marginRight:10, color:'#3B5998'}}  />
                                        <Text style={{fontSize:20}}>  Twitter</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                        <Icon name="instagram" size={25} style={{marginRight:10,color:'purple'}}  />
                                        <Text style={{fontSize:20}}>Instagram</Text>
                                    </View>
                                
                                
                            </View>
                        
      </RBSheet> */}
    </View>
                        </View>
                        
                    </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginBottom: 14,
        // backgroundColor: 'pink'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    category: {
        fontSize: 18,
        color: 'grey',
        marginTop: -4,
    },
    headerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
        // backgroundColor: 'coral'
    },
    material: {
        // backgroundColor: 'grey',
        width: '50%',
        fontSize: 16,
        flexWrap: 'wrap',
        color:'black',
    },
    body: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        padding: 10,
        elevation: 10,
    },
    bodyHead: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    carousel: {
        padding: 10,
    },
    image: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
        borderRadius: 4,
    },
    icon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 1,
        backgroundColor: '#48CCCD',
        padding: 15,
        borderRadius: 30,
        elevation: 6,
    },
    description: {
        marginTop: 10,
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        marginTop:220
    },
    buyNow: {
        flex: 1,
        backgroundColor: '#000',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 4,
        marginRight: 10,
    },
    rate: {
        marginLeft: 10,
        flex: 1,
        backgroundColor: '#000',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 4
    },
    buttonTitle: {
        color: '#eee',
        letterSpacing: 1,
        paddingVertical: 14,
    }
});

const mapStateToProps = (state) => {
    return {
        cartItems: state.UserCart.cartItems,
        isLogin: state.AuthUser.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart : (item) => dispatch(handleAddToCart(item))
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(ProductDetail)