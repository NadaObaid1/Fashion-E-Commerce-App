import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

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
      <Text style={styles.textHeader}>Sign In</Text>
      <Text style={styles.text}>Hi, welcome back you've been missed</Text>

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
        <View>
        <Text style={styles.passwordLinkText} onPress={() => navigation.navigate('SendCode')}>Forget Password?</Text>
        <View style={{ height: 1, borderBottomWidth: 0.5, borderBottomColor: "#804d3b" }} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Or sign in with</Text>
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
        Don't have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
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
    marginTop: 120,
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5,
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
  },
  divider: {
    height: 1,
    backgroundColor: "#804d3b",
    marginTop: 5,
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

export default Login;
