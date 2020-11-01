
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import ComponentA from './pages/ComponentA'
import ComponentB from './pages/ComponentB'
import reducer from "./content/reducer"
import initialState from "./content/store"
import {createStore} from "redux"
import {Provider} from "react-redux"


const store = createStore(reducer,initialState)



const Main = (props) => {
    // const myIcon = <Icon name="rocket" size={} color="#900" />;

    return (

        <Provider store={store}>

        <SafeAreaView style={{ flex: 1 }}>

            <ComponentA />
            <ComponentB />
            {/* <Text>{myIcon}</Text> */}

        </SafeAreaView>
        </Provider>


    )
}

export default Main