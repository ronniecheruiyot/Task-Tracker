import { StatusBar } from 'expo-status-bar';
import { styles } from '../../assets/styles';

import {Text, TouchableOpacity, View, Alert, Button, Image, Platform} from "react-native";
import {useEffect, useState} from "react";
import Modal from "react-native-modal";


export default function ModalScreen() {
  return (
    <View style={styles.listContainer}>
      
      {/* If we have no data then render this illustration */}
        <View>
        <Image
            source={require("../../assets/images/not_found.png")}
            style={{
                width: 400,
                height: 400,
                resizeMode: "contain",
            }}
            alt={"No data image"}
        />
        </View>
        <Text style={{fontWeight: 300, textAlign: 'center', letterSpacing: 1}}>No data found!</Text>
    </View>
  );
}
