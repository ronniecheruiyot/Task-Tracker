import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";
import {useState} from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "../assets/styles";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import Colors from "../constants/Colors";

export default function IssuesForm(){
    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();
    const { action, selectedItem } = params;
    const details = selectedItem ? JSON.parse(selectedItem) : {};

    const [title, setTitle] = useState(action === "Edit" ? details?.title : '')
    const [description, setDescription] = useState(action === "Edit" ? details?.description : '')
    const [type, setType] = useState(action === "Edit" ? details?.status : '')
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    

    const typeList = [
        {label: 'Complete', value: 'complete'},
        {label: 'In-Review', value: 'inReview'},
        {label: 'In-Progress', value: 'inProgress'},
        {label: 'Backlog', value: 'backlog'},
    ];
    const priorityList = [
        {label: 'High', value: 'High'},
        {label: 'Medium', value: 'Medium'},
        {label: 'Low', value: 'Low'},
    ];

    const alert = () =>
        Alert.alert('Issue Submitted', `Issue ${action === "Create" ? "created" : "updated"} successfully`, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

    // const submitIssue = () => {
    //     const sendData = {
    //         "date": new Date().toDateString(),
    //         "description": description,
    //         "type": type,
    //         "priority": priority,
    //     }
    //     // console.log("sendData", sendData)
    //     if(task === "Create"){ //Create entry
    //         submit(sendData);
    //     }else{ //Update
    //         submit(sendData, selectedItem?._id);
    //     }
    //     setShowIssuesForm(false)
    //     alert()
    // }

    return (
        <View style={styles.listContainer}>
                  <View >
                      <Text style={{marginVertical: 30, fontSize: 25, fontWeight: 700, letterSpacing: 1}}>{action === "Create" ? "New Issue" : "Edit"}</Text>
                      <View>
                        
                        <View
                              style={{
                                  display: "flex",
                                  flexDirection: 'column',
                                  marginBottom: 5
                              }}
                          >
                          <Text style={{marginBottom: 3, color: "#009F93"}}>Title:</Text>
                          <TextInput
                              style={styles.input}
                              placeholder="Add a title"
                              value={description}
                              onChangeText={setDescription}
                          />
                          </View>
                          <View
                              style={{
                                  display: "flex",
                                  flexDirection: 'column',
                                  marginBottom: 5
                              }}
                          >
                          <Text style={{marginBottom: 3, color: "#009F93"}}>Description:</Text>
                          <TextInput
                              style={styles.input}
                              placeholder="Describe the task in detail"
                              value={description}
                              onChangeText={setDescription}
                              multiline={true}
                          />
                          </View>
                          
                          <View
                              style={{
                                  display: "flex",
                                  flexDirection: 'column',
                                  marginBottom: 5,
                                  zIndex:1
                              }}
                          >
                          <Text style={{marginBottom: 5, color: "#009F93"}}>Status:</Text>
                          <DropDownPicker
                              open={open1}
                              value={type}
                              items={typeList}
                              setOpen={setOpen1}
                              setValue={setType}
                          />
                          </View>

                
                      </View>
                  </View>

                  <View style={{
                      display: "flex",
                      justifyContent: 'center',
                      flexDirection: 'row',
                      marginTop: 15
                  }}>
                    
                      <View style={{marginVertical: 30 , width: '100%'}}>
                          <TouchableOpacity
                              style={{
                                  backgroundColor: Colors.light.tint,
                                  borderRadius: 10,
                                  padding: 5,
                                  alignItems: "center"
                              }}
                              onPress={() => {}}//{submitIssue()}}
                          >
                              <View style={{
                                  display: "flex",
                                  justifyContent: 'center',
                                  flexDirection: 'row',
                                  // marginTop: 15
                              }}>
                                  <Text style={{fontSize: 20, letterSpacing: 1, fontWeight: 400 }}>{action === "Create" ? "Submit" : "Update"}</Text>
                              </View>
                          </TouchableOpacity>
                      </View>
                  </View>
      </View>
    );
}
