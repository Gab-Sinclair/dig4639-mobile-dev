import React from 'react';
import "./index.css"

class Card extends React.Component {
constructor(props) {
    super(props);
    this.props = props;
    this.innerHTML = this.props.content;
 
}


render() { 

  return (
     this.props.content
    );
  }  
}

export default Card;