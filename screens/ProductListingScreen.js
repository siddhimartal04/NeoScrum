import * as React from 'react';
import { View, Text,Button,ScrollView,StatusBar,FlatList,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import {globalStyles} from '../styles/globalStyles';
import Card from '../components/Card';
import {Products} from '../data/Products'
function ProductListingScreen({navigation}) {
    const route = useRoute();
    const {item} = route.params
    item.category != 'All Products' ? (
        filteredData = Products.filter(product => product.product_category === item.category)
   ) : ( filteredData = Products )
    
    
return (
    
            <View style={globalStyles.container}>
                <StatusBar backgroundColor="#48CCCD" />
                   
                <FlatList
                        
                        data={filteredData}
                        keyExtractor={({id}) => id.toString()}
                        renderItem={({item}) => (
                            <Card item={item} />
                        )}
                    />
            

                   </View>
           

  
  );
}

export default ProductListingScreen;
