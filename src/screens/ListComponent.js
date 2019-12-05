import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListComponent = () => {
  const friends = [
    { name: "friend #1" },
    { name: "friend #2" },
    { name: "friend #3" },
    { name: "friend #4" },
    { name: "friend #5" },
    { name: "friend #6" },
    { name: "friend #7" },
    { name: "friend #8" },
    { name: "friend #9" },
    { name: "friend #10" }
  ];
  return (
    <View>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text style={styles.listStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 30
  }
});

export default ListComponent;
