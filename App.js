import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/Goalitems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalhandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,
    { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer} >

      <GoalInput onAddGoal={addGoalhandler} />
      <View>
        <ScrollView style={styles.goalsContainers} alwaysBounceVertical={false} >
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }} />



        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },



  goalsContainers: {
    marginTop: 22,


  },

});