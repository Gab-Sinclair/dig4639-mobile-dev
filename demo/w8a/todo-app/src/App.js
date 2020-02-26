import React from 'react';
import './App.css';
import todoList from "./todolist.json"

  //TodoItem to pass properties 
  function TodoItem(props){
    //show the property . content on the card passed in to TodoItem
      return <p className="card" onClick={() => props.removeTask(props.id)}>{props.content}</p>
  }


  class Todo extends React.Component{
    constructor(props){
      super(props)
      //track state changes in this component
      this.state ={
        //manage json file
        todoList, 
        hideCompletedItems:false,
      }
      this.currentId = 4;
    }

    //add task by click event
      addTask(e) {
        console.log(this.refs.taskContent)
        let todoList = this.state.todoList
        todoList.push(
         {"id": this.currentId, "content" :this.refs.taskContent.value, "priority": 2, "completed": true })
          this.currentId++
          this.setState({todoList:todoList})   
          this.refs.taskContent.value = ""     
    }
//remove task by id
    removeTask(id){
      let todoList = this.state.todoList
      todoList = todoList.filter((v) =>  v.id !== id)
      this.setState({todoList})
    }

    render(){
  return (

    <>
    <input type="text" ref = "taskContent" />
    <input type="button" value= "Add Task" onClick={(e) => this.addTask(e)} />
   <br/>
   <input ref = "hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems" 
   name="hideCompletedItems" value="hideCompletedItems" onChange= {(e) => this.setState({hideCompletedItems:e.target.checked})}/>
   <label htmlFor="hideCompletedItems"> I have a bike</label><br></br>
  
    
     {//show only not completed items in todolist
      ((this.state.hideCompletedItems) ? this.state.todoList
      .filter((v) => !v.completed) : this.state.todoList)
      .map((v) => 
        <TodoItem id ={v.id} removeTask ={(id) => this.removeTask(id)}
        key = {v.id}
        priority = {v.priority} 
        content ={v.content}
        completed= {v.completed}/>)} 
        </>) 
   }
  }

function App(props) {

return (
  <Todo />
  );

    }
export default App;
