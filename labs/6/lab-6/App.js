import React from 'react';
import Question from "./api/Question.json"
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';


export default class App extends React.Component {
 constructor(props) {
    super(props);
 
  //function to loop through questions 
  //Also to match the input answer to the Question's correct answer
    this.findCor = ()=>{
      //empty array for score
      let correcto = []
      //get value from input
      let tht = document.querySelector('[name = "resul"]');
      //get array to show score
      let show = [];
      //area to show score
      let area = document.querySelector("#score")

      //loop through api to find which question and answer match the one in the form 
      //add correct answer number to score array
       Question.forEach((value) =>{

        if(value.correct == tht.value){
           correcto.push(value);
           show.push(correcto.length)
         }
         else{
          show.push('');
         }
       })
       //see what number is in the array
       console.log(show)
    return(
     area.innerHTML=JSON.stringify(show));
       }
  }
    

  render(){
  return (
    //display data from api in a card with question and score area 
   <View style={styles.container}>
     <Text>See Score at the end</Text>

      <Card>
          <h3>Why is the sky Blue?</h3>
           <input name="resul"></input>
           <Text>Options: oxygen, Who knows, it's not blue</Text>
       </Card>

       <Card>
           <h3>Why is the grass Green?</h3>
           <input name="resul"></input>
           <Text>Options: wizards are real, magic, it's not green</Text>
      </Card>

      <Card>
           <h3>How is space black?</h3>
           <input name="resul"></input>
           <Text>Options: science, the void, aliens</Text>
      </Card>

      <Card>
           <h3>Is pizza good?</h3>
           <input name="resul"></input>
           <Text>Options: yes, no, never tried it</Text>
      </Card>

      <Card>
           <h3>Is the sun hot?</h3>
           <input name="resul"></input>
           <button type="submit" onClick={this.findCor}>Submit</button><br/>
           <Text>Options: yes, maybe, its cold</Text>
           <Text id="score"><br/>Your Score is..</Text>
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
});
