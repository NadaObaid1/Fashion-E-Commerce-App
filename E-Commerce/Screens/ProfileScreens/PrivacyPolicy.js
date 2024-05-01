import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  primry,
  secondery,
  subSecondery,
  background,
} from "../../Common/color.js";
import Header from "../../Common/Header.js";

const PrivacyPolicy = ({ navigation }) => {
  return (
    <SafeAreaView>
         <Header title={"privacy policy"} />
      <View>
        <Text style={styles.headerLorem}>cancelation policy</Text>
        <Text style={styles.loremText}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{"\n"}Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>

      <View>
        <Text style={styles.headerLorem}>term & condition</Text>
        <Text style={styles.loremText}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: "500",
    marginTop: 60,
    marginLeft: 50,
    textTransform: "capitalize",
  },
  headerLorem: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 20,
    textTransform: "capitalize",
    color: primry,
  },
  loremText: {
    marginHorizontal: 20,
    marginTop: 10,
    color: secondery,
    fontSize: 15,
    marginLeft: 20,
    lineHeight: 25,
  },
});
