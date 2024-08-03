import { StatusBar } from 'expo-status-bar';
import { styles } from '../../assets/styles';

import {Text, TouchableOpacity, View, Alert, Button, Image, Platform} from "react-native";
import {useEffect, useState} from "react";
import Modal from "react-native-modal";
import { NoDataFound } from '../../constants/utils';


export default function ModalScreen() {
  return (
    <View style={styles.listContainer}>
      
      {/* If we have no data then render this illustration */}
        <NoDataFound/>
    </View>
  );
}
