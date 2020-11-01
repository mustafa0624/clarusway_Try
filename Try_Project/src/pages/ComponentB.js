import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux"


const ComponentB = (props) => {
    const myCounter = useSelector(state => state.counter)
    const myName= useSelector(state=>state.Name)
    return (

        <View style={{ flex: 1, backgroundColor: "#bdbdbd" }}>
            <Text>ComponenetB</Text>
            <Text style={{fontSize:30,color:"red"}}>{myCounter}</Text>
            <Text style={{fontSize:30,color:"red"}}>{myName}</Text>

        </View>


    )
}

export default ComponentB