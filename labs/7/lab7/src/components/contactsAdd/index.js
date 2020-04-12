import React from 'react';
const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "sinclair",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
}

const addUser =() =>
{
  let newHeaders = {...HEADERS,
    "method" : "POST",
    body: JSON.stringify({
      name: "input",
      number: "number"
    })}
  


  fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
}
, [])
}

class ContactsAdd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contactsAdded: []};

  }


  //function to add contact to server 
  
  render() {

    return (
      <div>
        <h2>Add User</h2>
        <label for="name">Full Name</label><br/>
         <input type="text" id ="name"/><br/>

         <label for="name">Number</label><br/>
         <input type="text" id ="number"/><br/>

         <button type="submit" onClick={addUser}>Submit</button>
      </div>
    );
  }
}

export default ContactsAdd;