import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Slider } from "react-native-elements";
import { primry } from "../../Common/color.js";

const PricingRange = () => {
  const [priceRange, setPriceRange] = useState([20, 80]); 

  const formatPrice = (value) => `$${value}`; 

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Text style={{fontSize:12, fontWeight: 'bold'}}>{formatPrice(priceRange[0])}</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          values={priceRange}
          onValuesChange={(values) => setPriceRange(values)}
          thumbStyle={{ height: 20, width: 20, backgroundColor: primry }} 
          minimumTrackTintColor= {primry}
          maximumTrackTintColor="grey"
        />
        <Text>{formatPrice(priceRange[1])}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 2,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
});

export default PricingRange;
