import React, { Component } from 'react';
// TODO: import lodash to make working with lists easier
// import _ from 'lodash';
import logo from './logo.svg';
import './app.css';

// TODO: import some data of people's profiles
// import profileData from './data';

// TODO: import the Profile component
// import Profile from './profile';

class App extends Component {
  render() {

    // TODO: make a list of profiles to be displayed, with JSX
    // const profiles = _.map(profileData, profile => {
    //   return <Profile name={profile.name}
    //                   hobbies={profile.hobbies} />
    // });

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        TODO: Display the list of profiles here
      </div>
    );
  }
}

export default App;
