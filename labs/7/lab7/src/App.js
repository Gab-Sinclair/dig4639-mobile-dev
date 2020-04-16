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
    this.state = {contacts: [],
                   profile: []
            };

  }

  //fetch contact list
  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "sinclair"}})
    .then((res) => res.json())
    .then((data, ) => {
        console.log(data)
      this.setState({contacts: data.contacts});
    });
   
  }

  //fetch profile list
  componentDidUpdate(){
  fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "sinclair"}})
  .then((res) => res.json())
  .then((datas) => {
    this.setState({profile:[datas]});
  });
  }


  //update added contacts on client
  addContact  (contact) {
    let addC = [...this.state.contacts]
    addC.push(contact)
    this.setState({contacts: addC});
  }

  //update removed contacts on client
  removeContact  (position) {
    let removeC = [...this.state.contacts]
    removeC.splice(position, 1)
   this.setState({contacts: removeC});
  }

  

  render(){
  return (
    <div className="parent">
      <h1>App diagram</h1>
    <ContactsSee contacts = {this.state.contacts}/>
    <br/>
    <ContactsAdd newContact ={(contact) => this.addContact(contact) }/>
    <br/>
    <Profile profile ={this.state.profile} />
    <br/>
    <ContactsRemove takeContact = {(position) => this.removeContact(position)}/>
    <br/>
    </div>
  );
  }
}

export default App;
