import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  const onChangeEmailHandler = (email) => {
    setEmail(email);
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
      <Text style={styles.textHeader}>Create Account</Text>
      <Text style={styles.text}>Fill your information below or register with your social account.</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={email}
          onChangeText={onChangeEmailHandler}
          style={styles.input}
          placeholder="John Doe"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={onChangeEmailHandler}
          style={styles.input}
          placeholder="example@gmail.com"
        />
      </View>

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

    <TouchableOpacity style={styles.passwordLink}>
      <View style={styles.passwordLinkContainer}>
        <FontAwesome5 name="check-square" size={20} color="#804d3b" style={styles.icon} />
        <Text style={styles.passwordLinkText}>
          Agree with <Text style={{color: '#804d3b', textDecorationLine: 'underline', fontWeight: '500'}}>Terms & Conditions</Text>
        </Text>
      </View>
    </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate('ProductScreen')}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Or sign up with</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="google" size={24} color="#804d3b" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="twitter" size={24} color="#804d3b" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="linkedin" size={24} color="#804d3b" />
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        Don't have an account? <Text style={styles.signUpLink} onPress={()=>navigation.navigate('Login')}>Sign In</Text>
      </Text>
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
    marginTop: 80,
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 50,
    textAlign: "center",
    color: "gray",
  },
  inputGroup: {
    marginTop: 30
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
    marginBottom: 2,
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
    marginTop: 10,
  },
  passwordLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  passwordLinkText: {
    fontSize: 16,
    color: 'black',
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerText: {
    flex: 1,
    textAlign: "center",
    color: "gray",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconButton: {
    borderColor: "#804d3b",
    borderWidth: 0.3,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 9,
  },
  signUpText: {
    textAlign: "center",
    marginTop: 20,
  },
  signUpLink: {
    color: "#804d3b",
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
});

export default SignUp;
