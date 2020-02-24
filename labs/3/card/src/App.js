import React from 'react';
import './App.css';
import Card from './components/Card';


class App extends React.Component{
  
  render(){
    let element = document.createElement("div");   
    element.id = "container";   
     document.body.appendChild(element);  
       var newCard = new Card();  
        element.appendChild(newCard.render());

    return(
    <div></div>
    );
  }
}

export default App;
