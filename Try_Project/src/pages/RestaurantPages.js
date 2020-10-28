import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native";

const RestaurantPages = (props) => {
    const [datei, setDatei] = useState([])
    const { selectedCity } = props.route.params


    const renderData = async () => {
        const {data} = await axios.get("https://opentable.herokuapp.com/api/restaurants",{params:{city:selectedCity}})
        console.log(data.restaurants)
        setDatei(data.restaurants)

    }

    useEffect(() => {
        renderData()
    }, [])

    return (
        <SafeAreaView>
            <View>
                <Text>
                    {selectedCity}
                </Text>
                <FlatList
                    data={datei}
                    renderItem={({ item }) => <Text>{item}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}


export { RestaurantPages }