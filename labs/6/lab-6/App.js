import React from 'react';
import Question from "./api/Question.json"
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

function QuestionCard(props) {
  return (
    <>
      <Text style={styles.que}>{props.question}</Text>
      {/*<TextInput type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 0)}></TextInput>*/}
      {props.options.map((option, i) =>
        <Button key={i} title={option.text} onPress={() => props.press(option.correct)} />
      )}
    </>
  )
}
// <Text>Options: oxygen, Who knows, it's not blue</Text>

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

     
     //loop through api to find which question and answer match the one in the form 

     let correct = []
     Question.forEach((value, index) =>{
        console.log(value.correct)
        console.log(this.state.userAnswers)

        //add correct answer number to score array
        if(value.correct == this.state.userAnswers[index]){
          correct.push(value.correct)
          console.log(correct)
         console.log(correct.length)
        }
        
      })
      // Update the state here
      this.setState({
            show:correct.length
      })
    }
   }

  onUserInput = (input, question) => {
    console.log("received input:", input, question)
    let userAnswers = [...this.state.userAnswers]
    userAnswers[question] = input
    this.setState({userAnswers})
  }

  evalQuestion(isCorrect, index) {
    console.log(isCorrect)
  }
  render() {
  return (
    //display data from api in a card with question and score area 
   <View style={styles.container}>
     <Text>See Score at the end </Text>
     {Question.map((question, index)=>
        <Card key={index}><QuestionCard question={question.Question} options={question.options} press={(isCorrect) => this.evalQuestion(isCorrect, index)} /></Card>)}

      <Card>
          <Text style={styles.que}>Why is the sky Blue?</Text>
           <TextInput type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 0)}></TextInput>
           <Text>Options: oxygen, Who knows, it's not blue</Text>
       </Card>

       <Card>
           <Text style={styles.que}>Why is the grass Green?</Text>
           <TextInput type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 1)}></TextInput>
           <Text>Options: wizards are real, magic, it's not</Text>
      </Card>

      <Card>
           <Text style={styles.que}>How is space black?</Text>
           <TextInput type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 2)}></TextInput>
           <Text>Options: science, the void, aliens</Text>
      </Card>

      <Card>
           <Text style={styles.que}>Is pizza good?</Text>
           <TextInput type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 3)}></TextInput>
           <Text>Options: yes, no, never tried it</Text>
      </Card>

      <Card>
           <Text style={styles.que}>Is the sun hot?</Text>
           <TextInput type="text" name="resul" onChangeText={(input)=> this.onUserInput(input, 4)}></TextInput>
           <Button  title="submit" value="submit" onPress={this.findCor}></Button><br/>
           <Text>Options: yes, maybe, its cold</Text>

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
  }
});
