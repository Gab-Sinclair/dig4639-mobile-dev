import React from 'react';
import './App.css';
import Card from './components/Card';


function App(){
      
  const cardArray = [
    <Card content ="this is a card"/>
  ]
    return(
      <div>
        {cardArray}
      </div>
    );
  }


export default App;
