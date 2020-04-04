import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    //init question array
    this.state = {
      ques:[]
    };
  }

  componentDidMount() {

    //fetch data and form json results set equal to variable
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let ques = result.properties.periods;
     
      //set results to array
      this.setState({
        ques: ques
      });

      console.log({ques})

    })
    .catch((error) => {console.log(error)} );

  }
 

  render(){
  return (
    //display data from api in a card with question and answer 
   <View style={styles.container}>
     {this.state.ques.map((value, index) => {
          return <Card key={index}>
              <Text>{value.name}</Text>
              <Text> {value.startTime}</Text>
              {console.log({value})}
          </Card>})} 

      <Text>Open u App.js to start working on your app!</Text>
    </View>
  );
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
