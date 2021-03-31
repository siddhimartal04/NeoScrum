import * as React from 'react';
import { View, Text,TextInput,Button,ScrollView,FlatList,TouchableWithoutFeedback,Dimensions,Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import Card from '../components/Card';
import {TopFiveProducts} from '../data/TopFiveProducts'


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
function HomeScreen(props) {
  const navigation = useNavigation();

  return (
   
    <View style={{ flex: 1,  }}>
     
            <View
              style={{
                marginBottom: 12,
                marginHorizontal: 5,
              }}>
                
              <Icon
                name={'search'}
                color={'black'}
                solid
                size={21}
                style={{
                  position: 'absolute',
                  left: 16,
                  top: 22,
                  opacity: 0.5,
                  zIndex: 1,
                }}
                onPress={() => {}}
              />
              <TextInput
                style={styles.search}
                placeholder="Search here.."
              />
            </View>
          
            <FlatList
                        ListHeaderComponent={          
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
          }
                        data={TopFiveProducts}
                        keyExtractor={({id}) => id.toString()}
                        renderItem={({item}) => (
                            <Card item={item} />
                        )}
                    />
            
                    



      </View>
   
      
  );
}







export default HomeScreen;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    height:200,
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
    width:'100%',
    height:'100%',
    borderRadius:6
},
  search: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginTop: 7,
    padding: 10,
    paddingHorizontal: 12,
    fontSize: 17,
    paddingLeft: 45,
    paddingRight: 40,
    borderRadius: 5,
    marginHorizontal: 2,
  },

 
})
 