import React, { Component } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import Confirmation from './components/Confirmation';

class App extends Component {
  render() {
    return (
        <div>
          <SignUpForm />
          <Confirmation />
        </div>
    )
  }
}

export default App;
