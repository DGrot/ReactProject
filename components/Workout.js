import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Workout is props that will return item, item left, item text
const Workout = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

// creates the stylesheet
const styles = StyleSheet.create({
  // the user added item workout
  item: {
    backgroundColor: "#e8f6ff",
    padding: 25,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderColor: "#2e2e2e",
    borderWidth: 2,
  },
  //the item text
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default Workout;
