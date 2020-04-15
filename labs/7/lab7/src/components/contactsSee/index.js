import React from 'react';

class ContactsSee extends React.Component {

  // this.props
  render() {
    return (
      <div> <h2>Contact List</h2>
       {
         this.props.contacts.map((value, index) => {
           return <p key={index}>{value.name} , {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default ContactsSee;
