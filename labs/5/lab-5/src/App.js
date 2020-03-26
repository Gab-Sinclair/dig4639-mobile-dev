import React from 'react';
import Weather from "./components/Weather";
import { View } from 'react-native';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <View>
      <Weather/>
      </View>
  );
}
}

export default App;

