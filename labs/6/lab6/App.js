import React from 'react';
import Question from "./api/Question.json"
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

    //pass data from question map into card content
    function QuestionCard(props) {
      return (
        <>
          <Text style={styles.que}>{props.question}</Text>
          {props.options.map((option, i) =>
            <Button key={i} title={option.text} onPress={() => props.press(option.correct)} />
          )}
        </> 
      )
    }

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  //console log correct boolean
  evalQuestion(isCorrect, index) {
    console.log(isCorrect)
  }

  //Add score tracker 


  render(){
  return (
    <View style={styles.container}>
   {Question.map((question, index)=>
        <Card key={index}>
          <QuestionCard 
          question={question.Question} 
          options={question.options} 
          press={(isCorrect) =>
           this.evalQuestion(isCorrect, index)} />
           </Card>)}
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
