import { Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import { styles } from '../../assets/styles';
import { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import { RoundButton } from '../../constants/utils';
import { Link } from 'expo-router';

export function IconDetails(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function HomeScreen() {
  const [count, setCount] =useState({})
  const [showIssuesForm, setShowIssuesForm] = useState(false);
  const selectedItem = {
    title: "",
    description: "",
    status: ""
  }


  return (
    <>
    <ScrollView 
    // style={{backgroundColor: "#dbf7e0"}}
    >
      <View style={styles.container}>
        <View style={{display: 'flex', marginHorizontal: 15}}>
          <Text style={{fontSize: 25, fontWeight: 700, letterSpacing: 1}}>Good Morning</Text>
          <Text style={{...styles.title, marginTop: 5, fontWeight: 400, letterSpacing: 1, color: Colors.light.tint}}>Jane Doe</Text>
        </View>
        
        <View style={{display: 'flex', marginVertical: 30, marginHorizontal: 10}}>
          <View style={styles.viewCard}>
            <Text style={{fontSize: 20, fontWeight: 600, marginVertical: 5, letterSpacing: 1}}>
              Last task added on 
            </Text>
            <Text style={{fontSize: 15, fontWeight: 400, letterSpacing: 1, color: Colors.light.tint}}>
              {new Date().toDateString()}
            </Text>
            <Text style={{fontSize: 16, fontWeight: 300, marginTop: 20, letterSpacing: 1}}>
              6 Tasks are pending
            </Text>
            {/* <TextWithUnderline text={"Simple"}/>
            <Text style={{fontSize: 20, fontWeight: 200, marginVertical: 5, letterSpacing: 1}}>Tracking</Text>
            <Text style={{fontSize: 25, fontWeight: 400, marginVertical: 5, letterSpacing: 1}}>Simplified</Text> */}
          </View>
        </View>

        <View style={{display: 'flex', marginHorizontal: 15}}>
          <Text style={{fontSize: 20, fontWeight: 600, letterSpacing: 1}}>Review</Text>
        </View>
      

        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 15}}>
          <View style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
            <View style={{...styles.infoCards, backgroundColor: "#edfbef"}}>
                 <Text style={styles.cardTitle}>{0}</Text>
                 <Text style={[styles.cardText, {marginTop: 15, marginBottom: 8}]}>Complete</Text>
                 <IconDetails name={'thumbs-up'} color='green'/>
            </View>
            <View style={{...styles.infoCards, backgroundColor: "#edfbef"}}>
                 <Text style={styles.cardTitle}>{0}</Text>
                 <Text style={[styles.cardText, {marginTop: 15, marginBottom: 8}]}>In-progress</Text>
                 <IconDetails name={'spinner'} color='green'/>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'column' , width: "50%" }}>
            <View style={{...styles.infoCards, backgroundColor: "#edfbef"}}>
                 <Text style={styles.cardTitle}>{0}</Text>
                 <Text style={[styles.cardText, {marginTop: 15, marginBottom: 8}]}>In-Review</Text>
                 <IconDetails name={'hourglass-2'} color='green'/>
            </View>
            <View style={{...styles.infoCards, backgroundColor: "#edfbef"}}>
                 <Text style={styles.cardTitle}>{0}</Text>
                 <Text style={[styles.cardText, {marginTop: 15, marginBottom: 8}]}>Backlog</Text>
                 <IconDetails name={'tasks'} color='green'/>
            </View>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
      
  </ScrollView>

  <Link 
    href={{
      pathname: "/taskForm",
      params: {action: 'Create', selectedItem: JSON.stringify(selectedItem)}
    }} 
    asChild
  >
    <RoundButton 
      title="+" 
      onPress={() => setShowIssuesForm(true)} 
      size={60} 
      backgroundColor={Colors.light.tint}
    />
  </Link>
  </>
  );
}
