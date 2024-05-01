import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'
import {
    primry,
    secondery,
    background,
  } from "../../Common/color.js";
  import Header from '../../Common/Header.js';

const PaymentMethods = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Header title={"Payment Methods"} />
      <Text style={styles.TextHeader}>credit & debit card</Text>
      <View style={styles.groub}>
        <View style={styles.icon}>
        <FontAwesome5
            name="credit-card"
            size={23}
            color={primry}
            onPress={() => navigation.navigate("Profile")}
        />
        </View>
        <Text style={styles.textstyle}>add new card</Text>
        <Text style={styles.link}>link</Text>
      </View>

      <Text style={styles.TextHeader}>more payment options</Text>
      <View style={styles.groub}>
        <View style={styles.icon}>
        <FontAwesome5
            name="paypal"
            size={23}
            color={primry}
            onPress={() => navigation.navigate("Profile")}
        />
        </View>
        <Text style={styles.textstyle}>paypal</Text>
        <Text style={styles.link}>link</Text>
      </View>

      <View style={styles.groub}>
        <View style={styles.icon}>
        <FontAwesome5
            name="apple"
            size={23}
            color={primry}
            onPress={() => navigation.navigate("Profile")}
        />
        </View>
        <Text style={styles.textstyle}>apple pay</Text>
        <Text style={styles.link}>link</Text>
      </View>

      <View style={styles.groub}>
        <View style={styles.icon}>
        <FontAwesome5
            name="google"
            size={23}
            color={primry}
            onPress={() => navigation.navigate("Profile")}
        />
        </View>
        <Text style={styles.textstyle}>google pay</Text>
        <Text style={styles.link}>link</Text>
      </View>
      </View>
  )
}

export default PaymentMethods

const styles = StyleSheet.create({
    groub:{
        flexDirection: 'row', 
        marginTop: 10, 
        padding: 20, 
        borderRadius: 15, 
        borderWidth: 0.5, 
        borderColor: secondery, 
        marginHorizontal: 20
    },
    TextHeader:{
        marginTop: 40,
        fontSize: 20,
        color: background,
        marginLeft: 30,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    icon:{
        marginLeft: 10,
        marginRight: 20, 
    },
    textstyle:{
        color: secondery,
        marginRight: 60,
        textTransform: 'capitalize',
        fontSize: 16, 
        fontWeight: '500'
    },
    link:{
        textTransform: 'capitalize',
        color: primry,
        fontSize: 16 ,
        marginLeft: 'auto' 
    }
})