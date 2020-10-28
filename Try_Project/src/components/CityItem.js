
import React from "react";
import { StyleSheet, Text,TouchableOpacity } from "react-native";

const CityItem =(props)=>{

    return(
        <TouchableOpacity
        onPress={props.onSelect}
        style={styles.continer}>
            <Text style={styles.text} >{props.value}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    continer:{
        alignItems:"center",
        margin:3,
        backgroundColor:"#c8e6c9",
        borderRadius:10
    },
    text:{
        fontSize:18
    }
})



export {CityItem}