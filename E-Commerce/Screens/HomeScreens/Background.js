import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { background, primry, secondery, subSecondery } from '../../Common/color.js';

const Background = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require("../../images/1.jpg"),
    require("../../images/33.jpg"),
    require("../../images/55.jpg"),
  ];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <View style={styles.sliderContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={(event) => {
            const slideIndex = Math.floor(
              event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
            );
            handleSlideChange(slideIndex);
          }}
        >
          {images.map((image, index) => (
            <View key={index} style={{ width: windowWidth, height: 900 }}>
              <Image
                source={image}
                style={[
                  styles.image,
                  { width: "100%", height: "100%" },
                ]}
                resizeMode="cover"
              />
              <Text style={styles.imageText}>new collection</Text>
              <Text style={styles.SubimageText}>Discount 50% for {'\n'}the first transaction</Text>
              <Text style={styles.button}>shop now</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor: index === currentIndex ? "#ffa952" : "#D1D1D1",
              },
            ]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 300,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: -50,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
  imageText: {
    position: "absolute",
    top: 40,
    left: 20,
    color: background,
    fontSize: 24,
    fontWeight: "bold",
    textTransform: 'capitalize'
  },
  SubimageText:{
    position: "absolute",
    top: 70,
    left: 20,
    color: secondery,
    fontSize: 14
  },
  button:{
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: primry,
    color: subSecondery,
    borderRadius: 5,
    position: "absolute",
    top: 120,
    left: 20,
    textTransform: 'capitalize'
  }
});

export default Background;
