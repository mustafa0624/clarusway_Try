import React from "react";
import { Button, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux"



const ComponentA = (props) => {
    const myCounter = useSelector(state => state.counter)
    const dispatch = useDispatch()


    return (

        <View style={{ flex: 1 }}>

            <Text>componentA </Text>
            <Text style={{fontSize:30,color:"red"}}> Counter :{myCounter} </Text>
            <Button
            title="arttir"
            onPress={()=>dispatch({type:"Arttir"})}
            />


            <Button
            title="azalt"
            onPress={()=>dispatch({type:"Azalt"})}
            />

            <Button
            title="isim degistirme"
            onPress={()=>dispatch({
                type:"isimDegistir",
                
                    payload:{
                        myNewName: "yücel"
                    }
                })}
            />
        </View>




    )
}

export default ComponentA