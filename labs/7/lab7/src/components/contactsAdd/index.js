import React from 'react';

class ContactsSee extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contactsAdd: []};

  }

  componentDidMount() {

    fetch("http://plato.mrl.ai:8080/contacts/add", {headers: {API: "sinclair"}})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      this.setState({contactsAdd: data.contacts});
      console.log(this.contactsAdd)
    });
  }


  //function to add contact to server 
  
  render() {
    return (
      <div>
       {
         this.state.contactsAdd.map((value, index) => {
           return <p key={index}>{value.name}</p>;
         })
       }
      </div>
    );
  }
}

export default ContactsSee;