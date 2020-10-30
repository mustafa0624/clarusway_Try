import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux"

const ComponentA = (props) => {
    const myCounter = useSelector(globalState => globalState.counter) 
    const dispatch = useDispatch();

    return (

        <View style={{ flex: 1 }}>

            <Text>ComponenetAaa</Text>
        </View>




    )
}

export default ComponentA