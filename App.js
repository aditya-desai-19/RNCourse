import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //Change state of list of goals
  const [courseGoals, setCourseGoals] = useState([]);

  const [isModalModified, setIsModalModified] = useState(false);

  const startAddGoalHandler = () => {
    setIsModalModified(true);
  };

  const endAddGoalHandler = () => {
    setIsModalModified(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== id));
  };

  return (
    // View is similar to div in html
    // <View style={styles.container}>
    //   <View>
    //     {/* Text is similar to headings in html */}
    //     {/* Styling using stylesheet object */}
    //     <Text style={styles.txtstyle}>This is a new container</Text>
    //   </View>
    //   {/* This is inline styling */}
    //   <Text style={{margin: 20, borderWidth: 2, borderColor: 'white', padding: 20, fontStyle: 'italic'}}>Hello Aditya</Text>
    //   {/* Button */}
    //   <Button title='Click me' />
    // </View>

    <View style={styles.appcontainer}>
      <Button title="Add new goal" color="blue" onPress={startAddGoalHandler} />
      <GoalInput visible={isModalModified} add={addGoalHandler} onCancel={endAddGoalHandler} />

      {/* In react native styles do not cascade(ie: each item is treated as independent) */}
      <View style={styles.goalsContainer}>
        {/* ScrollView is used to add scrolling functionality to the container */}
        {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalArea}>
              <Text style={styles.goalItem}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}

        {/* Flatlist is used instead of ScrollView when dealing with large list */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // txtstyle: {
  //   margin: 20,
  //   borderWidth: 2,
  //   borderColor: 'white',
  //   padding: 20
  // },
  appcontainer: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  goalsContainer: {
    flex: 5,
  },
});
