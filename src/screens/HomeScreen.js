import * as React from 'react';
import { View, Text,TextInput,Button,StatusBar,FlatList,TouchableWithoutFeedback,Dimensions,Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import {TopFiveProducts} from '../data/TopFiveProducts'
/**
 * @author Siddhi Martal
 * @param 
 * @description This is the homescreen that displays a carousel for categories of products available and top products from each category for the week
 * @returns JSX with a carousel and a list of top products from each category
 */

function HomeScreen(props) {
  const navigation = useNavigation();

  return (
   

             
    <View style={{ flex: 1,  backgroundColor:'white',elevation:1}}>
        <StatusBar backgroundColor="#48CCCD" />
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
            <View style={{borderBottomWidth:1,opacity:0.5, borderBottomColor:'grey',width:'100%'}}>
            
        </View>
          <View style={{marginTop:20}}>
            <FlatList
                        ListHeaderComponent={     <Carousel/>
          }
                        data={TopFiveProducts}
                        keyExtractor={({id}) => id.toString()}
                        renderItem={({item}) => (
                            <Card item={item} />
                        )}
                    />
            </View>
                    



      </View>
   
      
  );
}







export default HomeScreen;

const styles = StyleSheet.create({

  search: {
    borderWidth: 1,
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
 