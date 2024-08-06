import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      backgroundColor: "#fff",
    },
    scrollViewContainer: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      width: '100%',
      height: 200,
    },
    container: {
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 15,
      marginTop: 30,
    },
    listContainer: {
      // flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 25,
    },
    listContainer1: {
      // flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 18,
    },
    viewCard: {
      padding: 15,
      borderRadius: 8,
      // alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: "#f5f5f5",
      marginVertical: 10,
      elevation: 20,
      borderLeftWidth: 5
    },
    dashViewCard: {
      padding: 15,
      borderRadius: 20,
      // alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: "#f5f5f5",
      marginVertical: 10,
      elevation: 20
    },
    infoCards: {
      padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#edfbef',
      margin: 10,
      elevation: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    title1: {
      fontSize: 18,
      fontWeight: 400,
    },
    separator: {
      marginVertical:30,
      height: 1,
      width: '80%',
    },
    cardTitle: {
      fontSize: 30,
    },
    cardText: {
      fontSize: 15,
      letterSpacing: 1,
      fontWeight: 400
    },
    fab: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      position: "absolute",
      bottom: 10,
      right: 30,
      backgroundColor: "#26653A",
      // padding: 20,
    },
    listOfIssuesView: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'gray',
      // alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 7,
      margin: 5,
      width: '98%',
      // height: '60%'
    },
    input: {
      borderColor: "gray",
      width: "100%",
      // borderWidth: 0.5,
      borderRadius: 10,
      padding: 5,
      fontSize: 15,
      letterSpacing: 1,
      borderBottomWidth: 0.5,
      marginBottom: 10
    },
    searchInput: {
      borderColor: "gray",
      width: "100%",
      // borderWidth: 0.5,
      borderRadius: 10,
      padding: 5,
      fontSize: 15,
      letterSpacing: 1,
      borderBottomWidth: 0.5,
      marginTop: 15
    },
    inputTitle: {
      marginBottom: 5,
      color: "#009F93",
      fontSize: 17,
      fontWeight: 'medium',
      letterSpacing: 1
    },
    inputView: {
      display: "flex",
      flexDirection: 'column',
      marginBottom: 15,
    
    },
    datePickerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius: 10,
      // borderWidth: 0.5,
      width: '45%',
      marginHorizontal: 5
    },
    datePickerButton1: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius: 10,
      borderWidth: 0.5,
      width: '45%',
      marginHorizontal: 5
    },
  });