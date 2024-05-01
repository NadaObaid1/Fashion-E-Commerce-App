import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { background, primry, secondery, subSecondery } from '../../Common/color.js';
import NavBar from '../../Common/NavBar.js';
import { FontAwesome5 } from "@expo/vector-icons";

const ProductsDetails = ({ route }) => {
    const { productId } = route.params;
  
    return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={productId.images} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{productId.name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
          <Text style={[styles.name, {fontSize: 18}]}>Product Details</Text>
          <View style={{flexDirection: 'row', marginLeft: 200, marginTop: 20}}>
          <FontAwesome5
                name="star"
                size={20}
                color="#FFD700"
                solid
                onPress={() => navigation.navigate("Login")}
              />
            <Text style={{fontSize: 20, color: secondery}}>4.5</Text>
          </View>
        </View>
          <Text style={styles.Description}>{productId.Description}</Text>
          <Text style={styles.size}>{productId.size}</Text>
          <View style={styles.buttonContainer}>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Icon name="cash-outline" color={primry} size={24} />
            <Text style={styles.price}>{productId.price}</Text>
          </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NavBar onChange={(iconName) => console.log(iconName)} />
      </View>
    );
  };
  
export default ProductsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  detailsContainer: {
    backgroundColor: '#f2f2f2',
    height: '100%',
    position: 'absolute',
    marginTop: 300,
    width: '100%',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 22,
    color: background,
    marginLeft: 20,
  },
  Description: {
    fontSize: 16,
    marginTop: 22,
    color: secondery,
    marginLeft: 20
  },
  price: {
    fontSize: 18,
    color: background,
    marginLeft: 10,
    marginRight: 10,
  },
  size: {
    marginRight: 20,
    fontSize: 18,
    letterSpacing: 1,
    marginLeft: 20,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
  },
  button: {
    backgroundColor: primry,
    padding: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  button1: {
    paddingHorizontal: 10,
    marginLeft: 20,
    backgroundColor: subSecondery,
    borderColor: background,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonText1: {
    color: background,
  },
});
