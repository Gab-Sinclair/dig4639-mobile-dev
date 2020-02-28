import React from 'react';
import './App.css';
import CardList from './components/CardList';

function Card(props){
  return <p className="card" onClick={() => props.removeTask(props.id)}>{props.content}</p>
}


function App(props){
    return(
      <div>
        <CardList/>
        </div>
        
  
    );
  }


export default App;


