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
      marginHorizontal: 25,
      marginTop: 30,
    },
    listContainer: {
      // flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 25,
    },
    viewCard: {
      padding: 20,
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
      backgroundColor: 'gray',
      margin: 10,
      elevation: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical:30,
      height: 1,
      width: '80%',
    },
    cardTitle: {
      fontSize: 25,
    },
    cardText: {
      fontSize: 15,
      letterSpacing: 1
    },
    fab: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      position: "absolute",
      bottom: 15,
      right: 35,
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
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
  });