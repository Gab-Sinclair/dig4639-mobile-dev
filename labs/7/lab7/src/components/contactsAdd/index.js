import React from 'react';
const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "sinclair",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
}

const addUser =(input, inputs) =>
{
  let newHeaders = {...HEADERS,
    "method" : "POST",
    body: JSON.stringify({
      name: `${input}`,
      number:`${inputs}`
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

  
  render() {

    return (
      <div>
        <h2>Add User</h2>
        <label htmlFor="name">Full Name</label><br/>
         <input type="text" id ="name"  onChangeText={(input)=> addUser(input)}/><br/>

         <label htmlFor="name">Number</label><br/>
         <input type="text" id ="number"  onChangeText={(inputs)=> addUser(inputs)}/><br/>

         <button type="submit">Submit</button>
      </div>
    );
  }
}

export default ContactsAdd;