import React from "react";
import { SafeAreaView, Text, View } from "react-native";


const ComponentB = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:"#bdbdbd"}}>
            <View style={{flex:1}}>
                <Text>ComponenetB</Text>

            </View>
        </SafeAreaView>

    )
}

export default ComponentB