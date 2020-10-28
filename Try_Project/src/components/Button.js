import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const Buttons = (props)=>{
    // const [input,setInput]=useState([])
    return(
        <SafeAreaView style={styles.container}>
            <TextInput
            placeholder={props.placeholder}
            onChangeText={text=>props.onSelect(text)}
            
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#eceff1",
        height:Dimensions.get("window").height*0.06
    }
})
export {Buttons}