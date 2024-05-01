import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  subSecondery,
  secondery,
  primry,
  background,
} from "../../Common/color.js";
import React from "react";
import Search from "../../Common/Search.js";
import Category from "./Category.js";
import Background from "./Background.js";
import NavBar from "../../Common/NavBar.js";
import PricingRange from "./PricingRange.js";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1}}>
    <ScrollView>
      <Text style={{fontSize: 15, textTransform: 'capitalize', marginTop: 50, marginLeft: 20, color: secondery}}>location</Text>

    <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center'}}>
    <Ionicons
        name="location-outline"
        color={primry}
        style={{
          fontSize: 20,
          borderRadius: 5,
        }}
      />
      <Text style={{fontSize: 20, textTransform: 'capitalize', fontWeight: '500'}}> new york, USA </Text>
      <Ionicons
        name="chevron-down-outline"
        color={primry}
        style={{
          fontSize: 20,
          borderRadius: 5
        }}
      />
    </View>
    <Search/>
    <Background/>
    <Text style={styles.TextStyle}>category</Text>
    <Category/>
    <Text style={[styles.TextStyle, styles.TextStyleRange]}>pricing range</Text>
    <PricingRange/>
    </ScrollView>
    <NavBar onChange={(iconName) => console.log(iconName)} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  TextStyle:{
    fontSize: 20, 
    fontWeight: '500', 
    marginLeft: 20, 
    marginBottom: 13, 
    marginTop: 20,
    textTransform: 'capitalize'
  },
  TextStyleRange:{
    marginTop: 40, 
  },
  SelectSort:{
    padding: 13,
    backgroundColor: primry, 
    borderRadius: 50, 
    color: subSecondery, 
    textTransform: 'capitalize'
  },
  SortText:{
    padding: 13, 
    borderColor: primry, 
    borderWidth: 0.5, 
    borderRadius: 50,
    fontWeight: '500',
    textTransform: 'capitalize'
  }
});


/*<Text style={styles.TextStyle}>Sort by</Text>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text style={styles.SelectSort}>most recent</Text>
      <Text style={styles.SortText}>popular</Text>
      <Text style={styles.SortText}>price high</Text>
    </View>*/