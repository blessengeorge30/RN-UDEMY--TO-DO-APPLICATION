import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.goalItem} >
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>

  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    paddingHorizontal: 25,
    padding: 29,
    borderRadius: 15,
    backgroundColor: 'blue',

  },
  pressedItem: {
    opacity: 0.2,
  },
  goalText: {
    color: 'white',
    fontSize: 18
  },

});