import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  primry,
  secondery,
  subSecondery,
  background,
} from "../../Common/color.js";

const Massege = () => {
  return (
    <View style={{ backgroundColor: primry }}>
      <View style={styles.containerHeader}>
        <View style={styles.circleHeader}>
          <FontAwesome5
            name="arrow-left"
            size={20}
            color="#1F2029"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={styles.circleHeader}>
          <Image
            source={require('../../images/woman.jpg')}
            style={styles.userImage}
          />
        </View>
        <Text
          style={{
            marginTop: 60,
            marginLeft: 10,
            color: subSecondery,
            fontWeight: "500",
          }}
        >
          Angie Brekke {"\n"} Online
        </Text>

        <View style={[styles.circleHeader, styles.circleHeaderRight]}>
          <FontAwesome5 name="list-ul" size={20} color="#1F2029" />
        </View>
      </View>

      <View style={styles.containerBody}>
        <Text style={styles.textstylesubHeader}>today</Text>
        <View
          style={{
            padding: 20,
            marginLeft: 30,
            marginRight: 70,
            marginTop: 20,
            backgroundColor: "#fff",
          }}
        >
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>

        <Image
          source={require('../../images/woman1.jpg')}
          style={[styles.userImage, styles.userSubImage]}
        />
        <Text style={{ marginTop: 5, marginLeft: 280, color: secondery }}>
          08: 04 pm
        </Text>

        <View
          style={{
            padding: 20,
            marginLeft: 30,
            marginRight: 70,
            marginTop: 20,
            backgroundColor: "#fff",
          }}
        >
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>

        <View
          style={{
            padding: 20,
            marginLeft: 70,
            marginRight: 20,
            marginTop: 20,
            backgroundColor: primry,
          }}
        >
          <Text style={{ color: subSecondery }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <Image
          source={require("../../images/woman.jpg")}
          style={[styles.userImage, styles.userSubImage1]}
        />
        <Text style={{ marginTop: 5, marginLeft: 70, color: secondery }}>
          08: 04 pm
        </Text>

        <Image
          source={require("../../images/woman.jpg")}
          style={[styles.ImageSend]}
        />
        <Image
          source={require("../../images/woman1.jpg")}
          style={[styles.userImage, styles.userSubImage2]}
        />
        <Text style={{ marginTop: 5, marginLeft: 170, color: secondery }}>
          08: 04 pm
        </Text>

        <View
          style={{
            padding: 15,
            marginHorizontal: 20,
            marginTop: 20,
            backgroundColor: "#dadada",
            flexDirection: "row",
            borderRadius: 5,
          }}
        >
     <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
  <View style={styles.iconContainer}>
    <FontAwesome5 name="plus" size={20} color="#804d3b" />
  </View>
  <Text style={{ color: secondery, marginRight: 120, fontSize: 15 }}>Type a message here...</Text>
  <View style={[styles.iconContainer, styles.iconContainer1]}>
    <FontAwesome5 name="volume-up" size={20} color="#fff" />
  </View>
</View>


        </View>
      </View>
    </View>
  );
};

export default Massege;

const styles = StyleSheet.create({
  containerHeader: {
    height: "15%",
    backgroundColor: primry,
    flexDirection: "row",
  },
  containerBody: {
    height: "85%",
    backgroundColor: subSecondery,
    borderRadius: 20,
  },
  circleHeader: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    marginLeft: 20,
    backgroundColor: subSecondery,
  },
  circleHeaderRight: {
    marginLeft: 120,
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    position: "absolute",
  },
  userSubImage: {
    marginTop: 40,
  },
  userSubImage1: {
    marginTop: 260,
    marginLeft: 370,
  },
  userSubImage2: {
    marginTop: 380,
    marginLeft: 10,
  },
  ImageSend: {
    width: 200,
    height: 200,
    marginLeft: 30,
    marginTop: 30,
  },
  textstylesubHeader: {
    textAlign: "center",
    color: primry,
    textTransform: "capitalize",
    letterSpacing: 2,
    marginTop: 10,
    fontSize: 20,
  },
  iconContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
  },
  iconContainer1: {
    backgroundColor: primry,
  },
});
