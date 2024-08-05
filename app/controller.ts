import axios from "axios";
import { SendDataProps, successToast } from "../constants/utils";
import { Alert } from "react-native";
const url = "https://crudcrud.com/api/cf2e0de667f6434393ca8c3ef843d356/tasks"

/**
 * Impliment Async strorage to store returned data
 * 
 */

export const getData = async () => {
    const response = await axios({
        method: "GET",
        url: url, //url endpoint
        timeout: 30000
    }).then((response) => {
        console.log("data", response?.data)
        return (response?.data)
    }).catch((error) => {
        console.log("error occurred while fetching data!", error)
    })

    return response
}

export const createTask = async (data: SendDataProps) => {
    // console.log("sendData", data)
    await axios({
        method: "POST",
        url: url, //url
        data: data,
        timeout: 30000
    }).then(() => {
        successToast("Task Created Successfully")
    }).catch((error) => {
        console.log("error occurred while creating item!", error)
    })
}

export const updateItem = async (data: SendDataProps, id: string) => {
    // console.log("data: ", data)
     await axios.put(url + `/${id}`, data)
         .then((response) => {
        console.log("response", response)
        successToast("Task Updated Successfully")
    }).catch((error) => {
        console.log("error occurred while updating item!", error)
    })
}

export const deleteItem = (id: string) => {
    // console.log("test delete", url + `/${id}`)
     axios.delete(url + `/${id}`)
         .then((response) => {
             console.log("response", response)
             successToast("Task Deleted Successfully")
            }).catch((error) => {
         console.log("error occurred while deleting item!", error)
     })
}

export const showAlert = (message: string, id: string) =>
    Alert.alert('Confirm Action', `${message}`, [
        {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
        },
        {text: 'OK', onPress: () => {
            deleteItem(id);
        }},
    ]);