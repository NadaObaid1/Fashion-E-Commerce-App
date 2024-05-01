import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../../Common/Header.js";

const SendCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Header />
      <Text style={styles.textHeader}>Verfiy Code</Text>
      <Text style={styles.text}>
        Please enter the code we just sent to email.
      </Text>
      <Text style={[styles.text, styles.textLink]}>example@gmail.com</Text>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.circle}>
          <Text style={styles.subText}>2</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.subText}>8</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.subText}>-</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.subText}>-</Text>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={{ color: "gray", textAlign: "center" }}>
          Didn't receive OTP?
        </Text>
        <Text
          style={{
            color: "#804d3b",
            textAlign: "center",
            textDecorationLine: "underline",
            fontWeight: "bold",
          }}
        >
          Reset Code
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={styles.buttonText}>Verfiy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 4,
    borderWidth: 0.5,
    borderColor: "#804d3b",
  },
  textHeader: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 6,
    textAlign: "center",
    color: "gray",
  },
  textLink: {
    color: "#804d3b",
    marginTop: 0,
    textDecorationLine: "underline",
    textDecorationColor: "#804d3b",
    fontWeight: "bold",
  },
  subText: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 20,
  },
  inputGroup: {
    marginTop: 15,
  },
  label: {
    fontSize: 13,
    marginBottom: 5,
    backgroundColor: "red",
  },
  button: {
    padding: 20,
    marginTop: 50,
    backgroundColor: "#804d3b",
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
  },
  passwordLink: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  passwordLinkText: {
    color: "#804d3b",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default SendCode;
