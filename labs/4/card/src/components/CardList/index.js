import React from 'react';
import data from "./data.json";


//TodoItem to pass properties 
function Card(props){
  //show the property . content on the card passed in to TodoItem
    return <p className="card" onClick={() => props.removeTask(props.id)}>{props.title}<br></br>{props.content} </p>
}


class CardList extends React.Component{
  constructor(props){
    super(props)
    //track state changes in this component
    this.state ={
      //manage json file
      data, 
      hideTasks:false,
    }
    this.currentId = 4;
  }

  //add task by click event
    addTask(e) {
      console.log(this.refs.taskContent)
      let data = this.state.data
      data.push(
       {"id": this.currentId, "content" :this.refs.taskContent.value, "title": this.refs.title.value, "completed" :true})
        this.currentId++
        this.setState({data:data})   
        this.refs.taskContent.value = ""     
        this.refs.title.value =""
  }
//remove task by id
  removeTask(id){
    let data = this.state.data
    data = data.filter((v) =>  v.id !== id)
    this.setState({data})
  }

  render(){
return (

  <>
  <input type="text" ref = "taskContent" />
  <input type="text" ref = "title" />
  <input type="button" value= "Add Task" onClick={(e) => this.addTask(e)} />
 <br/>
 <input ref = "hideTasks" type="checkbox" id="hidTasks" 
 name="hideTasks" value="hideTasks" onChange= {(e) => this.setState({hideTasks:e.target.checked})}/>
 <label htmlFor="hideTasks"> Clear tasks</label><br></br>

  
   {//show only not completed items in todolist
    ((this.state.hideTasks) ? this.state.data
    .filter((v) => !v.content) : this.state.data)
    .map((v) => 
      <Card id ={v.id} removeTask ={(id) => this.removeTask(id)}
      key = {v.id}
      title= {v.title}
      completed ={v.completed}
      content ={v.content}/>)} 
      </>) 
 }
}
export default CardList