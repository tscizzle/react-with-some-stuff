import React, { Component } from 'react';

import logo from './logo.svg';
import './app.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      unusedStateVariable: 'bleeeeb',
    };
  }


  alertSomething = () => {
    alert('Clicked the basic handler, eh?');
  }


  addOne = () => {
    const newCounterValue = this.state.counter + 1;

    this.setState({
      counter: newCounterValue,
    });
  }


  render() {
    return (
      <div className="app">

        <div className="app-header">
          <img src={logo}
               className="app-logo"
               alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <button onClick={this.alertSomething}>
            Super Basic Click Handler
          </button>
        </div>

        <div>
          <button onClick={this.addOne}>
            Add 1 To The Number
          </button>

          <span> {this.state.counter} </span>
        </div>

      </div>
    );
  }
}

export default App;
