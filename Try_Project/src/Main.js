import React from "react";
import { SafeAreaView, Text, View } from "react-native";


import { Provider } from "react-redux"
import { createStore } from "redux"

import ComponentA from './pages/ComponentA'
import ComponentB from './pages/ComponentB'
import { initialState, reducer } from "./content"


const store = createStore(reducer, initialState)

const Main = (props) => {

    return (
        <Provider store={store}>

            <SafeAreaView style={{ flex: 1 }}>

                <ComponentA />
                <ComponentB />


            </SafeAreaView>
        </Provider>

    )
}

export default Main