import React from 'react';

class ContactsRemove extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {

    fetch("http://plato.mrl.ai:8080/contacts/remove", {headers: {API: "sinclair"}})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      this.setState({contacts: data.contacts});
      console.log(this.contacts)
    });

  }

  render() {
    return (
      <div> <p>remove contact</p>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}</p>;
         })
       }
      </div>
    );
  }
}

export default ContactsRemove;