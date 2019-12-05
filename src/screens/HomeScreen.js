import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Component");
        }}
        title="Component Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="List Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Image");
        }}
        title="Images"
      />
      <Button
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Counter App"
      />
      <Button
        onPress={() => {
          navigation.navigate("Colors");
        }}
        title="Color App"
      />
      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Square Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
