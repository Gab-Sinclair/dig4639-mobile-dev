import React from 'react';
import './App.css';
import ContactsSee from './components/contactsSee';
import ContactsAdd from './components/contactsAdd';
import Profile from './components/Profile';
import ContactsRemove from './components/contactsRemove';

class App extends React.Component{
  
  // Maintaining list of contacts here.
  constructor(props) {
    super(props);
    this.state = {contacts: []};
  }

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "sinclair"}})
    .then((res) => res.json())
    .then((data, ) => {
        console.log(data)
      this.setState({contacts: data.contacts});
    });
  }
  addContact  (contact) {
    let addC = [...this.state.contacts]
    addC.push(contact)
    this.setState({contacts: addC});
  }
  
  removeContact  (position) {
    let removeC = [...this.state.contacts]
    removeC.splice(position)
    this.setState({contacts: removeC});
  }


  render(){
  return (
    <div className="parent">
    <ContactsSee contacts = {this.state.contacts}/>
    <br/>
    <ContactsAdd newContact ={(contact) => this.addContact(contact) }/>
    <br/>
    <Profile profile ={this.state.}/>
    <br/>
    <ContactsRemove takeContact = {(position) => this.removeContact(position)}/>
    <br/>
    </div>
  );
  }
}

export default App;
