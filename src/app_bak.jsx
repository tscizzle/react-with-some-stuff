import React, { Component } from 'react';
import _ from 'lodash'

import logo from './logo.svg';
import './app.css';

import profileData from './data'

import Profile from './profile'

import BoardSwitcher from './board'


class App extends Component {

  render() {

    let profileList = _.map(profileData, (profileObj) => {
        return (
          <Profile name={profileObj.name} 
                   age={profileObj.age}
                   hobbies={profileObj.hobbies}/>
          )
    })

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

        <BoardSwitcher numBoards="4"/>

         <Profile name="Katie"
                   age="12"
                   hobbies={["piano", "tennis"]}/>

         <Profile name="Clarissa"
           age="19"
           hobbies={["Gambling", "Stand-up"]}/>

        {profileList}


      </div>

    );
  }

}

export default App;
