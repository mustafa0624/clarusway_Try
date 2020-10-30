import React from "react";
import {SafeAreaView,Text,View} from "react-native";
import ComponentA from './pages/ComponentA'
import ComponentB from './pages/ComponentB'


const Main=(props)=>{

    return(
        <SafeAreaView style={{flex:1}}>

        <ComponentA/>
        <ComponentB/>
            

        </SafeAreaView>

    )
}

export default Main