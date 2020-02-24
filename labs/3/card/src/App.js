import React from 'react';
import './App.css';
import Card from './components/Card';


class App extends React.Component{
  
  render(){
    let element = document.createElement("div");   
    element.id = "container";   
     document.body.appendChild(element);  
       var newCard = new Card({content:"Sample value provided"});  
        element.appendChild(newCard.render());

    return(
     <div id ="newCard">

      </div>
    );
  }
}

export default App;
