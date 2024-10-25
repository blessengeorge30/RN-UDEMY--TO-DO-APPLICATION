import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalhandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
      
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Your course goal! '
                    value={enteredGoalText}
                    onChangeText={goalInputHandler} />
                    <View style={styles.buttonContainer}>
                    <View style={styles.Button}>
                        <Button title="Add Goal" onPress={addGoalhandler} />  
                    </View>
                      <View style={styles.Button}>
                         <Button title="Cancel" />
                      </View>
                     
                    </View>
                
            </View>
  

    )
};



const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'

    },

    textInput: {
        borderWidth: 1.5,
        borderColor: '#ccc',
        width: '100%',
        marginRight: 8,
        padding: 18,
        elevation: 5,
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf:'center'
    },
    Button:{
        width: '40%',
        marginHorizontal:10,
        marginTop:20
    }
   

})
export default GoalInput;