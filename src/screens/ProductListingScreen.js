import React, { useState, useEffect } from 'react'
import { View, Text,Button,ScrollView,StatusBar,FlatList,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import Card from '../components/Card';
import {Products} from '../data/Products'
import { Overlay } from 'react-native-elements';


import { Toast } from 'native-base'
import { useNavigation } from '@react-navigation/native'

let arr = []
function ProductListingScreen(props) {
    const navigation = useNavigation()
    const route = useRoute();
    const {item} = route.params   //colors
   const [visible, setVisible] = useState(false);
   const [bedActive, setBedActive] = item.category === 'bed' ? useState(true) :  useState(false)
   const [sofaActive, setSofaActive] = item.category === 'sofa' ? useState(true) : useState(false)
   const [chairActive, setChairActive] = item.category === 'chair' ? useState(true) : useState(false)
   const [tableActive, setTableActive] = item.category === 'table' ? useState(true) : useState(false)
   
   const [categoryVisible, setCategoryVisible] = useState(false);
    
   const [colorVisible, setColorVisible] = useState(false);

   const [ratingVisible, setRatingVisible] = useState(false);
   
   const [priceVisible, setPriceVisible] = useState(false);
   const [filterlist, setFliterlist] = useState({
    category: '',
    color: '',
    rating: '',
    price: ''
})
   const toggleCategoryOverlay = () => {
     setCategoryVisible(!categoryVisible);
   };

   const toggleColorOverlay = () => {
       setColorVisible(!colorVisible);
   };

   const toggleRatingOverlay = () => {
       setRatingVisible(!ratingVisible);
   };

   const togglePriceOverlay = () => {
       setPriceVisible(!priceVisible);
   };
  const [filteredData, setFilteredData] = useState([])
    const [filtered, setFiltered] = useState(false) //initial value of filtered setfiltered will change it to true
    var data = []
    item.category != 'All Products' ?    //drawer and carousel
        data = Products.filter(product => product.product_category === item.category)        
     : ( data = Products )
     let filteredProduct = []

     const filterFunction = ({item}) => {   //filter
         item.category.map(category => {
             const array = Products.filter(product => {product.product_category === category ? filteredProduct.push(product) : null} )
             setFilteredData(filteredProduct)
             arr = []
             setFiltered(true)

         } )

     }
 
     const colorFilter = (color) => {
        data = filteredData.filter(product => product.product_color === color );
        if (data.length > 0)
            setFilteredData(data)
        else Toast.show({
            text:"No Products Available of that Color"
        })
    }

return (
    
            <View style={{flex:1}}>
                <StatusBar backgroundColor="#48CCCD" />
                   {
                       !filtered?
                       <FlatList
                        
                        data={data}
                        keyExtractor={({id}) => id.toString()}
                        renderItem={({item}) => (
                            <Card item={item} />
                        )}
                    />
                    :
                    <FlatList
                        
                        data={filteredData}
                        keyExtractor={({id}) => id.toString()}
                        renderItem={({item}) => (
                            <Card item={item} />
                        )}
                    />
                   }
                
            

                 
                <View style={styles.footerButtonStyle}>
                <TouchableOpacity style={styles.btnStyle} onPress={toggleCategoryOverlay} >
                    
                    <Text style={{textAlign:'center',fontSize:20,color:'white'}}>
                        Category
                    </Text>
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStyle} onPress={toggleColorOverlay} >
                    
                    <Text style={{textAlign:'center',fontSize:20,color:'white'}}>
                        Color
                    </Text>
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStyle} onPress={toggleRatingOverlay} >
                    
                    <Text style={{textAlign:'center',fontSize:20,color:'white'}}>
                        Ratings
                    </Text>
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStyle} onPress={togglePriceOverlay} >
                    
                    <Text style={{textAlign:'center',fontSize:20,color:'white'}}>
                        Price
                    </Text>
                
                </TouchableOpacity>


                <Overlay isVisible={categoryVisible} onBackdropPress={toggleCategoryOverlay}>
                    <View style={{padding:25,alignItems:'center',width:250}}>
                        
                        <Text style={{fontSize:25}}>Select Category</Text>
                        <View style={{borderBottomWidth:2, borderBottomColor:'#48CCCD',width:'100%'}}>
                            <Text> </Text>
                        </View>

                        <View style={{marginTop:20,marginBottom:5,justifyContent:'center'}}>

                           

                            <TouchableOpacity 
                                style={{backgroundColor: bedActive ? '#48CCCD' : 'white', borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2,marginBottom:15}} 
                                onPress = {
                                    () => { navigation.navigate('ProductListingScreen',{item:{category:'bed'}}) ; setBedActive(true) ; setSofaActive(false) ; setChairActive(false) ; setTableActive(false) ; {toggleCategoryOverlay()}}    
                                    // () => {filterFunction({item:{category:['bed','sofa','chair']}}) ; {toggleOverlay()} }
                                }
                            >
                                <Text style={{color: bedActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                                    Bed
                                </Text>
                            </TouchableOpacity>




                            <TouchableOpacity 
                                style={{backgroundColor: sofaActive ? '#48CCCD' : 'white', borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2,marginBottom:15 }} 
                                onPress = {
                                    () => { navigation.navigate('ProductListingScreen',{item:{category:'sofa'}}) ; setSofaActive(true); setBedActive(false); setChairActive(false); setTableActive(false) ; {toggleCategoryOverlay()}}    
                                }
                            >
                                <Text style={{color: sofaActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                                    Sofa
                                </Text>
                            </TouchableOpacity>

  

                            <TouchableOpacity 
                                style={{backgroundColor: chairActive ? '#48CCCD' : 'white' , borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2,marginBottom:15}} 
                                onPress = {
                                    () => { navigation.navigate('ProductListingScreen',{item:{category:'chair'}}) ; setChairActive(true) ; setBedActive(false) ; setSofaActive(false) ; setTableActive(false) ; {toggleCategoryOverlay()}}    
                                }    
                            >
                                <Text style={{color: chairActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                                    Chair
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity 
                                style={{backgroundColor: tableActive ? '#48CCCD' : 'white', borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2}} 
                                onPress = {
                                    () => { navigation.navigate('ProductListingScreen',{item:{category:'table'}}) ; setTableActive(true); setBedActive(false) ; setSofaActive(false) ; setChairActive(false) ;{toggleCategoryOverlay()}}    
                                }
                            >
                                <Text style={{color: tableActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                                    Table
                                </Text>
                            </TouchableOpacity>

    

                        </View>

                        
                    </View>

                    
                </Overlay>

                <Overlay isVisible={colorVisible} onBackdropPress={toggleColorOverlay}>
                    <View style={{padding:25,alignItems:'center',width:250}}>
                        
                        <Text style={{fontSize:25,textAlign:'center'}}>Select Color</Text>
                        <View style={{borderBottomWidth:2, borderBottomColor:'dodgerblue',width:'100%'}}>
                            <Text> </Text>
                        </View>

                        <View style={{marginTop:20,marginBottom:5,justifyContent:'center'}}>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} 
                                //onPress = {() => {setFliterlist({...filterlist, color:'brown'}); allFilter()}}
                                onPress = { () => {colorFilter('brown');toggleColorOverlay()} }
                            >
                                <View style={{backgroundColor:'brown',height:15,width:15}}></View>
                                <Text style={{fontSize:20,marginLeft:10}}>Brown</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:10}} 
                                onPress = { () => {colorFilter('black');toggleColorOverlay()} }
                            >
                                <View style={{backgroundColor:'black',height:15,width:15}}></View>
                                <Text style={{fontSize:20,marginLeft:10}}>Black</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:10}} 
                                onPress = { () => {colorFilter('grey');toggleColorOverlay()} }
                            >
                                <View style={{backgroundColor:'grey',height:15,width:15}}></View>
                                <Text style={{fontSize:20,marginLeft:10}}>Gery</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:10}}
                                onPress = { () => {colorFilter('red');toggleColorOverlay()} }
                            >
                                <View style={{backgroundColor:'red',height:15,width:15}}></View>
                                <Text style={{fontSize:20,marginLeft:10}}>Red</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Overlay>


                {/* <Overlay isVisible={colorVisible} onBackdropPress={toggleColorOverlay}>
                    <View style={{padding:25,alignItems:'center',width:250}}>
                        
                        <Text style={{fontSize:25,textAlign:'center'}}>Select Color</Text>
                        <View style={{borderBottomWidth:2, borderBottomColor:'#48CCCD',width:'100%'}}>
                            <Text> </Text>
                        </View>

                        <View style={{marginTop:20,marginBottom:5,justifyContent:'center'}}>

                        </View>
                    </View>
                </Overlay> */}

                <Overlay isVisible={ratingVisible} onBackdropPress={toggleRatingOverlay}>
                    <View style={{padding:25,alignItems:'center',width:250}}>
                        
                        <Text style={{fontSize:25,textAlign:'center'}}>Select Rating</Text>
                        <View style={{borderBottomWidth:2, borderBottomColor:'#48CCCD',width:'100%'}}>
                            <Text> </Text>
                        </View>

                        <View style={{marginTop:20,marginBottom:5,justifyContent:'center'}}>

                        </View>
                    </View>
                </Overlay>


                <Overlay isVisible={priceVisible} onBackdropPress={togglePriceOverlay}>
                    <View style={{padding:25,alignItems:'center',width:250}}>
                        
                        <Text style={{fontSize:25,textAlign:'center'}}>Select Price Range</Text>
                        <View style={{borderBottomWidth:2, borderBottomColor:'#48CCCD',width:'100%'}}>
                            <Text> </Text>
                        </View>

                        <View style={{marginTop:20,marginBottom:5,justifyContent:'center'}}>

                        </View>
                    </View>
                </Overlay>




</View>

                 
</View>
                
    
           

  
  );
}

export default ProductListingScreen;

const styles = StyleSheet.create({
    chipsContainer : {
        flexDirection:'row',
        backgroundColor:'dodgerblue',
        padding:15,
        justifyContent:'space-evenly',
        alignItems:'center',
        
    },
    chips : {
        paddingLeft : 10,
        paddingRight :10,
        paddingTop : 5,
        paddingBottom : 5,
        backgroundColor: 'dodgerblue',
        borderRadius:17,
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height: 1 
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 7,
    },
    chipsText : {
        color : 'white',
        fontSize : 16
    },
    footerButtonStyle : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    filterButtonStyle : {
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        flexDirection:'column'
    },
    filterTextStyle : {
        fontSize: 20
    },
    checkBoxStyle : {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    },
    btnStyle : {
        alignItems:'center',
        height:60,flex:1,
        backgroundColor:'#48CCCD',
        justifyContent:'center'
    }
})