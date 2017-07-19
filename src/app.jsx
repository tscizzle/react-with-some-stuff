import React, { Component } from 'react';

import logo from './logo.svg';
import './app.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      unusedStateVariable: 'bleeeeb',
      randomNumber: 1,
      writing: "On",
      value: "",
      tempValue: "",
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

  changeNumber = () => {
    const newNumber =  Math.ceil(Math.random() * 20)

    this.setState({
      randomNumber: newNumber,
    });
  }

  onOff = () => {
    let newWord = ""
    if (this.state.writing === "On"){
      newWord = "Off"
      this.setState({color: "black"});
    }
    else{
      newWord = "On"
      this.setState({color: "white"})
    }

    this.setState({
      writing: newWord,
    });
  }

  submit = (evt) => {
    this.setState({tempValue: evt.target.value});
  }

  background = () => {
    this.setState({color: this.state.tempValue});
    this.setState({value: this.state.tempValue})
  }


  render() {
    var style = {backgroundColor: this.state.color};
    return (
      <div className="app" style={style}>
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

        <div>
          <button onClick = {this.changeNumber}>
            Click for a random number
          </button>

            <span> {this.state.randomNumber}</span>
        </div>

        <div>
          <button onClick={this.onOff}>
            Turn on / off
          </button>

            <span> {this.state.writing}</span>
        </div>

        <span>
          <input type="text" onChange={this.submit}></input>
          <button onClick={this.background}>Pick a color</button>
          <div> {this.state.value}</div>
        </span>
      </div>
    );
  }
}

export default App;
