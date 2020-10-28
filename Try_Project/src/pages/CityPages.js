import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { CityItem } from "../components"


const CityPages = (props) => {
    const [cityDaten, setCityDaten] = useState([])

    const fetchDaten = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
        // console.log(data)
        setCityDaten(data.cities)
    }
    useEffect(() => {
        fetchDaten()
    }, [])

    const RenderItem = ({ item }) => {
        return (
            <CityItem
                value={item}
                onSelect={() => props.navigation.navigate("RestaurantPages", { selectedCity: item })}
            />

        )
    }

    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={(_,index)=>index.toString()}
                data={cityDaten}
                renderItem={RenderItem}
            />

        </SafeAreaView>
    )
}

export { CityPages }