import React, { Component } from 'react';

import logo from './logo.svg';
import './app.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      unusedStateVariable: 'bleeeeb',
      switch: true,
      x: 1,
      value: 'Example text',
      tempvalue: 'white',
      usercolor: 'white'
    };
  }

  alertSomething = () => {
    alert('Clicked the basic handler, eh?');
  }


  disco = () => {
   while(this.state.x<5){
     if(this.state.x===1){
        document.body.style.backgroundColor='blue'
        this.x.setState(2)
      }
     else if(this.state.x===2){
        document.body.style.backgroundColor='red'
        this.x.setState(3)
      }
     else if(this.state.x===3){
        document.body.style.backgroundColor='green'
        this.x.setState(4)
      }
     else{
        document.body.style.backgroundColor='yellow'
        this.x.setState(0)
      }
   }
  }

  submit = (evt) => {
    console.log(evt)
    this.setState({
      tempvalue: evt.target.value
    })
  }

  changeColor =(val) => {
    console.log('changing')
    this.setState({
      value: this.state.tempvalue
    })
    document.body.style.backgroundColor=this.state.tempvalue
  }

  alertSpecial = () => {
    alert('hiyah');
  }

  alertSwitch = () => {
      if(this.state.switch===true){
        document.body.style.backgroundColor='white'
        alert('On')
      }
      else{
        document.body.style.backgroundColor='black'
        alert('Off')
      };
      this.setState({
        switch: !this.state.switch
      });
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

        <div className="special">
          <button onClick={this.alertSpecial}>
            ~special button~
          </button>
        </div>

        <div>
          <button onClick={this.alertSwitch}>
            Light Switch
          </button>

        </div>

        <div>
          <button onClick={this.disco}>
            Disco
          </button>
        </div>

        <div>
          <button onClick={this.addOne}>
            Add 1 To The Number
          </button>

          <span> {this.state.counter} </span>
        </div>
        <div>
          <input type="text" value= {this.state.tempvalue} onChange={this.submit}/>
          <button onClick={this.changeColor}> Change Color </button>
        </div>
          <div> {this.state.value} </div>
      </div>
    );
  }
}

export default App;
