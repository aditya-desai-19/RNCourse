import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

const GoalInput = (props) => {
  //Change state of input
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.add(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    // Modal is just like a layer used to display something
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="white"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler}  />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"red"}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 24,
    backgroundColor: '#2A2F4F'
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "contain"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    marginRight: 2,
    padding: 8,
    color: "white"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    margin: 8,
    width: "30%"
  }
});

export default GoalInput;
