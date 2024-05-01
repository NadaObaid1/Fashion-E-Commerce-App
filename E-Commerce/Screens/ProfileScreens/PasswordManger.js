import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../Common/Header.js";

const PasswordManager = () => {
  const [password, setPassword] = useState("");
  const [Rpassword, setRPassword] = useState("");
  const navigation = useNavigation();

  const onChangeRpasswordHandler = (Rpassword) => {
    setRPassword(Rpassword);
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Header title={"Password Manger"} />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Current Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={onChangePasswordHandler}
            style={styles.input}
            placeholder="**************"
          />
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Ionicons
              style={styles.iconEye}
              name={showPassword ? "eye" : "eye-off"}
              size={20}
            />
          </TouchableWithoutFeedback>
        </View>
        <FontAwesome5 icon={["fas", "lock"]} style={styles.lockIcon} />
      </View>
      <TouchableOpacity style={styles.passwordLink}>
        <View>
          <Text
            style={styles.passwordLinkText}
            onPress={() => navigation.navigate("SendCode")}
          >
            Forget Password?
          </Text>
          <View
            style={{
              height: 1,
              borderBottomWidth: 0.5,
              borderBottomColor: "#804d3b",
            }}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>New Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={onChangePasswordHandler}
            style={styles.input}
            placeholder="**************"
          />
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Ionicons
              style={styles.iconEye}
              name={showPassword ? "eye" : "eye-off"}
              size={20}
            />
          </TouchableWithoutFeedback>
        </View>
        <FontAwesome5 icon={["fas", "lock"]} style={styles.lockIcon} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirm New Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            value={Rpassword}
            onChangeText={onChangeRpasswordHandler}
            style={styles.input}
            placeholder="**************"
          />
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Ionicons
              style={styles.iconEye}
              name={showPassword ? "eye" : "eye-off"}
              size={20}
            />
          </TouchableWithoutFeedback>
        </View>
        <FontAwesome5 icon={["fas", "lock"]} style={styles.lockIcon} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  passwordLink: {
    alignItems: "flex-end",
    marginTop: 5,
  },
  passwordLinkText: {
    color: "#804d3b",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "gray",
  },
  inputGroup: {
    marginTop: 30,
  },
  label: {
    fontSize: 13,
    marginBottom: 5,
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e7eaf6",
    borderRadius: 30,
    padding: 12,
    marginBottom: 5,
  },
  iconEye: {
    position: "absolute",
    right: 10,
    top: 12,
  },
  button: {
    padding: 20,
    marginTop: 30,
    backgroundColor: "#804d3b",
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
  },
  passwordLink: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  passwordLinkText: {
    color: "#804d3b",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default PasswordManager;
