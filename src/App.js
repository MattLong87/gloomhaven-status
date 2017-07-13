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
  constructor(props) {
    super(props);
    this.state = {
      btActive: false,
      showModal: false
    }
  }

  toggleBT(e) {
    e.preventDefault();
    this.setState({
      btActive: !this.state.btActive,
      showModal: this.state.showModal
    });
  }

  toggleModal(e){
    e.preventDefault();
    this.setState({
      btActive: this.state.btActive,
      showModal: !this.state.showModal
    })
  }

  render() {
    const BTTrackers = (
      <div>
        <Tracker type="BearHealth" />
        <Tracker type="BTHealth" />
        <Tracker type="BTXP" />
      </div>
    );

    const normalTrackers = (
      <div>
        <Tracker type="Health" />
        <Tracker type="XP" />
      </div>
    )

    let trackers = this.state.btActive ? BTTrackers : normalTrackers;

    let modal;
    if (this.state.showModal) {
      modal = (
        <div className="modal">
          <button onClick={(e) => this.toggleBT(e)} className="bt-button">Enable Features for Two-Mini Class</button>
        </div>
      )
    }

    return (
      <div className="App">
        {modal}
        <button onClick={(e) => this.toggleModal(e)} className="info-button">i</button>
        {trackers}
      </div>
    );
  }
}

export default App;