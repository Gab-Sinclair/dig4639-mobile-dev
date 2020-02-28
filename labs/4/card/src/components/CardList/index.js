import React from 'react';
import Data from "./data.json";

function Card(props){
    return <p className="card" onClick={() => props.removeTask(props.id)}>{props.content}</p>
  }

 class CardList extends React.Component{
     constructor(props){
         super(props)
         this.state ={
            //manage json file
            Data
         }
     }
 //add task by click event
 addItem(e) {
    let Data = this.state.Data
    Data.push(
     {"id": this.currentId, "content" :this.refs.cardContent.value, "title": this.refs.CardTitle.value })
      this.currentId++
      this.setState({Data:Data})   
      this.refs.cardContent.value = ""     
}
 

// Remove Card funcion with x button and class close Pass a click listener function so that each card can remove themselves.
//remove task by id
removeItem(id){
    let Data = this.state.Data
    Data = Data.filter((v) =>  v.id !== id)
    this.setState({Data})
  }

  
  render(){
    return (
  
      <>
      <input type="text" ref = "cardContent" />
      <input type="text" ref = "cardTitle" />
      <input type="button" value= "Add Task" onClick={(e) => this.addItem(e)} />
     <br/>

  { this.state.Data.map((v) => 
      <Card id ={v.id} removeTask ={(id) => this.removeItem(id)}
        key = {v.id}
        title = {v.title} 
        content ={v.content}/>)}
        </>)

   }

}
//Use attributes to pass data to each Card. JSON file (As per React's warnings, each created Card should have an attribute named key with its index.)



export default CardList;
