import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  secondery,
  subSecondery,
  primry,
  background,
} from "../Common/color.js";

const NavBar = ({ onChange }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName); 
    onChange(iconName);
  };

  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate("ProductScreen");
  };

  const handleshoppingPress = () => {
    navigation.navigate("Cart");
  };


  const handlefavPress = () => {
    navigation.navigate("OrderActive");
  };

  const handleChatPress = () => {
    navigation.navigate('Massege');
  };

  const handlePersonPress = () => {
    navigation.navigate("ProfileScreen");
  };


  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            handleHomePress();
            handleIconPress("home");
          }}
        >
          {selectedIcon === "home" ? (
            <Ionicons
              name="home"
              style={[
                styles.iconStyle,
                {
                  color: primry,
                  textShadowColor: secondery,
                  borderWidth: 3,
                  borderRadius: 50,
                  padding: 10,
                  backgroundColor: subSecondery,
                  borderColor: secondery,
                },
              ]}
            />
          ) : (
            <Ionicons name="home-outline" style={styles.iconStyle} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleshoppingPress()
            handleIconPress("cart");
          }}
        >
          {selectedIcon === "cart" ? (
            <Ionicons
              name="cart"
              style={[
                styles.iconStyle,
                {
                  color: primry,
                  textShadowColor: secondery,
                  borderWidth: 3,
                  borderRadius: 50,
                  padding: 10,
                  backgroundColor: subSecondery,
                  borderColor: secondery,

                },
              ]}
            />
          ) : (
            <Ionicons name="cart" style={styles.iconStyle} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlefavPress();
            handleIconPress("local-shipping");
          }}
        >
          {selectedIcon === "local-shipping" ? (
            <MaterialIcons
              name="local-shipping"
              style={[
                styles.iconStyle,
                {
                  color: primry,
                  textShadowColor: secondery,
                  borderWidth: 3,
                  borderRadius: 50,
                  padding: 10,
                  backgroundColor: subSecondery,
                  borderColor: secondery,
                },
              ]}
            />
          ) : (
            <MaterialIcons name="local-shipping" style={styles.iconStyle} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleChatPress()
            handleIconPress("chat");
          }}
        >
          {selectedIcon === "chat" ? (
            <MaterialIcons
              name="chat" 
              style={[
                styles.iconStyle,
                {
                  color: primry,
                  textShadowColor: secondery,
                  borderWidth: 3,
                  borderRadius: 50,
                  padding: 10,
                  backgroundColor: subSecondery,
                  borderColor: secondery,
                },
              ]}
            />
          ) : (
            <Ionicons name="chatbubble-outline" style={styles.iconStyle} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handlePersonPress();
            handleIconPress("person");
          }}
        >
          {selectedIcon === "person" ? (
            <Ionicons
              name="person"
              style={[
                styles.iconStyle,
                {
                  color: primry,
                  textShadowColor: secondery,
                  borderWidth: 3,
                  borderRadius: 50,
                  padding: 10,
                  backgroundColor: subSecondery,
                  borderColor: secondery,
                },
              ]}
            />
          ) : (
            <Ionicons name="person" style={styles.iconStyle} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 50,
    backgroundColor: background,
    height: 75,
    marginHorizontal: 10,
    borderTopColor: "#000",
    elevation: 5,
    marginTop: 10,
    marginBottom: 10
  },
  iconStyle: {
    color: secondery,
    marginBottom: 5,
    alignSelf: "center",
    fontSize: 30,
    padding: 7,
  },
});
