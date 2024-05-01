import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  secondery,
  subSecondery,
  primry,
  background,
} from "../../Common/color.js";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import NavBar from "../../Common/NavBar.js";
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
  {
    id: 5,
    images: require("../../images/6.jpg"),
    name: "Brown Jacket",
    size: "size: XL| Qty: 10pcs",
    price: "$350",
    category: "active",
  },
  {
    id: 6,
    images: require("../../images/7.jpg"),
    name: "White Jacket",
    size: "size: XL| Qty: 10pcs",
    price: "$250",
    category: "cancelled",
  },
];

const OrderActive = () => {
  const navigation = useNavigation();
  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }
  const [selectedCategory, setSelectedCategory] = useState("active");

  return (
    <View style={{flex: 1}}>
    <ScrollView>
     <Header title={'My Order'}/>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity onPress={() => setSelectedCategory("active")}>
          <Text
            style={
              selectedCategory === "active"
                ? [styles.subText, styles.subTextActive]
                : styles.subText
            }
          >
            active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("completed")}>
          <Text
            style={
              selectedCategory === "completed"
                ? [styles.subText, styles.subTextActive]
                : styles.subText
            }
          >
            completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("cancelled")}>
          <Text
            style={
              selectedCategory === "cancelled"
                ? [styles.subText, styles.subTextActive]
                : styles.subText
            }
          >
            cancelled
          </Text>
        </TouchableOpacity>
      </View>
      {groupedData.map((group, index) => (
        <View key={index}>
          {group.map((item) => {
            if (item.category === selectedCategory) {
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
                  <TouchableOpacity onPress={() => navigation.navigate('OrderStatus')}>
                    {selectedCategory === "active" && (
                      <Text style={styles.ButtStyle}>track order</Text>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate('LeaveReview')}>
                    {selectedCategory === "completed" && (
                      <Text style={styles.ButtStyle}>leave review</Text>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.navigate('ProductsScreens')}>
                    {selectedCategory === "cancelled" && (
                      <Text style={styles.ButtStyle}>re-order</Text>
                    )}
                  </TouchableOpacity>
                </Animatable.View>
              );
            } else {
              return null;
            }
          })}
        </View>
      ))}
    </ScrollView>
    <NavBar onChange={(iconName) => console.log(iconName)} />
    </View>
  );
};

export default OrderActive;

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
});
