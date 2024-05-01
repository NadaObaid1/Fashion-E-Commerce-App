import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from "@expo/vector-icons";
import Header from "../../Common/Header.js";

const ResetPassword = () => {
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
      <Header />
      <Text style={styles.textHeader}>New Password</Text>
      <Text style={styles.text}>Your new password must be different from previously used passwords.</Text>

      <View style={styles.inputGroup}>
      <Text style={styles.label}>Password</Text>
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
      <Text style={styles.label}>Confirm Password</Text>
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


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Create New Password</Text>
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
  textHeader: {
    fontWeight: "500",
    fontSize: 24,
    marginTop: 50,
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "gray",
  },
  inputGroup: {
    marginTop: 15
  },
  label: {
    fontSize: 13,
    marginBottom: 5,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e7eaf6',
    borderRadius: 30,
    padding: 12,
    marginBottom: 5,
  },
  iconEye: {
    position: 'absolute',
    right: 10,
    top: 12
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
  }
});

export default ResetPassword;
