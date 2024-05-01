import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  secondery,
  subSecondery,
  primry,
  background,
} from "../../Common/color.js";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import Header from "../../Common/Header.js";

const data = [
  {
    id: 1,
    images: require("../../images/5.jpg"),
    name: "Brown Suite",
    size: "size: XL| Qty: 10pcs",
    price: "$400",
    category: "active",
  },
  {
    id: 2,
    images: require("../../images/3.jpg"),
    name: "White Jacket",
    size: "size: XL| Qty: 10pcs",
    price: "$350",
    category: "completed",
  },
  {
    id: 3,
    images: require("../../images/4.jpg"),
    name: "Brown Jacket",
    size: "size: XL| Qty: 10pcs",
    price: "$250",
    category: "cancelled",
  },
  {
    id: 4,
    images: require("../../images/8.jpg"),
    name: "beige Suite",
    size: "size: XL| Qty: 10pcs",
    price: "$400",
    category: "active",
  },
];

const Cart = () => {
  const navigation = useNavigation();
  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }
  const [selectedCategory, setSelectedCategory] = useState("active");

  return (
    <ScrollView>
       <Header title={'My Cart'}/>
      {groupedData.map((group, index) => (
        <View key={index}>
          {group.map((item) => {
            return (
              <Animatable.View
                key={item.id}
                style={styles.container}
                animation="fadeIn"
                duration={3000}
              >
                <Image source={item.images} style={styles.imagesStyle} />
                <View style={styles.textContainer}>
                  <Text style={styles.TextName}>{item.name}</Text>
                  <Text style={styles.TextSize}>{item.size}</Text>
                  <Text style={styles.TextPrice}>{item.price}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 5,
                    padding: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <Ionicons
                    name="add"
                    color={background}
                    style={{ fontSize: 30, backgroundColor: subSecondery }}
                  />

                  <Text
                    style={{
                      textAlign: "center",
                      marginLeft: 10,
                      marginRight: 10,
                      color: background,
                      borderRadius: 5,
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </Text>

                  <Ionicons
                    name="remove-outline"
                    color={subSecondery}
                    style={{
                      marginLeft: "auto",
                      fontSize: 30,
                      backgroundColor: primry,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </Animatable.View>
            );
          })}
        </View>
      ))}

      <View style={styles.code}>
        <Text style={{fontSize: 17, marginTop: 10, color: secondery, marginLeft: 10}}>Promo Code</Text>
        <Text style={{borderRadius: 30, paddingHorizontal: 20, paddingVertical: 15,
         backgroundColor: primry, color: subSecondery}}>Apply</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
        <Text style={styles.textHead}>sub-total</Text>
        <Text style={styles.textPrice}>$400.09</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.textHead}>delivery-free</Text>
        <Text style={styles.textPrice}>$25</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
        <Text style={[styles.textHead, styles.texttotal]}>total cost</Text>
        <Text style={[styles.textPrice, styles.texttotal]}>$425.09</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={styles.buttonText}>proceed to checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  subText: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    color: secondery,
  },
  subTextActive: {
    color: primry,
    borderBottomWidth: 4,
    borderBottomColor: primry,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: secondery,
    marginBottom: 10,
  },
  imagesStyle: {
    height: 130,
    width: 130,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 15,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  code:{
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 20,
    paddingHorizontal: 10, 
    borderRadius: 30, 
    marginHorizontal: 20, 
    paddingVertical: 4,
    borderColor: secondery,
    borderWidth: 0.5
  },
  TextName: {
    color: background,
    fontSize: 18,
    fontWeight: "bold",
  },
  TextSize: {
    color: secondery,
    fontSize: 12,
  },
  TextPrice: {
    color: background,
    fontSize: 15,
    fontWeight: "bold",
  },
  texttotal:{
    color: background,
    fontWeight: 'bold'
  },
  ButtStyle: {
    textTransform: "capitalize",
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: primry,
    borderRadius: 15,
    color: subSecondery,
    marginRight: 10,
    marginTop: 70,
    fontWeight: "500",
  },
  textHead:{
    textTransform: 'capitalize',
    fontSize: 17,
    color: secondery,
    marginLeft: 20
  },
  textPrice: {
    fontSize: 17,
    color: background,
    marginRight: 20
  },
  button: {
    padding: 20,
    marginTop: 50,
    backgroundColor: "#804d3b",
    borderRadius: 60,
    marginBottom: 20,
    marginHorizontal: 20
  },
  buttonText: {
    textTransform: 'capitalize',
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
});
