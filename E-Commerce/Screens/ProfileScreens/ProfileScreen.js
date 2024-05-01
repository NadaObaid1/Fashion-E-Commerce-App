import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import One from "../../images/4.jpg";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  primry,
  secondery,
  subSecondery,
  background,
} from "../../Common/color.js";
import Header from "../../Common/Header.js";

export default function Profile() {
  const navigation = useNavigation();

  const SECTIONS = [
    {
      icon: "settings",
      items: [
        {
          id: "Your Profile",
          icon: "user",
          label: "Your Profile",
          type: "link",
        },
        {
          id: "Payment Methods",
          icon: "credit-card",
          label: "Payment Methods",
          type: "link",
        },
        {
          id: "My Orders",
          icon: "shopping-bag",
          label: "My Orders",
          type: "link",
        },
        {
          id: "settings",
          icon: "settings",
          label: "settings",
          type: "link",
        },
        {
          id: "Help Center",
          icon: "help-circle",
          label: "Help Center",
          type: "link",
        },
        {
          id: "Privacy Policy",
          icon: "shield",
          label: "Privacy Policy",
          type: "link",
        },
        {
          id: "Invites Friends",
          icon: "users",
          label: "Invites Friends",
          type: "link",
        },
      ],
    },

    {
      icon: "help-circle",
      items: [
        {
          id: "Log Out",
          icon: "log-out",
          label: "Log Out",
          type: "link",
        },
      ],
    },
  ];

  const handleNavigation = (id) => {
    switch (id) {
      case "Your Profile":
        navigation.navigate("Profile");
        break;
      case "Payment Methods":
        navigation.navigate("PaymentMethods");
        break;
      case "My Orders":
        navigation.navigate("OrderActive");
        break;
      case "settings":
        navigation.navigate("Setting");
        break;

      case "Help Center":
        navigation.navigate("HelpCenter");
        break;

      case "Privacy Policy":
        navigation.navigate("PrivacyPolicy");
        break;
      case "Invites Friends":
        navigation.navigate("InvitesFriends");
        break;
      case "Log Out":
        confirmLogOut();
        break;

      default:
        break;
    }
  };

  const confirmLogOut = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out from your account?",
      [
        {
          text: "Cancel",
        },
        {
          text: "yes, log out",
          onPress: () => logOut(),
        },
      ],
      { cancelable: false }
    );
  };
  
  const logOut = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View contentContainerStyle={styles.container}>
      <Header/>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt="Profile Picture"
                source={One}
                style={styles.profileAvatar}
              />
              <View style={styles.profileAction}>
                <FeatherIcon name="edit-3" size={20} color={subSecondery} />
              </View>
            </View>
          </TouchableOpacity>

          <Text style={styles.profileName}>Nada Obaid</Text>
          <Text style={styles.profileAddress}>nada@example.com</Text>
        </View>

        {SECTIONS.map(({ header, items }) => {
          return (
            <View style={styles.section} key={header}>
              <Text style={styles.sectionHeader}>{header}</Text>
              {items.map(({ label, type, icon, id }) => {
                return (
                  <TouchableOpacity
                    key={id}
                    onPress={() => handleNavigation(id)}
                  >
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  profile: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    color: background,
    textAlign: "center",
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: secondery,
    textAlign: "center",
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAction: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: primry, 
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 50
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
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
