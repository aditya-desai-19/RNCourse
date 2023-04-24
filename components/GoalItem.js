import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    // Pressable component is used to delete an item
    // bind method allows us to create same function but with different this values
    <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>
      <View style={styles.goalArea}>
        <Text style={styles.goalItem}>{props.text}</Text>
      </View>
    </Pressable>
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
