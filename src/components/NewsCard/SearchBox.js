import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'


const SearchBox = () => {
    return (
        <View style={styles.searchBoxArea}>
            <View style={styles.searchInputContainer}><TextInput placeholder="SEARCH" style={styles.searchBox} textAlign={'center'} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBoxArea: {
        margin: 20,
    },
    searchInputContainer: {
       
        borderRadius: 20,
        backgroundColor: 'white',
    },
    searchBox: {
        
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
    },
})

export default SearchBox