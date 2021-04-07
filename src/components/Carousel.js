import * as React from 'react';
import { View,TouchableWithoutFeedback,Dimensions,Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {globalStyles} from '../styles/globalStyles';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const colors= [
    {
        id: 1,
        source: require('../assets/bed.jpg'),
        category:'bed'
    },
    {
        id: 2,
        source: require('../assets/chair.jpeg'),
        category:'chair'
    },
    {
        id: 3,
        source: require('../assets/sofa.jpeg'),
        category:'sofa'
    },
    {
        id: 4,
        source: require('../assets/table.jpeg'),
        category:'table'
    },
  ]
  function Carousel() {
    const navigation = useNavigation();
  
    return (
   <View style={globalStyles.container}>
<View style={styles.wrapper}>
<SwiperFlatList
   autoplay
   autoplayDelay={2}
   autoplayLoop
   showPagination
   data={colors}
   renderItem={({ item }) => (
     <View style={[styles.child]}>
         <TouchableWithoutFeedback onPress={() => navigation.push('ProductListingScreen',{item})}>
                             <Image 
                             source={item.source}
                             style={styles.imageStyle}
                             />
           </TouchableWithoutFeedback>
       
     </View>
     
  )}
 />
{/* <View style={{backgroundColor:'grey',alignItems:'center',marginTop:30,paddingTop:20,paddingBottom:20}}>
<Text style={{fontSize:20 , color:'white'}}>
  Products trending this week!!

</Text>
</View> */}
</View>
</View>
    );}
export default Carousel;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    height:200,
    marginBottom:30
  },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
  
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  imageStyle : {
    resizeMode:'stretch',
    width:'90%',
    height:'100%',
    borderRadius:6
},

 
})
 