import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  //Change state of input
  const [enteredGoalText, setEnteredGoalText] = useState('');

  //Change state of list of goals
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  // const addGoalHandler = () => {
  //   setCourseGoals((currentCourseGoals) => {
  //     [...currentCourseGoals, enteredGoalText];
  //   });
  // }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoalText])
  }

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
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
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
    padding:20,
    margin: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 24,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth:1,
    borderColor: 'white',
    width: '80%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
