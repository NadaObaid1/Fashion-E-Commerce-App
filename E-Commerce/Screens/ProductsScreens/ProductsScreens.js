import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import {
  secondery,
  subsecondery,
  primry,
  background,
} from "../../Common/color.js";
import * as Animatable from "react-native-animatable";
import NavBar from "../../Common/NavBar.js";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Common/Header.js";

const data = [
  {
    id: 1,
    images: require("../../images/5.jpg"),
    name: "Brown Suite",
    size: "size: XL| Qty: 10pcs",
    price: "$400",
    category: "Pant",
    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    id: 2,
    images: require("../../images/3.jpg"),
    name: "White Jacket",
    size: "size: XL| Qty: 10pcs",
    price: "$350",
    category: "Jacket",
    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    id: 3,
    images: require("../../images/4.jpg"),
    name: "Brown Jacket",
    size: "size: XL| Qty: 10pcs",
    price: "$250",
    category: "Pant",
    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    id: 4,
    images: require("../../images/8.jpg"),
    name: "beige Suite",
    size: "size: XL| Qty: 10pcs",
    price: "$400",
    category: "Jacket",
    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },

  {
    id: 5,
    images: require("../../images/shirt.jpg"),
    name: "Brown T-Shirt",
    size: "size: XL| Qty: 10pcs",
    price: "$350",
    category: "T-Shirt",
    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    id: 6,
    images: require("../../images/t-shrit1.jpg"),
    name: "Brown Shirt",
    size: "size: XL| Qty: 10pcs",
    price: "$250",
    category: "Shirt",
    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
];

const ProductsScreens = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigation = useNavigation();

  const renderCategory = (categoryName) => (
    <TouchableOpacity onPress={() => setSelectedCategory(categoryName)}>
      <Text
        style={[
          styles.subText,
          selectedCategory === categoryName && styles.subTextActive,
        ]}
      >
        {categoryName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title={"Products Screen"} />
      <ScrollView>
        <View style={styles.CategoryStyle}>
          {renderCategory("All")}
          {renderCategory("Jacket")}
          {renderCategory("T-Shirt")}
          {renderCategory("Shirt")}
          {renderCategory("Pant")}
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.row}>
            {data.map((item) => {
              if (
                item.category === selectedCategory ||
                selectedCategory === "All"
              ) {
                return (
                  <Animatable.View
                  key={item.id}
                  style={styles.productItem}
                  animation="fadeIn"
                  duration={3000}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ProductsDetails", {
                        productId: item,
                      });
                    }}
                  >
                    <Image source={item.images} style={styles.imagesStyle} />
                  </TouchableOpacity>
                  <View style={styles.textContainer}>
                    <Text style={styles.TextName}>{item.name}</Text>
                    <Text style={styles.TextSize}>{item.size}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 10,
                      }}
                    >
                      <Text style={styles.TextPrice}>{item.price}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Cart");
                        }}
                      >
                        <Text style={styles.ButtStyle}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Animatable.View>
                
                );
              } else {
                return null;
              }
            })}
          </View>
        </View>
      </ScrollView>
      <NavBar onChange={(iconName) => console.log(iconName)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subText: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    marginHorizontal: 10,
    color: background,
    borderWidth: 2,
    borderColor: secondery,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  subTextActive: {
    backgroundColor: primry,
    borderRadius: 20,
    borderWidth: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  CategoryStyle: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-evenly",
  },
  productsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productItem: {
    width: "47%",
    marginBottom: 40,
    marginHorizontal: 4,
  },
  imagesStyle: {
    height: 130,
    width: "100%",
  },
  textContainer: {
    width: "100%",
    backgroundColor: subsecondery,
  },
  TextName: {
    marginRight: 10,
    marginTop: 7,
    color: background,
    fontSize: 18,
    fontWeight: "bold",
  },
  TextSize: {
    marginRight: 10,
    color: secondery,
    fontSize: 12,
  },
  TextPrice: {
    color: background,
    fontSize: 15,
    marginTop: 4,
    fontWeight: "bold",
  },
  ButtStyle: {
    textTransform: "capitalize",
    backgroundColor: primry,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 10,
    borderRadius: 50,
    color: subsecondery,
    fontWeight: "500",
    fontSize: 20,
  },
});

export default ProductsScreens;
