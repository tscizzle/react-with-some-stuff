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
    return <div className="google-logo"></div>
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
    this.state = {history:[], searchTerm: ''}


    // if (!window.webkitSpeechRecognition) {
    //   console.log("support for webkitSpeechRecognition")
    // } else {
    //   var speechRecog = new window.webkitSpeechRecognition();
    //   speechRecog.onresult = function(event) { 
    //     console.log(event); 
    //   };
    //   /*speechRecog.start();*/
    // }
  }

  onKeyUp = (e) => {

    if (parseInt(e.detail || e.which, 10) === 13) {
      // open Google search
      window.open("https://www.google.com/search?q="+this.state.searchTerm)

      // add to history and clear the search box
      if (e.target.value.length > 0) {  // only save non-empty search strings
        
        var h_array = this.state.history
        h_array.push(this.state.searchTerm)

        document.getElementsByTagName("input")[0].value = '' // TODO: this is hacky

        this.setState({
          history: h_array,  
          searchTerm: ''
        }); 
      }
    } else {
      this.setState({searchTerm: e.target.value});
    }
  }


  render() {

    var style = {background: this.state.searchTerm}

    return (

      <div style={style}>
        <div className="google-search-container"> 
          <SearchBox onKeyUp={this.onKeyUp} history={this.state.history} value={this.state.searchTerm}/>
        </div>
        <div className="google-search-btn-container">
        <Button searchType="regular" labelName="Girls Who Code Search" searchTerm={this.state.searchTerm}/>
        <Button searchType="image" labelName="Image Search" searchTerm={this.state.searchTerm}/>
        </div>
      </div>

    );
  }
}



class SuggestionItem extends Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}

class SuggestionMenu extends Component {

  render() {

    let sl = this.props.history.map((item) => <SuggestionItem key={item} item={item} />)

    return (
      <div>
        <ul className="suggestion-list">{sl}</ul>
      </div>
    )
  }
}

class SearchBox extends Component {

  render() {

    return (
      <div>
        <div>
   
          <input autoFocus type="text" className="google-search" onKeyUp={this.props.onKeyUp}/>
          <div className="google-mic"></div>

        </div>
        <SuggestionMenu history={this.props.history}/>
        </div>
      )
  }
}

class Button extends Component {

  render() {
    var href="#"

    if (this.props.searchTerm.length > 0) {
        href = "https://www.google.com/search?q=" + this.props.searchTerm;

        if (this.props.searchType === "image") {
          href += "&tbm=isch"
        } 
        else {
          href += "+girls+who+code"
        }
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="google-button">{this.props.labelName}</a>
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


