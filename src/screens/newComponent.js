import React from "react";
import { Text, StyleSheet, View } from "react-native";

const NewComponent = () => {
  const name = "Dorbor Richards";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React-Native</Text>
      <Text style={styles.secondText}>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "blue"
  },
  secondText: {
    fontSize: 20,
    color: "orange"
  }
});

export default NewComponent;
