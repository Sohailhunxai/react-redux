import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>App Component</h1> */}
        <User data={{ name: 'Sohail Abbas', age: 25 }} />
      </div>
    );
  }
}

export default App;
