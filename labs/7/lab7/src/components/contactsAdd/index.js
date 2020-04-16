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

class ContactsAdd extends React.Component {

  constructor(props) {
    super(props);

    //set input reference 
    this.textInput = React.createRef();
    this.textInput2 = React.createRef();

    //track value of input state 
    this.state = {
      value: '',
      value2: ''
    }
  }


        //send header body 
      newVal= () => {
        let newHeaders = {...HEADERS,
          "method" : "POST",
          body: JSON.stringify({
            name: this.textInput.current.value,
            number:this.textInput2.current.value
          })}
          fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
          .then((res) => res.json())
          .then((data) => {
              this.props.newContact(data.added)
              console.log(data)
        }
        , [])
      }

//on submit event prevent default and run function 
  handleSubmit = e => {
    e.preventDefault();
    this.newVal()
  }
  

  
  render() {

    return (
      <div className="body1">
        <h2 className="txt1">Add User</h2>
        <form onSubmit={this.handleSubmit}>
  
            <label htmlFor="name" className="txt1">Full Name</label><br/>
            <input type="text" className="take1" ref={this.textInput} id ="name" /><br/>

            <label htmlFor="name" className="txt1">Number</label><br/>
            <input type="text" className="take1" ref={this.textInput2} id ="number" /><br/>

            <button type="submit" className='but'>Submit</button>
         </form>
      </div>
    );
  }
}

export default ContactsAdd;