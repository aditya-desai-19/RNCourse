import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalArea}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalArea: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  goalItem: {
    color: "white",
  },
});

export default GoalItem;
