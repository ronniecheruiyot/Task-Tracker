import { Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/styles';
import { useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import { IconDetails, IState, ITask, RoundButton, url } from '../../constants/utils';
import { Link, useRouter } from 'expo-router';
import { deleteItem, getData } from '../controller';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
  // const [data, setData] =useState<ITask[]>([])
  const [showIssuesForm, setShowIssuesForm] = useState(false);
  const selectedItem = {
    _id: "",
    title: "",
    description: "",
    status: "",
    dueDate: ""
  }
  const router = useRouter();
  const taskList: ITask[] = useSelector((state: IState) => state.taskState.tasks); //get stored selected task data using redux 

  useEffect(() => {
    getData()
  }, [])

  const handleAddTaskClicked = () => {
    router.push({pathname: "/taskForm", params: {action: 'Create', selectedItem: JSON.stringify(selectedItem)}})
  }

  const inProgressCount = taskList.filter((task: ITask) => task.status === "In-Progress").length
  const inReviewCount = taskList.filter((task: ITask) => task.status === "In-Review").length
  const completedCount = taskList.filter((task: ITask) => task.status === "Complete").length
  const backlogCount = taskList.filter((task: ITask) => task.status === "Backlog").length

  const time = new Date().getHours();
  let greeting: string;
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <>
    <ScrollView 
    // style={{backgroundColor: "#dbf7e0"}}
    >
      <View style={styles.container}>
        <View style={{display: 'flex', marginHorizontal: 15}}>
          <Text style={{fontSize: 25, fontWeight: 700, letterSpacing: 1}}>{greeting}</Text>
          <Text style={{...styles.title1, marginTop: 5, letterSpacing: 1}}>Jane Doe</Text>
        </View>
        
        <View style={{display: 'flex', marginVertical: 30, marginHorizontal: 10}}>
          <View style={styles.dashViewCard}>
            <Text style={{fontSize: 20, fontWeight: 400, letterSpacing: 1, color: '#009F93'}}>
              {taskList.length > 0 ? `Last task added on` : `No Tasks added yet`} 
            </Text>
            <Text style={{fontSize: 16, fontWeight: 300, letterSpacing: 1, marginTop: 5}}>
              {taskList.length > 0 ? taskList[taskList.length-1]?.date : ''}
            </Text>
            <Text style={{fontSize: 14, fontWeight: 300, marginTop: 20, letterSpacing: 1}}>
              {`${inProgressCount} ${inProgressCount > 1 ? "Tasks are" : "Task is"} pending`}
            </Text>
          </View>
        </View>

        <View style={{display: 'flex', marginHorizontal: 15}}>
          <Text style={{fontSize: 22, fontWeight: 600, letterSpacing: 1}}>Review</Text>
        </View>
      

        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 15}}>
          <View style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
            <View style={{...styles.infoCards}}>
                 <Text style={{...styles.cardTitle, color: '#00838f'}}>{completedCount}</Text>
                 <Text style={[styles.cardText, {marginVertical: 10}]}>Complete</Text>
                 <IconDetails name={'thumbs-up'} color='#009F93'/>
            </View>
            <View style={{...styles.infoCards}}>
                 <Text style={{...styles.cardTitle, color: '#fbc02d'}}>{inProgressCount}</Text>
                 <Text style={[styles.cardText, {marginVertical: 10}]}>In-progress</Text>
                 <IconDetails name={'spinner'} color='#009F93'/>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'column' , width: "50%" }}>
            <View style={{...styles.infoCards}}>
                 <Text style={{...styles.cardTitle, color:"#d84315"}}>{inReviewCount}</Text>
                 <Text style={[styles.cardText, {marginVertical: 10}]}>In-Review</Text>
                 <IconDetails name={'hourglass-2'} color='#009F93'/>
            </View>
            <View style={{...styles.infoCards}}>
                 <Text style={{...styles.cardTitle, color: '#0d47a1'}}>{backlogCount}</Text>
                 <Text style={[styles.cardText, {marginVertical: 10}]}>Backlog</Text>
                 <IconDetails name={'tasks'} color='#009F93'/>
            </View>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
      
  </ScrollView>

    <RoundButton 
      title="+" 
      onPress={() => handleAddTaskClicked()} 
      size={60} 
      backgroundColor={Colors.light.tint}
    />
  </>
  );
}
