import {Alert, Pressable, Text, TextInput, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";
import {useEffect, useState} from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "../assets/styles";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import Colors from "../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { errorToast, IconDetails, infoToast, isEmptyString, SendDataProps, successToast } from "../constants/utils";
import { createTask, deleteItem, showAlert, updateItem } from "./controller";
import axios from "axios";

export default function IssuesForm(){
    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();
    const { action, selectedItem } = params;
    const details = selectedItem ? JSON.parse(selectedItem) : {};
    console.log("edit data", details)

    const [title, setTitle] = useState(action === "Edit" ? details?.title : '')
    const [description, setDescription] = useState(action === "Edit" ? details?.description : '')
    const [dueDate, setDueDate] = useState(action === "Edit" ? details?.dueDate : '')
    const [status, setStatus] = useState(action === "Edit" ? details?.status : '')
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleShowDatePicker = () => {
        setShowDatePicker(!showDatePicker)
    }

    const statusList = [
        {label: 'Complete', value: 'Complete'},
        {label: 'In-Review', value: 'In-Review'},
        {label: 'In-Progress', value: 'In-Progress'},
        {label: 'Backlog', value: 'Backlog'},
    ];

    const alert = () =>
        Alert.alert('Task Submitted', `Task ${action === "Create" ? "created" : "updated"} successfully`, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    
    const formValidation = () => {
        if(title.trim() === ""){
            console.log("title", title)
            errorToast("Task Title is required!");
            return false
        }
        if(isEmptyString(description)){
            console.log("description", description)
            errorToast("Task description is required!")
            return false
        }
        if(isEmptyString(dueDate)){
            errorToast("Task Due date is required!")
            return false
        }
        if(isEmptyString(status)){
            errorToast("Task Status is required!")
            return false
        }

        return true
    }

    const submitIssue = () => {
        const sendData = {
            "date": new Date().toDateString(),
            "title": title,
            "description": description,
            "status": status,
            "dueDate": dueDate,
        }
        console.log("sendData", sendData)
        if(action === "Create"){ //Create entry
            if(formValidation()) {
                createTask(sendData)
            };
        }
        else{ //Update
            if(formValidation()) {
                updateItem(sendData, details?._id)
            };
        }
    }

    return (
        <View style={styles.listContainer}>
                  <View >
                      <Text style={{marginVertical: 30, fontSize: 25, fontWeight: 400, letterSpacing: 1}}>{action === "Create" ? "New Task" : "Edit Task"}</Text>
                      <View>
                        
                        <View style={styles.inputView}>
                          <Text style={styles.inputTitle}>Title:</Text>
                          <TextInput
                              style={styles.input}
                              placeholder="Add a title"
                              value={title}
                              onChangeText={setTitle}
                          />
                          </View>

                          <View style={styles.inputView}>
                          <Text style={styles.inputTitle}>Description:</Text>
                          <TextInput
                              style={styles.input}
                              placeholder="Describe the task in detail"
                              value={description}
                              onChangeText={setDescription}
                              multiline={true}
                          />
                          </View>

                          <View style={styles.inputView}>
                            <Text style={styles.inputTitle}>Due Date:</Text>
                            <TouchableOpacity
                                style={styles.input}
                                onPress={() => {setShowDatePicker(true)}}//{submitIssue()}}
                            >
                              <View style={{
                                  display: "flex",
                                  justifyContent: 'center',
                                  flexDirection: 'row',
                                  // marginTop: 15
                              }}>
                                  <Text style={{fontSize: 16, letterSpacing: 1, fontWeight: 300, flex: 1, justifyContent: 'flex-start'}}>
                                    {dueDate === "" ? "Pick Due Date" : dueDate}
                                  </Text>
                                  <IconDetails name={'calendar'} color='#009F93'/>
                                  </View>
                            </TouchableOpacity>
                         </View>
                          
                          <View style={styles.inputView}>
                          <Text style={styles.inputTitle}>Status:</Text>
                          <DropDownPicker
                              open={open1}
                              value={status}
                              items={statusList}
                              setOpen={setOpen1}
                              setValue={setStatus}
                              textStyle={{fontSize: 16, fontWeight: 300}}
                              style={{borderWidth: 0}}
                              placeholder={action === "Edit" ? `${details?.status}` : "Select Status"}
                          />
                          </View>

                
                      </View>
                      
                    <View>
                        <Modal isVisible={showDatePicker}>
                        <View style={{justifyContent: 'center',backgroundColor: '#fff', height: '50%', paddingHorizontal: 20}}>
                            <CalendarPicker 
                            onDateChange={(value) => {
                                setDueDate(new Date(value).toDateString())
                                // console.log("Date", new Date(value).toDateString())
                            }} 
                            width={350} 
                            textStyle={{fontSize: 15, fontWeight: 400}}
                            />
                            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30}}>
                            <Pressable 
                                style={{...styles.datePickerButton, backgroundColor: '#fbc02d'}} 
                                onPress={handleShowDatePicker}
                            >
                            <Text style={{fontSize: 18, fontWeight: 500, letterSpacing: 1, color: '#fff'}}>Cancel</Text>
                            </Pressable>
                            <Pressable style={styles.datePickerButton1} onPress={handleShowDatePicker}>
                                <Text style={{fontSize: 18, fontWeight: 500, letterSpacing: 1, color: '#009F93'}}>Ok</Text>
                            </Pressable>
                            
                            </View>
                        </View>
                        </Modal>
                    </View>


                  </View>

                  <View style={{
                      display: "flex",
                      justifyContent: 'center',
                      flexDirection: 'row',
                      marginTop: 25
                  }}>
                    {action === "Edit" &&
                      <View style={{width: '50%', padding: 5}}>
                          <TouchableOpacity
                              style={{
                                  backgroundColor: '#fbc02d',
                                  borderRadius: 10,
                                  padding: 10,
                                  alignItems: "center"
                              }}
                              onPress={() => {showAlert("Do you want to delete this task", details?._id)}}
                          >
                              <View style={{
                                  display: "flex",
                                  justifyContent: 'center',
                                  flexDirection: 'row',
                                  // marginTop: 15
                              }}>
                                  <Text style={{fontSize: 18, letterSpacing: 1, fontWeight: 500, color: '#fff' }}>
                                    Delete
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      </View>
                      }
                      <View style={{width: action === "Create" ? '100%' : "50%", padding: 5}}>
                          <TouchableOpacity
                              style={{
                                  backgroundColor: Colors.light.tint,
                                  borderRadius: 10,
                                  padding: 10,
                                  alignItems: "center"
                              }}
                              onPress={() => {submitIssue()}}
                          >
                              <View style={{
                                  display: "flex",
                                  justifyContent: 'center',
                                  flexDirection: 'row',
                                  // marginTop: 15
                              }}>
                                  <Text style={{fontSize: 18, letterSpacing: 1, fontWeight: 500, color: '#fff' }}>
                                    {action === "Create" ? "Submit" : "Update"}
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      </View>
            
                  </View>
      </View>
    );
}
