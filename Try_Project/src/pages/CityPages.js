import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { CityItem, Buttons } from "../components"

// let originalList = []

const CityPages = (props) => {
    const [cityDaten, setCityDaten] = useState([])
    const [newData,setNewData] =useState([])

    const fetchDaten = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
        // console.log(data)
        setCityDaten(data.cities)
        setNewData(data.cities)
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

    const searchCity = (search) => {
        const filteredCity = newData.filter(city => {
            const addedCity = search.toUpperCase();
            const addedValue = city.toUpperCase();
            return addedValue.indexOf(addedCity) > -1

        })
        setCityDaten(filteredCity)
    }

    return (
        <SafeAreaView>
            <Buttons
                placeholder="Search a  City..."
                onSelect={(value) => searchCity(value)}
            />
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={cityDaten}
                renderItem={RenderItem}
            />

        </SafeAreaView>
    )
}

export { CityPages }