import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions,Linking, Button } from "react-native";

const RestaurantAdress = (props) => {
    const { selectedRestaurant } = props.route.params
    console.log(selectedRestaurant)
    address: "3 Nagog Park"
    area: "Boston / New England"
    city: "Acton"
    country: "US"
    id: 111811
    image_url: "https://www.opentable.com/img/restimages/111811.jpg"
    lat: 42.522403
    lng: -71.433097
    mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=111811"
    name: "The Red Raven"
    phone: "9782742231x"
    postal_code: "01720"
    price: 3
    reserve_url: "http://www.opentable.com/single.aspx?rid=111811"
    state: "MA"
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: selectedRestaurant.image_url }}
                style={styles.image}
            />
            <Text>{selectedRestaurant.name}</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
            </View>

            <Button
            title="Go Reserve"
            onPress={()=>Linking.openURL(selectedRestaurant.mobile_reserve_url)}
            />

        </View>
    )
}


export { RestaurantAdress }


const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    name: { fontWeight: '300', fontSize: 30 },
    image: { height: Dimensions.get('window').height / 3 },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: { color: 'white', fontWeight: 'bold' }
})
