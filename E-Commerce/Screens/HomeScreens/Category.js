import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
  const navigation = useNavigation();

  const handleContinuePress = (option) => {
    setChosenOption(option);
    switch (option) {
      case ("T-Shirt"):
        navigation.navigate("ProductsScreens");
        break;
      case ("Pant"):
        navigation.navigate("ProductsScreens");
        break;
      case ("Dress"):
        navigation.navigate("ProductsScreens");
        break;
      case ("Jacket"):
        navigation.navigate("ProductsScreens");
        break;
      default:
        break;
    }
  };

  const data = [
    {
      id: 1,
      image: require("../../images/T-Shirt.jpg"),
      description: ("T-Shirt"),
    },
    {
      id: 2,
      image: require("../../images/pant.jpg"),
      description: ("Pant"),
    },
    {
      id: 3,
      image: require("../../images/Dress.jpg"),
      description: ("Dress"),
    },
    {
      id: 4,
      image: require("../../images/jaket.jpg"),
      description: ("Jacket"),
    },
  ];

  const [chosenOption, setChosenOption] = useState(null);

  const handleChooseOption = (option) => {
    setChosenOption(option);
  };

  const groupedData = [];
  for (let i = 0; i < data.length; i += 4) {
    groupedData.push(data.slice(i, i + 4));
  }

  return (
    <View style={styles.container}>
      {groupedData.map((group, index) => (
        <View key={index} style={styles.groupContainer}>
          {group.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() => handleContinuePress(item.description)}
              >
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  groupContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    width: "100%",
  },
  itemContainer: {
    alignItems: "center",
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 9999,
    overflow: "hidden",
    shadowColor: "black",
    marginHorizontal: 20,
    shadowOffset: {
    width: 0,
    height: 8
    }
  },
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "black",
    fontSize: 13,
    fontWeight: 'bold'
  },
});

export default Category;
