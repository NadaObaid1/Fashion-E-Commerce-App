  import React, { useState } from "react";
  import Carousel from "react-native-snap-carousel";
  import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
  import { background, primry, secondery, subSecondery } from '../../Common/color.js';
  
  const Background = () => {
    const images = [
      require("../../images/1.jpg"),
      require("../../images/33.jpg"),
      require("../../images/55.jpg"),
    ];
    
    const [activeIndex, setActiveIndex] = useState(0);
  
    const windowWidth = Dimensions.get("window").width;
  
    const renderItem = ({ item, index }) => (
      <View style={{ width: windowWidth, height: 200 }}>
        <Image
          source={item}
          style={[
            styles.image,
            { width: "100%", height: 700},
          ]}
          resizeMode="cover"
        />
        <Text style={styles.imageText}>new collection</Text>
        <Text style={styles.SubimageText}>Discount 50% for {'\n'}the first transaction</Text>
        <Text style={styles.button}>shop now</Text>
      </View>
    );
  
    const renderPagination = () => (
      <View style={styles.pagination}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveIndex(index)}
            style={[
              styles.paginationDot,
              { backgroundColor: index === activeIndex ? primry : secondery },
            ]}
          />
        ))}
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          loop
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {renderPagination()}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10
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
    },
    pagination: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 10,
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
    },
  });
  
  export default Background;