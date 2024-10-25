import { useState } from "react";
import { View,TextInput,Button,StyleSheet } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

      function addGoalhandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return(
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='Your course goal! '
          value={enteredGoalText}
          onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalhandler} />
      </View>
    )
};



const styles =StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    
      },
    
      textInput: {
        borderWidth: 1.5,
        borderColor: '#ccc',
        width: '75%',
        marginRight: 8,
        padding: 8,
        elevation:5,
        borderRadius: 5
      },
})
export default GoalInput;