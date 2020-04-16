import React from 'react';
import './index.css'

const HEADERS ={
  "Method" : "GET",
  "headers" : {
    "API" : "sinclair",
    "Content-Type" : "application/json",
    "Accept": "application/json"
  }
}

class ContactsRemove extends React.Component {

  constructor(props) {
    super(props);

    //set input reference 
    this.textInput = React.createRef();
    //track value of input state 
      this.state = {
      value: '',
    }
  }

  //send header body 
  delVal= () => {
    let newHeaders = {...HEADERS,
      "method" : "POST",
      body: JSON.stringify({
        position:this.textInput.current.value,
      })}

      fetch("http://plato.mrl.ai:8080/contacts/remove", newHeaders)
      .then((res) => res.json())
      .then((data) => {
       // this.props.takeContact(data.removed)
       this.props.takeContact(this.textInput.current.value)
          console.log(data)
    }
    , [])
  }

//on submit event prevent default and run function 
  handleSubmit = e => {
    e.preventDefault();
    this.delVal()
  }

  render() {
    return (
      <div className="body2"> <h2 className="txt2" >Remove contact</h2>

        <form onSubmit={this.handleSubmit}>
 
          <label htmlFor="name" className="txt2">Position</label><br/>
          <input type="text" className="take2" ref={this.textInput} id ="position" /><br/>

          <button type="submit" className="but2">Submit</button>
       </form>
    </div>
    );
  }
}

export default ContactsRemove;