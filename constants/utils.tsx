import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View, Image, Button, Pressable } from 'react-native';
import { styles } from '../assets/styles';
import Colors from './Colors';
import Modal from "react-native-modal";
import CalendarPicker from 'react-native-calendar-picker';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Toast from "react-native-toast-message";

export const url = "https://crudcrud.com/api/cf2e0de667f6434393ca8c3ef843d356/tasks"

export interface ITask {
  _id: string;
  date: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
}

export interface SendDataProps  {
  "date": string;
  "title": string,
  "description": string,
  "status": string,
  "dueDate": string,
}

export interface ITask1 {
  "_id": string;
  "date": string;
  "title": string;
  "description": string;
  "status": string;
  "dueDate": string;
}

interface RoundButtonProps {
  title: string;
  onPress: () => void;
  size?: number;
  backgroundColor?: string;
}

interface DatePickerProps {
  isVisible: boolean;
  setShowDatePicker: () => void;
  setDueDate: () => void
}

interface TextProps {
  text: string;
}

// export const TextWithUnderline = ({text}: TextProps) => {
//   return (
//     <>
//         <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//         <Svg height="100" width="300">
//             <Text
//             fill="green"
//             fontSize="35"
//             fontWeight="bold"
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             >
//             {text}
//             </Text>
//             <Line
//             x1="50"
//             y1="70"
//             x2="250"
//             y2="70"
//             stroke="green"
//             strokeWidth="10"
//             strokeLinecap="round"
//             />
//         </Svg>
//         </View>
//     </>
//   );
// };


export const RoundButton = ({
  title,
  onPress,
  size = 50,
  backgroundColor = Colors.light.tint
}: RoundButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.fab, { width: size, height: size, borderRadius: size / 2, backgroundColor}]}
      onPress={onPress}
    >
      <Text style={{fontSize: 32, color: 'white',fontWeight: 300, textAlign: 'center', textAlignVertical: 'center'}}>{title}</Text>
    </TouchableOpacity>
  );
};


export function NoDataFound() {
  return (
    <View style={styles.listContainer}>
      
      {/* If we have no data then render this illustration */}
        <View>
        <Image
            source={require("../assets/images/not_found.png")}
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

export function IconDetails(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

/**
 * self-described
 * @param item
 */
export const isNullUndefined = (item: string) => {
  try {
    return item === null || item === undefined;
  } catch (err) {
    return true;
  }
};

export const isEmptyString = (value: string) => {
  return typeof value === "string" && value.trim() === "";
};

export const errorToast = (message: string, duration = 4000) => {
  if (!isNullUndefined(message) && !isEmptyString(message)) {
    Toast.show({
      type: "error",
      text1: message,
      visibilityTime: duration,
    });
  }
};

export const infoToast = (message: string, duration = 4000) => {
  if (!isNullUndefined(message) && !isEmptyString(message)) {
    Toast.show({
      type: "info",
      text1: message,
      visibilityTime: duration,
    });
  }
};

export const successToast = (message: string, duration = 4000) => {
  if (!isNullUndefined(message) && !isEmptyString(message)) {
    Toast.show({
      type: "success",
      text1: message,
      visibilityTime: duration,
    });
  }
};