import { StatusBar } from 'expo-status-bar';
import { styles } from '../../assets/styles';

import {Text, TouchableOpacity, View, Alert, Button, Image, Platform, ScrollView, TextInput} from "react-native";
import {useEffect, useState} from "react";
import Modal from "react-native-modal";
import { IState, ITask, ITask1, NoDataFound, url } from '../../constants/utils';
import Colors from '../../constants/Colors';
import { getData } from '../../controllers/controller';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedTask } from '../../state/reducers/stateSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3, flex: 1, justifyContent: 'flex-end'}} {...props} />;
}

export default function TaskListScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const taskList = useSelector((state: IState) => state.taskState.tasks); //get stored selected task data using redux 
  const dispatch = useDispatch();

  const handleEditClick = (task: ITask) => {//task: ITask
    dispatch(
      updateSelectedTask(
        {
          selectedTask: task
        }
      )
    )
    router.push({pathname: "/taskForm"
      , params: {action: 'Edit', selectedItem: JSON.stringify(task)}
    })
  }

  return (
    <ScrollView>
      <View style={styles.listContainer1}>
        <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            // inlineImageLeft='../../assets/images/searchIcon.svg'
        />  
        <View style={{display: 'flex', marginVertical: 30}}>

          {/* Loop through the data array and render the task items */}
          {taskList && taskList.map((task: ITask, i) => {
            return (
              <TouchableOpacity key={i} style={{...styles.viewCard, borderLeftColor: Colors.light.tint}} onPress={() => {handleEditClick(task)}}>
                  <Text style={{fontSize: 18, fontWeight: 500, marginVertical: 5, letterSpacing: 1}}>
                    {task.title}
                  </Text>
                  <Text style={{flex: 1, fontSize: 16, fontWeight: 300, letterSpacing: 1, marginTop: 5}}>
                    {task.description}
                  </Text> 
                  <View style={{display: 'flex', flexDirection: 'row'}}>             
                    <Text style={{fontSize: 12, fontWeight: 300, marginTop: 20, letterSpacing: 1, flex: 1,justifyContent: 'flex-start'}}>
                      {task.date}
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: 400, marginTop: 20, letterSpacing: 1, justifyContent: 'flex-end', color: '#009F93'}}>
                      {task.status}
                    </Text>
                  </View>
              </TouchableOpacity>
            )
          })}
          {taskList && taskList.length === 0 &&
          <NoDataFound/>
          }
  
        </View>
        <View style={styles.separator}/>
      </View>
      
  </ScrollView>
  );
}
