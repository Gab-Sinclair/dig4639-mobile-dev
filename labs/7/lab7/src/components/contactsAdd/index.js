import React from 'react';
const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "sinclair",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
}





// const addUser =(value, value2) =>
// {
//   let newHeaders = {...HEADERS,
//     "method" : "POST",
//     body: JSON.stringify({
//       name:"" ,
//       number:""
//     })}
  


//   fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
//   .then((res) => res.json())
//   .then((data) => {
//       console.log(data)
// }
// , [])
// }





class ContactsAdd extends React.Component {

  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.textInput2 = React.createRef();

    this.state = {
      value: '',
      value2: ''
    }
  }
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
          console.log(data)
    }
    , [])
  }

  handleSubmit = e => {
    e.preventDefault();
    this.newVal()
  }
  

  
  render() {

    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Full Name</label><br/>
         <input type="text" ref={this.textInput} id ="name" /><br/>

         <label htmlFor="name">Number</label><br/>
         <input type="text" ref={this.textInput2} id ="number" /><br/>

         <button type="submit">Submit</button>
         </form>
      </div>
    );
  }
}

export default ContactsAdd;