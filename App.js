import React from "react";
import {View,TextInput,Text,FlatList,SafeAreaView,StyleSheet, Dimensions} from 'react-native';
import { create } from "react-test-renderer";
import patika_store from './src/patika_store_data.json';
import NewsCard from "./src/components/NewsCard";
import SearchBox from "./src/components/NewsCard/SearchBox";

const App=()=>{
  const renderitem=({item})=><NewsCard news ={item}/>;
  return(
    <SafeAreaView style={styles.container}>
      <Text style ={styles.title}>Patika Store </Text>
      <View style={styles.flatStyle}>
      <FlatList
      ListHeaderComponent={() => (<SearchBox />)} 
      horizontal={false} 
      numColumns={2}
      data={patika_store}
      renderItem={renderitem}//Buradaki
      />
    </View>
    
    </SafeAreaView>
  );
}
const styles =StyleSheet.create({
  title :{
    fontSize:35,
    fontWeight:'bold',
    color:'orange',
    textAlign:'center',
    fontStyle:'italic'
  },
  container:{
    flex:1,
    
    
  },
 
  searchBar:{
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  flatStyle:{
    
    flex:1
  }
})
export default App;