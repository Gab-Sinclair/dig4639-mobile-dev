import React from 'react';
import './App.css';
import ContactsSee from './components/contactsSee';
import ContactsAdd from './components/contactsAdd';
import Profile from './components/Profile';
import ContactsRemove from './components/contactsRemove';

class App extends React.Component{
  render(){
  return (
    <div>
    <ContactsSee/>
    <br/>
    <ContactsAdd/>
    <br/>
    <Profile />
    <br/>
    <ContactsRemove/>
    <br/>
    </div>
  );
  }
}

export default App;
