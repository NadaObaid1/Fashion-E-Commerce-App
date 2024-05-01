import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import One from "../../images/4.jpg";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { primry, secondery, background } from "../../Common/color.js";
import Header from "../../Common/Header.js";

export default function Setting() {
  const navigation = useNavigation();

  const SECTIONS = [
    {
      icon: "settings",
      items: [
        {
          id: "Notification Setting",
          icon: "user",
          label: "Notification Setting",
          type: "link",
        },
        {
          id: "Password Manager",
          icon: "key",
          label: "Password Manager",
          type: "link",
        },
        {
          id: "Delete Account",
          icon: "delete",
          label: "Delete Account",
          type: "link",
        },
      ],
    },
  ];

  const handleNavigation = (id) => {
    switch (id) {
      case "Notification Setting":
        navigation.navigate("NotificationSetting");
        break;
      case "Password Manager":
        navigation.navigate("PasswordManager");
        break;
      case "Delete Account":
        navigation.navigate("DeleteAccount");
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView>
      <Header title={"Settings"} />

      {SECTIONS.map(({ header, items }) => {
        return (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>
            {items.map(({ label, type, icon, id }) => {
              return (
                <TouchableOpacity key={id} onPress={() => handleNavigation(id)}>
                  <View style={styles.row}>
                    <View style={styles.rowIcon}>
                      <FeatherIcon name={icon} color={primry} size={25} />
                    </View>
                    <Text style={styles.rowLabel}>{label}</Text>
                    <View style={{ flex: 1 }} />
                    {type === "link" && (
                      <FeatherIcon
                        name="chevron-right"
                        color="#0c0c0c"
                        size={22}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  circleHeader: {
    width: 40,
    height: 40,
    marginTop: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#797979",
    marginLeft: 30,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 3,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: background,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
});
