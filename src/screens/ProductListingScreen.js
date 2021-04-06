import React, { useState, useEffect } from 'react'
import { View, Text,Button,ScrollView,StatusBar,FlatList,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import {globalStyles} from '../styles/globalStyles';
import Card from '../components/Card';
import {Products} from '../data/Products'
import { Overlay } from 'react-native-elements';


import { useNavigation } from '@react-navigation/native'

let arr = []
function ProductListingScreen(props) {
    const navigation = useNavigation()
    const route = useRoute();
    const {item} = route.params
   const [visible, setVisible] = useState(false);
   const [bedActive, setBedActive] = item.category === 'bed' ? useState(true) :  useState(false)
   const [sofaActive, setSofaActive] = item.category === 'sofa' ? useState(true) : useState(false)
   const [chairActive, setChairActive] = item.category === 'chair' ? useState(true) : useState(false)
   const [tableActive, setTableActive] = item.category === 'table' ? useState(true) : useState(false)
   const toggleOverlay = () => {
     setVisible(!visible);
   };

  const [filteredData, setFilteredData] = useState([])
    const [filtered, setFiltered] = useState(false)
    var data = []
    item.category != 'All Products' ? 
        data = Products.filter(product => product.product_category === item.category)        
     : ( data = Products )
     let filteredProduct = []

     const filterFunction = ({item}) => {
         item.category.map(category => {
             const array = Products.filter(product => {product.product_category === category ? filteredProduct.push(product) : null} )
             setFilteredData(filteredProduct)
             arr = []
             setFiltered(true)

         } )

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
                    <TouchableOpacity style={{alignItems:'center',height:60,flex:1,backgroundColor:'#48CCCD',justifyContent:'center'}} onPress={toggleOverlay} >
                    <Text style={{textAlign:'center',fontSize:20,color:'white'}}>
                        Filter
                    </Text>
                    </TouchableOpacity>

<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
    <View style={{padding:25,alignItems:'center',width:250}}>
        <Text style={{fontSize:25}}>Select Category</Text>
        <View style={{borderBottomWidth:2, borderBottomColor:'#48CCCD',width:'100%'}}>
            <Text> </Text>
        </View>

        <View style={{marginTop:20,marginBottom:5,justifyContent:'center'}}>



            <TouchableOpacity 
                style={{backgroundColor: bedActive ? '#48CCCD' : 'white', borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2,marginBottom:15}} 
                onPress = {
                    () => { navigation.navigate('ProductListingScreen',{item:{category:'bed'}}) ; setBedActive(true) ; setSofaActive(false) ; setChairActive(false) ; setTableActive(false) ; {toggleOverlay()}}    
                
                }
            >
                <Text style={{color: bedActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                    Bed
                </Text>
            </TouchableOpacity>



            <TouchableOpacity 
                style={{backgroundColor: sofaActive ? '#48CCCD' : 'white', borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2,marginBottom:15 }} 
                onPress = {
                    () => { navigation.navigate('ProductListingScreen',{item:{category:'sofa'}}) ; setSofaActive(true); setBedActive(false); setChairActive(false); setTableActive(false) ; {toggleOverlay()}}    
                }
            >
                <Text style={{color: sofaActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                    Sofa
                </Text>
            </TouchableOpacity>


            <TouchableOpacity 
                style={{backgroundColor: chairActive ? '#48CCCD' : 'white' , borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2,marginBottom:15}} 
                onPress = {
                    () => { navigation.navigate('ProductListingScreen',{item:{category:'chair'}}) ; setChairActive(true) ; setBedActive(false) ; setSofaActive(false) ; setTableActive(false) ; {toggleOverlay()}}    
                }    
            >
                <Text style={{color: chairActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                    Chair
                </Text>
            </TouchableOpacity>



            <TouchableOpacity 
                style={{backgroundColor: tableActive ? '#48CCCD' : 'white', borderRadius:5,paddingLeft:15,paddingRight:15, paddingBottom:2,paddingTop:2}} 
                onPress = {
                    () => { navigation.navigate('ProductListingScreen',{item:{category:'table'}}) ; setTableActive(true); setBedActive(false) ; setSofaActive(false) ; setChairActive(false) ;{toggleOverlay()}}    
                }
            >
                <Text style={{color: tableActive ? 'white' : 'black',fontSize:20,textAlign:'center'}}>
                    Table
                </Text>
            </TouchableOpacity>


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
    }

})