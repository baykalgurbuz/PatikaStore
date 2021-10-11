import { StyleSheet ,Dimensions} from "react-native";
import { create } from "react-test-renderer";


export default StyleSheet.create({
    container:{
       
        width:Dimensions.get("window").width/2, 
        backgroundColor:'white',
        margin:5,
        flex:1,
        borderRadius:10,
        padding:10,
        borderWidth:1,
        borderColor:'orange'

       
    },
    image:{
       width:'100%',
        height:Dimensions.get("window").height/4,
        borderRadius:20,
        resizeMode:'contain',
        
                
    },
    imageContainer:{
        height:Dimensions.get("window").height/3
    },
    description:{
        fontWeight:'bold',
        fontSize:15
    },
    price:{
        color: 'grey',
        fontWeight: 'bold',
        //fontSize:15
    },
    inStock:{
        fontWeight: 'bold',
        color: 'red',

    },
    inner_container:{
        padding: 10,
        paddingBottom: 0,
    }
})