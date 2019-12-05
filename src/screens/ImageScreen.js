import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../conponents/ImageDetail";
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require("../../assets/forest.jpg")}
        score="9"
      />
      <ImageDetail
        title="Beach"
        imgSrc={require("../../assets/beach.jpg")}
        score="7"
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require("../../assets/mountain.jpg")}
        score="5"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
