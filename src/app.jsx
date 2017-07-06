import React, { Component } from 'react';
import _ from 'lodash'

import logo from './logo.svg';
import './app.css';

import profileData from './data'

import Profile from './profile'

class App extends Component {

  render() {
    let profileList = _.map(profileData, (profileObj) =>{
      return (
        <Profile 
        name={profileObj.name}
        age={profileObj.age}
        hobbies={profileObj.hobbies}
        />
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

          {profileList}

      </div>

    );
  }

}

export default App;

export class Google extends Component {

  render() {

    return (
      /*TODO: Display the data raw */
      /*TODO: Display the data as a list of profiles */

      <div className="app">

        

        <div className="superdiv">
          <Logo/>
          <User/>
          <Search/>
        </div>
      </div>

    );
  }

}

class Logo extends Component {

  render() {
    return(
      <div className="google-logo">
       <span style={{color: "blue"}}>G</span>
       <span style={{color: "red"}}>o</span>
       <span style={{color: "yellow"}}>o</span>
       <span style={{color: "blue"}}>g</span>
      <span style={{color: "green"}}>l</span>
       <span style={{color: "red"}}>e</span>




      </div>
    )
  }

}

class User extends Component {

  render() {
  

      return(

        <div className="user-info">
          <UserPicture/>
          <UserEmail/>
        </div>

        )
  }

}
class UserPicture extends Component {

  render() {
    return(
      <div className="user-picture"> Picture </div>
    )
  }

}
class UserEmail extends Component {

  render() {
    return(
      <div className="user-mail"> Gmail </div>
    )
  }

}

class Search extends Component {

  render() {
    return(
      <div className="search-info"> 
          <SearchBar/>
          <SearchButtons/>
       </div>
    )
  }

}
class SearchBar extends Component {

  render() {
    return(
      <input className= "bar"/>
    )
  }

}
class SearchButtons extends Component {

  render() {
    return(
      <div className="search-buttons"> 
          <SearchButton message="Google Search"/>
          <SearchButton message="I'm Feeling Lucky"/>

       </div>
    )
  }

}

class SearchButton extends Component {

  render() {
    return(
      <button className="search-standard"> {this.props.message} </button>
    )
  }

}

