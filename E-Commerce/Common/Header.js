import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { background, secondery, subSecondery } from '../Common/color.js';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, previousScreen }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (previousScreen) {
      navigation.navigate(previousScreen);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.headerIcon} onPress={handleBackPress}>
          <FontAwesome
            name="arrow-left"
            size={20}
            color={background}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    padding: 11,
    borderRadius: 20,
    borderColor: subSecondery,
    borderWidth: 1
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
    marginTop: 15,
    color: secondery, 
    fontWeight: 'bold' 
  }
});

export default Header;
