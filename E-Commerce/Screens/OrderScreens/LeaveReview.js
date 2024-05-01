import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "react-native-elements";
import Header from "../../Common/Header.js";
import NavBar from "../../Common/NavBar.js";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  background,
  primry,
  secondery,
  subSecondery,
} from "../../Common/color.js";

const LeaveReview = () => {
  const [currentPosition, setCurrentPosition] = useState(2);
  const [text, setText] = useState("");

  const data = {
    id: 12345,
    image: require("../../images/1.jpg"),
    name: "Brown Jacket",
    size: "size: XL| Qty: 10pcs",
    price: "$350",
    deliveryDate: "05-05-2024",
  };

  const onPageChange = (position) => {
    setCurrentPosition(position);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header title={"Leave Order"} />
        <View style={styles.orderContainer}>
          <View style={styles.orderPrice}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.text}>{data.size}</Text>
            <Text style={styles.text}>Total Price: {data.price}</Text>
          </View>
          <Image source={data.image} style={styles.image} />
        </View>
        <Text style={styles.TextStyle}>How is your order?</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Your overall rating</Text>
          <View style={styles.starContainer}>
            {[...Array(5)].map((_, index) => (
              <FontAwesome5
                key={index}
                name="star"
                size={40}
                color="#FFD700"
                solid
                onPress={() => navigation.navigate("Login")}
              />
            ))}
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>Add detailed review</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Enter here..."
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.cancelButton]}>
            <Text style={[styles.buttonText, styles.cancelText]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavBar onChange={(iconName) => console.log(iconName)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 30
  },
  title: {
    fontSize: 22,
    color: "#333",
    marginBottom: 8,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: secondery,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  TextStyle: {
    color: background,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  ratingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  ratingText: {
    color: secondery,
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: "row",
    alignContent: "center",
    borderBottomWidth: 2,
    borderColor: subSecondery,
    paddingVertical: 20,
  },
  reviewContainer: {
    marginBottom: 20,
  },
  reviewTitle: {
    color: background,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: primry,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: subSecondery,
    textAlign: "center",
    fontWeight: "400",
  },
  cancelButton: {
    backgroundColor: "#e7e6e1",
  },
  cancelText: {
    color: primry,
  },
});

export default LeaveReview;

