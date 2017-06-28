import React, { Component } from 'react';
import _ from 'lodash'

import logo from './logo.svg';
import './app.css';

import profileData from './data'


class App extends Component {

  render() {

    return (
      /*TODO: Display the data raw */
      /*TODO: Display the data as a list of profiles */

      <div className="app">

        <div className="app-header">

          <img src={logo}
               className="app-logo"
               alt="logo" />

          <h2>Welcome to React</h2>

        </div>

      </div>

    );
  }

}

export default App;
