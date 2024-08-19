import axios from "axios";
import { errorToast, SendDataProps, successToast } from "../constants/utils";
import { Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { updateTasks } from "../state/reducers/stateSlice";
import {store} from '../state/store';
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * CRUD CRUD API
 * Create, Read, Update and Delete 
 */
const url = "https://crudcrud.com/api/cf2e0de667f6434393ca8c3ef843d356/tasks"

export const getData = () => {
    const response = axios({
        method: "GET",
        url: url, //url endpoint
        timeout: 30000
    }).then((response) => {
        // console.log("data", response?.data)
        const data = response?.data
        AsyncStorage.setItem('listOfTasks', JSON.stringify(data)) //Store data locally nusing Async Storage.
        store.dispatch(
            updateTasks(
              {
                tasks: data
              }
            )
          )
    }).catch((error) => {
        errorToast(error.response.message)
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
        getData()
        successToast("Task Created Successfully")
    }).catch((error) => {
        errorToast(error.response.message)
    })
}

export const updateItem = async (data: SendDataProps, id: string) => {
    // console.log("data: ", data)
     await axios.put(url + `/${id}`, data)
         .then((response) => {
            getData()
            successToast("Task Updated Successfully")
    }).catch((error) => {
        errorToast(error.response.message)
    })
}

export const deleteItem = async(id: string) => {
    // console.log("test delete", url + `/${id}`)
     await axios.delete(url + `/${id}`)
         .then((response) => {
            getData()
            successToast("Task Deleted Successfully")
            }).catch((error) => {
                errorToast(error.response.message)
            })
}

export const showAlert = (message: string, id: string, router: () => void) =>
    Alert.alert('Confirm Action', `${message}`, [
        {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
        },
        {text: 'OK', onPress: () => {
            deleteItem(id);
            router
        }},
    ]);