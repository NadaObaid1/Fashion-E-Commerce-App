import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  background,
  primry,
  secondery,
  subSecondery,
} from "../../Common/color.js";
import { Image } from "react-native-elements";
import StepIndicator from "react-native-step-indicator";
import Header from "../../Common/Header.js";
import NavBar from "../../Common/NavBar.js";

const labels = [
  "Order placed",
  "Order processing",
  "Order shipped",
  "Order delivered",
];
const customStyles = {
  stepIndicatorSize: 45,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: primry,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: primry,
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: primry,
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: primry,
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 20,
  currentStepIndicatorLabelFontSize: 22,
  stepIndicatorLabelCurrentColor: background,
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 18,
  currentStepLabelColor: primry,
};

const OrderStatus = () => {
  const [currentPosition, setCurrentPosition] = useState(2);

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
        <Header title={"Order Status"} />
        <View style={styles.orderContainer}>
          <View style={styles.orderPrice}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.text}>{data.size}</Text>
            <Text style={styles.text}>Delivery Fee: $100</Text>
            <Text style={styles.text}>Total Price: {data.price}</Text>
          </View>
          <Image source={data.image} style={styles.image} />
        </View>

        <View style={styles.orderdetails}>
          <Text style={styles.title}>Order Details:</Text>
          <Text style={styles.text}>
            Expected Delivery Date: {data.deliveryDate}
          </Text>
          <Text style={styles.text}>Tracking ID: {data.id}</Text>
        </View>

        <View style={styles.steps}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            stepCount="4"
          />
        </View>
      </View>
      <NavBar onChange={(iconName) => console.log(iconName)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  orderdetails: {
    flexDirection: "colomn",
    justifyContent: "space-between",
    // gap: 15,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: subSecondery,
    //marginBottom: 80,
  },
  orderPrice: {
    flexDirection: "colomn",
    justifyContent: "space-between",
    gap: 10,
  },
  steps: {
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: subSecondery,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    gap: 15,
    marginBottom: 0,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: subSecondery,
    marginTop: 20,
  },
});

export default OrderStatus;
