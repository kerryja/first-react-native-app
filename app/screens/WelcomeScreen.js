import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/livingroom.jpg")}
    >
      <Text style={styles.text}>DesignMe</Text>
      <View style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    position: "absolute",
    fontSize: 50,
    top: 70,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    color: "white",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    top: "25%",
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
