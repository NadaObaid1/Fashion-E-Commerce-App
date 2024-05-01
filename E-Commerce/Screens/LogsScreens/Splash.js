import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import woman3 from "../../images/woman3.jpg";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={woman3} style={styles.image}>
    <Text style={styles.TextStyle}>Welcome, {'\n'}to our store</Text>
      <TouchableOpacity
        style={styles.continueButton}>
        <Text style={styles.continueButtonText} onPress={() => navigation.navigate('LogScreens')}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  TextStyle:{
    color: '#fff',
    fontSize: 37,
    lineHeight: 45,
    marginTop: 400,
    paddingVertical: 70,
    marginLeft: 10
  },
  continueButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: '#c37857',
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    position: "absolute",
    bottom: 70,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  continueButtonText: {
    color: '#c37857',
    fontSize: 18,
  },
});
