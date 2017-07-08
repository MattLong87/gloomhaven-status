import React, { Component } from 'react';
import Tracker from './Tracker';
import 'reset-css';
import './css/styles.css';

let orientation;

var mediaQueryList = window.matchMedia("(orientation: portrait)");
mediaQueryList.addListener(() => {
  if (window.matchMedia("(orientation: portrait)").matches) {
    orientation = "portrait";
  }

  if (window.matchMedia("(orientation: landscape)").matches) {
    orientation = "landscape";
  }
})

document.ontouchmove = function (e) {
  if (orientation === "landscape") {
    e.preventDefault();
  }
}

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