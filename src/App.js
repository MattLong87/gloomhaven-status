import React, { Component } from 'react';
import Tracker from './Tracker';
import 'reset-css';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tracker type="Health" />
        <Tracker type="XP" />
      </div>
    );
  }
}

export default App;