import React from 'react';

class ContactsSee extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {

    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "sinclair"}})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      this.setState({contacts: data.contacts});
      console.log(this.contacts)
    });

  }

  render() {
    return (
      <div> <p>Contact List</p>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name} , {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default ContactsSee;
