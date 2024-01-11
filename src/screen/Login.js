import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../Firebase";
const Login = ({ navigation }) => {
  const [userId, setUserId] = useState("arunkarthick3002@gmail.com");
  const [userPassword, setUserpassword] = useState("Arun@123");
  const firebaseAuth = getAuth(firebaseApp);
  const onLogin = async () => {
    await signInWithEmailAndPassword(firebaseAuth, userId, userPassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user.uid);
        navigation.navigate("Home", { data: user.uid });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage}`);
      });
    //
  };
  return (
    <View
      style={{
        paddingHorizontal: 10,
        alignContent: "center",
        justifyContent: "center",
        top: 0,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>
        Userid
      </Text>
      <TextInput
        style={{
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderColor: "black",
          borderWidth: 3,
          marginBottom: 20,
          borderRadius: 10,
          fontSize: 16,
        }}
        value={userId}
        onChangeText={(userText) => setUserId(userText)}
        placeholder="userid"
      />
      <Text style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>
        Password
      </Text>
      <TextInput
        style={{
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderColor: "black",
          borderWidth: 3,
          marginBottom: 20,
          borderRadius: 10,
          fontSize: 16,
        }}
        value={userPassword}
        onChangeText={(userPass) => setUserpassword(userPass)}
        placeholder="Password"
      />
      <Button
        disabled={userId && userPassword ? false : true}
        onPress={onLogin}
        title="Login"
      ></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
