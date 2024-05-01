import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LogScreens = () => {
  const navigation = useNavigation()
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.viewStyleImage}>
          <Image
            style={styles.imageStyle}
            source={require("../../images/3.jpg")}
          />
        </View>

        <View style={styles.viewStyleImagee}>
          <Image
            style={styles.imageStylee}
            source={require("../../images/2.jpg")}
          />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          The <Text style={{ color: "#804d3b" }}>Fashion App</Text> That Makes
          You Look Your Best{" "}
        </Text>
        <Text style={styles.SubtextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Let's Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        Already have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('Login')}>Sign In</Text>
      </Text>
      
    </View>
  );
};

export default LogScreens;

const styles = StyleSheet.create({
  viewStyleImage: {
    flex: 1,
  },
  viewStyleImagee: {
    flex: 1,
    alignItems: "flex-end",
  },
  imageStyle: {
    marginTop: 50,
    width: "100%",
    height: 400,
    resizeMode: "cover",
    borderWidth: 1,
    borderRadius: 20,
  },
  imageStylee: {
    marginTop: 120,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderWidth: 1,
    borderRadius: 200,
  },
  textContainer: {
    marginTop: 20,
    padding: 10,
  },
  textStyle: {
    color: "#1F2029",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
  },
  SubtextStyle: {
    fontSize: 17,
    marginTop: 10,
    color: "#797979",
    textAlign: "center",
  },
  button: {
    padding: 20,
    marginTop: 30,
    backgroundColor: "#804d3b",
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
  },
  signUpText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 17
  },
  signUpLink: {
    color: "#804d3b",
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
});
