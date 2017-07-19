import React, { Component } from 'react';

import './google.css';


export default class Google extends Component {

  render() {

    return (
      <div>
        <div className="google-app">
          <User />
          <Logo />
          <SearchContainer />
        </div>
        <Boring/>
        </div>

    );
  }
}

class Logo extends Component {

  render() {
    return <div className="google-logo" ></div>
  }
}

class User extends Component {

  render() {
    return (

      <div className="google-user">
        <a href="#" className="google-link">Gmail</a>
        <a href="#" className="google-link">Images</a>
        <a href="#"><div className="google-icon google-apps"></div></a>
        <a href="#"><div className="google-icon google-notification"></div></a>
        <a href="#">
        <img alt="profile pic" className="google-profile" src="https://lh3.googleusercontent.com/-ZTG8yXZn6lM/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXyw5T-r34LZYW1KIxibYocmoPSm5g/s32-c-mo/photo.jpg" />
        </a>
      </div>

    );
  }
}

class SearchContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {searchTerm: '',
                  bcolor: 'white'}


    // if (!window.webkitSpeechRecognition) {
    //   console.log("No support for webkitSpeechRecognition")
    // } else {
    //   var speechRecog = new webkitSpeechRecognition();
    //   speechRecog.onresult = function(event) { console.log(event); };
    //   /*speechRecog.start();*/
    // }
  }



  handleChange = (e) => {
    console.log(e)
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleEnter = (e) => {
    if (parseInt(e.detail || e.which, 10) === 13) {
      window.open("https://www.google.com/search?q="+this.state.searchTerm)
    } 
  }

 



  render() {

     //var style = {background: '#cc181e'}
     var style = {background: this.state.searchTerm}

    return (

      <div style={style}>
      <div className="google-search-container"> 
        <SearchBox onChange={this.handleChange} onKeyPress={this.handleEnter}/>
        </div>
        <div className="google-search-btn-container">
        <Button searchType="regular" labelName="Girls Who Code Search" searchTerm={this.state.searchTerm}/>
        <Button searchType="image" labelName="Image Search" searchTerm={this.state.searchTerm}/>
        </div>
      </div>

    );
  }
}

class SearchBox extends Component {

  render() {
    return (
      <div className="google-searchbox-container">
        <input type="text" className="google-search" onChange={this.props.onChange} onKeyPress={this.props.onKeyPress}/>
        <div className="google-mic"></div>
      </div>
      )
  }
}

class Button extends Component {

  render() {
    var href="#"

    if (this.props.searchTerm.length > 0) {
        href = "https://www.google.com/search?q=girls+who+code+" + this.props.searchTerm;

        if (this.props.searchType === "image") href += "&tbm=isch"
    }


    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="google-button">{this.props.labelName}</a>
      )
  }
}

class ColorButton extends Component {

  handleOnClick = () => {
    console.log(document.getElementsByClassName("google-app"))
  }

  render() {
    return (
      <div rel="noopener noreferrer" className="google-button" onClick={this.handleOnClick}>{this.props.labelName}</div>
      )
  }
}

class Boring extends Component {
  render () {
    return (
      <div className="google-boring">
        <div className="left-links">
        <a href="#" className="google-link">Advertising</a>
        <a href="#" className="google-link">Business</a>
        <a href="#" className="google-link">About</a>
        </div>
        <div className="right-links">
        <a href="#" className="google-link">Privacy</a>
        <a href="#" className="google-link">Terms</a>
        <a href="#" className="google-link">Settings</a>
        </div>
      </div>
      )
  }
}






