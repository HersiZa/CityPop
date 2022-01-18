import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Button, SafeAreaView, Alert } from 'react-native';
import SearchforCity from "./src/SearchforCity";



export default function App() {
  const showToast = () => {
   console.log ("Toast clicked...")
   ToastAndroid.show("You clocked this toast",
   ToastAndroid.SHORT,
   ToastAndroid.BOTTOM
   )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CityPop</Text>
      <Text style={styles.text2}>Fixa Api till geonames</Text>
      <Router>
            <div className="App">
                <Link to="/"><h1 data-aos="fade-down" data-aos-duration="1000">Citypop</h1></Link>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/search-city" component={SearchCity}/>            
                </Switch>
            </div>
        </Router>
    <TouchableOpacity style = {styles.button} onPress={() => showToast()}>
      <Text style={{color:"#fff"}}>Press me!</Text>
    </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}
const Home = () => (
  <div className="home">
      <Link className="search-type" id="search-city" to='/search-city' data-aos="fade-right" data-aos-duration="1700">
              <p>Search by city</p></Link>
  </div>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#304ffe",
    fontSize: 60,
    padding: 20
  },

  text2: {
    color: "#304ffe",
    fontSize: 40,
    padding: 25
  },
  

  button: {
    borderRadius: 10,
    backgroundColor: "#29b6f6",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }  
});
