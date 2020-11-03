
import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, Button } from "react-native";
import auth from '@react-native-firebase/auth';






const LoginPage = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const singIn = () => {
        auth()
            .signInWithEmailAndPassword(email,password)
            .then(response=>{
                console.log(response.user.toJSON)

            })
            .catch(response=>{
                console.log(response)
            })
     }

    const singUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.log(error);
            });
    }

    return (


        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <View>
                    <TextInput
                        placeholder="type your Mail"
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View>
                    <TextInput
                        placeholder="type your Pasworrd"
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <Button
                    title="sign up"
                    onPress={singUp}
                />
                <Button
                    title="sign in"
                    onPress={singIn}
                />

            </View>


        </SafeAreaView>


    )
}

export default LoginPage