import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { primry, secondery, subSecondery } from "./color.js";

const Search = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.searchBarContainer}>
      <SearchBar
        placeholder={placeholder || "Search"}
        onChangeText={handleSearch}
        value={searchText}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
      />
      <View
        style={{
          marginTop: 12,
          backgroundColor: primry,
          paddingHorizontal: 15,
          height: 52,
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <FontAwesome5
          name="list"
          size={20}
          color={subSecondery}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    width: "90%",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginBottom: 2,
    marginTop: 2,
    marginLeft: 5,
    flexDirection: "row",
  },
  searchBarInputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: subSecondery,
    padding: 2,
  },
  searchBarInput: {
    backgroundColor: "#fff",
  },
});

export default Search;
