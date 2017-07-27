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

constructor(props) {
    super(props);
  }

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
constructor(props) {
    super(props);

  this.state = {
  line1: "", 
  text: "", 
  };
}

submit = () => {
    this.setState({
      line1: "1",
    });
}

changeText = (evt) => {
    this.setState({
      text: evt.target.value
    });
}
  
render() {
  let variable=" ";
    if (this.state.line1=="1"){
          variable = this.state.text
    }else if (this.state.line1=="") {
          variable = ""
    }

    return(

      <div className="search-info"> 
          <SearchBar text={this.state.text} takeText={this.changeText}/>
          <SearchButtons submit={this.submit}/>
        <div> {variable} </div>

       </div>
    )
  }

}
class SearchBar extends Component {

  render() {
    return(
      <input value={this.props.text} onChange={this.props.takeText} className= "bar"/>
    )
  }

}
class SearchButtons extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      eitherIsClicked: false,
    }
  }

  handleClick = () => {
    this.setState({eitherIsClicked: true})
  }

  render() {
  
    return(
      <div className="search-buttons"> 
          <SearchButton message="Google Search" submit={this.props.submit}/>
          <SearchButton message="I'm Feeling Lucky"/>
       </div>
    )
  }

}

class SearchButton extends Component {

  render() {

    return(
      <div>
        <button className="search-standard" onClick={this.props.submit}>{this.props.message}</button>
      </div>

    )
  }

}

