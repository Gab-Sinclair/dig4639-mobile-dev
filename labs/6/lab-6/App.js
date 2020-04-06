import React from 'react';
import Question from "./api/Question.json"
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';


export default class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
       correcto: [],
       show: []
      };

    

    //function to loop through api 
    this.findCor = ()=>{

     //get value from input
     let tht = document.querySelectorAll('input[name="resul"]').value
     //area to show score
       let area = document.querySelector("#score")

       console.log(tht)
     //loop through api to find which question and answer match the one in the form 
        Question.forEach((value) =>{

      //add correct answer number to score array
         if(value.correct == tht.value){
           this.setState = {
             correcto: [value],
             show:[correcto.length]
           }
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
     <Text>See Score at the end {console.log(this.ques)}</Text>

      <Card>
          <Text style={styles.que}>Why is the sky Blue?</Text>
           <input type="text" name="resul"></input>
           <Text>Options: oxygen, Who knows, it's not blue</Text>
       </Card>

       <Card>
           <Text style={styles.que}>Why is the grass Green?</Text>
           <input type="text" name="resul"></input>
           <Text>Options: wizards are real, magic, it's not</Text>
      </Card>

      <Card>
           <Text style={styles.que}>How is space black?</Text>
           <input type="text" name="resul"></input>
           <Text>Options: science, the void, aliens</Text>
      </Card>

      <Card>
           <Text style={styles.que}>Is pizza good?</Text>
           <input type="text" name="resul"></input>
           <Text>Options: yes, no, never tried it</Text>
      </Card>

      <Card>
           <Text style={styles.que}>Is the sun hot?</Text>
           <input type="text" name="resul"></input>
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
  que: {
    color:'blue',
    fontSize:'20px',
  }
});
