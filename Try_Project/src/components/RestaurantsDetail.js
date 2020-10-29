import React from "react";
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";


const RestaurantsDetail = (props) => {
    return (
        <View stlye={styles.container}>

            <TouchableOpacity
            onPress={props.onScreen}
            >
                <Image
                    source={{ uri: props.value.image_url }}
                    style={styles.img}
                />
            </TouchableOpacity>
            <Text >{props.value.name}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        padding: 10

    },
    img: {
        height: Dimensions.get("window").height * 0.3
    },
    text: { padding: 100 }
})
// address: "1482 Old York Road"
// area: "Philadelphia / New Jersey Suburbs"
// city: "Abington"
// country: "US"
// id: 25267
// image_url: "https://www.opentable.com/img/restimages/25267.jpg"
// lat: 40.124851
// lng: -75.117586
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=25267"
// name: "Kitchen Bar"
// phone: "2155769766"
// postal_code: "19001"
// price: 2
// reserve_url: "http://www.opentable.com/single.aspx?rid=25267"
// state: "PA"

export { RestaurantsDetail }