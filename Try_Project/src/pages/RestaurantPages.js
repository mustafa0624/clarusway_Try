import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, View, StyleSheet } from "react-native";
import { RestaurantsDetail, Buttons } from "../components"


let orginalList = [];
const RestaurantPages = (props) => {
    const [datei, setDatei] = useState([])
    const { selectedCity } = props.route.params


    const renderData = () => {
        axios.get("https://opentable.herokuapp.com/api/restaurants", { params: { city: selectedCity } })
            .then(response => {
                console.log(response.data.restaurants)
                setDatei(response.data.restaurants)
                orginalList = [...response.data.restaurants]
            })

    }

    useEffect(() => {
        renderData()
    }, [])

    const RenderRestaurant = ({ item }) =>{
        return(

            <RestaurantsDetail 
            value={item}
            onScreen={()=>props.navigation.navigate("RestaurantAdress",{selectedRestaurant:item})} 
              />
        )

    } 


    function searchRestaurant(search) {
        const filteredRestaurant = orginalList.filter(item => {
            const addedInput = search.toUpperCase();
            const filteredItem = item.name.toUpperCase();
            return filteredItem.indexOf(addedInput) > -1;

        })
        setDatei(filteredRestaurant)
    }

  


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>
                    {selectedCity}
                </Text>
                <Buttons
                    placeholder="Search a Restaurant"
                    onSelect={text => searchRestaurant(text)}
                />
                <FlatList
                keyExtractor={(_,index)=>index.toString()}
                    data={datei}
                    renderItem={RenderRestaurant}
                />
            </View>
        </SafeAreaView>
    )
}


export { RestaurantPages }



const styles = StyleSheet.create({
    component: {

    },
    img: {

    },
    text: {
        fontSize: 25,
        alignSelf: "center",
        fontWeight: "bold"
    }
})