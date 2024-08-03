import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={{display: 'flex'}}>
          <Text style={styles.title}>Hi Jane Doe</Text>
          <Text style={styles.title}>Good Morning</Text>
        </View>
        
        <View style={{display: 'flex', marginVertical: 40}}>
          <View style={styles.viewCard}>
            <Text style={styles.title}>Tab One</Text>
            <Text style={styles.title}>Tab One</Text>
          </View>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 20}}>
          <View style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
            <View style={{...styles.viewCard, height: '40%'}}>
              <Text style={styles.title}>Tab One</Text>
              <Text style={styles.title}>Tab One</Text>
              <Text style={styles.title}>Tab One</Text>
              <Text style={styles.title}>Tab One</Text>
            </View>
            <View style={{...styles.viewCard, height: '20%'}}>
              <Text style={styles.title}>Tab One</Text>
              <Text style={styles.title}>Tab One</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'column' , width: "50%" }}>
            <View style={{...styles.viewCard, height: '20%'}}>
              <Text style={styles.title}>Tab One</Text>
              <Text style={styles.title}>Tab One</Text>
            </View>
            <View style={{...styles.viewCard, height: '40%'}}>
              <Text style={styles.title}>Tab One</Text>
              <Text style={styles.title}>Tab One</Text>
              <Text style={styles.title}>Tab One</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator}/>
      </View>
  </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: '100%',
    height: 200,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginTop: 30
  },
  viewCard: {
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    marginHorizontal: 10,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
});
