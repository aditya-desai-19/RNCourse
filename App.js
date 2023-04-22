
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
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
      <View>
        <TextInput placeholder='Your course goal!' />
        <Button title='Add goal' />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtstyle: {
    margin: 20, 
    borderWidth: 2, 
    borderColor: 'white', 
    padding: 20
  },
  appcontainer: {
    padding:20
  }

});
