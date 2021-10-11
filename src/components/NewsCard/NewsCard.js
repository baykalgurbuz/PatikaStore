import React from "react";
import {Text ,View,Image} from 'react-native';
import styles from './NewsCard.styles'


const NewsCard = ({news}) => {
    return(
        <View style ={styles.container}>
            <View style={styles.imageContainer}>
            <Image style ={styles.image} source={{uri:news.imgURL}}></Image>
            </View>
            <Text style={styles.description}>{news.title}</Text>
            <Text style={styles.price}>{news.price}</Text>
            <Text style={styles.inStock}>{news.inStock === true ? ' ' : 'STOKTA YOK' }</Text>
            
        </View>
    );
};
export default NewsCard;