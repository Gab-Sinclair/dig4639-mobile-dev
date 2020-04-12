import React from 'react';
import './App.css';
import ContactsSee from './components/contactsSee';
import ContactsAdd from './components/contactsAdd';

class App extends React.Component{
  render(){
  return (
    <div>
    <ContactsSee/>
    <ContactsAdd/>
    </div>
  );
  }
}

export default App;
