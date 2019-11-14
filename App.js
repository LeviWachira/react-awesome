import React, { Component, useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

import GetItem from './components/GetItem';
import GetInput from './components/GetInput';

export default function App() {
  const [courseGoals, SetCourseGoals] = useState([]);
  const [isAddMode, SetIsAddMode] = useState(false);
  const [ mode , SetMode] = useState(0)
  const [ minimum , SetMinimum] = useState(false)
  
  const addGoalHandle = goalTitle => {
    SetCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle
      }
    ]);
    SetIsAddMode(true);
  };

  const removeGoalHandle = goalID => {
    console.log('REMOVE ID ');
    console.log(goalID);
    
    SetCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalID);
    })
  }

  const onOpenAdd = () => {
    SetIsAddMode(true);
  }

  const cancleGoalHandle = () => {
    SetIsAddMode(false);
  };

  return (
    <View style={styles.screen} >
      <Button title="Add New Goal" onPress={onOpenAdd}/>
      <GetInput
        onCancle={cancleGoalHandle}
        onAddGoal={addGoalHandle}
        visible={isAddMode}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GetItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandle}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex : 1,
    justifyContent : 'center',
    padding: 50,
  }
})









