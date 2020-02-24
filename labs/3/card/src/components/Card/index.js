import React from 'react';
import "./index.css"

class Card extends React.Component {
constructor (props) {
    super(props);
    this.props = props;
    this.element = document.createElement("div");
    this.element.innerHTML = "this is a card";
    this.element.className = "card";
}


render() {
   
  return this.element;
            
   }  
}

export default Card;