import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#abcdef",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Welcome to Music Thing
      </Text>
      <Button title="Login" onPress={() => router.push("/login")} />
      <Button title="Sign Up" onPress={() => router.push("/signup")} />
    </View>
  );
};

export default HomeScreen;
