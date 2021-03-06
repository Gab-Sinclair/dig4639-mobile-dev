import React from 'react';
import Question from "./api/Question.json"
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Card } from 'react-native-elements';


export default class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
       correcto: [],
       show: 0,
       userAnswers: []
      };
    
   //function to loop through api 
          this.findCor = () =>{
        //array fpr correct answers
          let correct = []
        //loop through questions to find which question and answer match the one in the form 
          Question.forEach((value, index) =>{
              //add correct answer number to score array
              if(value.correct == this.state.userAnswers[index]){
                correct.push(value.correct)
              }
            })
            // Update the state here
            this.setState({
                  show:correct.length
            })
          }
        }
//track user input in an array userAnswers
  onUserInput = (input, question) => {
    console.log("received input:", input, question)
    let userAnswers = [...this.state.userAnswers]
    userAnswers[question] = input
    this.setState({userAnswers})
  }

 
  render() {
  return (
    //display data from api in a card with question and score area 
   <View style={styles.container}>
     <Text>See Your Score at the end </Text>
    
      <Card>
          <Text style={styles.que}>Why is the sky Blue?</Text>
           <TextInput style={styles.bor} type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 0)}></TextInput>
           <Text style={styles.op}>Options: oxygen, Who knows, it's not blue</Text>
       </Card>

       <Card>
           <Text style={styles.que}>Why is the grass Green?</Text>
           <TextInput style={styles.bor} type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 1)}></TextInput>
           <Text style={styles.op}> Options: wizards are real, magic, it's not</Text>
      </Card>

      <Card>
           <Text style={styles.que}>How is space black?</Text>
           <TextInput style={styles.bor} type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 2)}></TextInput>
           <Text style={styles.op}>Options: science, the void, aliens</Text>
      </Card>

      <Card>
           <Text style={styles.que}>Is pizza good?</Text>
           <TextInput style={styles.bor} type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 3)}></TextInput>
           <Text style={styles.op}>Options: yes, no, never tried it</Text>
      </Card>

      <Card>
           <Text style={styles.que}>Is the sun hot?</Text>
           <TextInput style={styles.bor} type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 4)}></TextInput>
           <Text style={styles.op}>Options: yes, maybe, its cold</Text><br/>

           <Button  title="submit" value="submit" onPress={this.findCor}></Button>
           <Text id="score"><br/>Your Score is..{this.state.show}</Text>
      </Card> 

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
  que: {
    color:'blue',
    fontSize:'20px',
  },
  op :{
    color:'gray',
    fontSize:'10px'
  },
  bor:{
    backgroundColor:'lightgray',
  }

});
