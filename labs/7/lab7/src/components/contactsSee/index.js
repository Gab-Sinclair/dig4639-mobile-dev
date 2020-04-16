import React from 'react';
import './index.css'

class ContactsSee extends React.Component {

  // this.props
  render() {
    return (
      <div className="body3"> <h2 className="txt3">Contact List</h2>
       {
         this.props.contacts.map((value, index) => {
           return <p className="txt3" key={index}>{value.name} , {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default ContactsSee;
