import React from 'react';
import Question from "./api/Question.json"
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';


export default class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
       ques: []
      };
    }

    componentDidMount() {

    fetch("/api/Question.json")
      .then(res => res.json())
      .then((result) => {
        let ques = result.Questions;
       
        //set results to array
        this.setState({
          ques: ques
        });
        console.log({ques})
      })
      .catch((error) => {console.log(error)} );
  }

    //function to loop through questions 
    //Also to match the input answer to the Question's correct answer
  //   this.findCor = ()=>{
     //empty array for score
  //     let correcto = []
     //get value from input
  //     let tht = document.querySelectorAll('input[name="resul"]')
     //get array to show score
  //     let show = [];
     //area to show score
  //     let area = document.querySelector("#score")

  //     console.log(tht)
     //loop through api to find which question and answer match the one in the form 
     //add correct answer number to score array
  //      Question.forEach((value) =>{

  //       if(value.correct == tht.value){
  //          correcto.push(value);
  //          show.push(correcto.length)
  //        }
  //      })
      //see what number is in the array
  //      console.log(show)
  //   return(
  //    area.innerHTML=JSON.stringify(show));
  //      }
  // }
    

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
