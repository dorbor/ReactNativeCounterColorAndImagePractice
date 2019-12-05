import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const CounterScreen = props => {
  const [counter, setCounter] = useState(0);

  const { imgSrc, title, score } = props;
  return (
    <View style={styles.view}>
      <Text style={styles.heading}> Count: </Text>
      <Text style={styles.num}>{counter}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Button
        title="Reset Count"
        onPress={() => {
          setCounter(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    fontSize: 20,
    paddingTop: 50
  },
  heading: {
    fontSize: 40
  },
  num: {
    fontSize: 50
  }
});
export default CounterScreen;
