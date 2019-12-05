import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = props => {
  const { imgSrc, title, score } = props;
  return (
    <View>
      <Image source={imgSrc} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
