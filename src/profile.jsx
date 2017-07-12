import React, { Component } from 'react';
import _ from 'lodash';

import './profile.css'


class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-name">
          <b> Name: </b> {this.props.name}
        </div>
        <div className="profile-age">
            <b>Age:</b> {this.props.age}
        </div>
        <div className="profile-hobby">
          <b> Hobbies: </b>
            <HobbyList hobbies={this.props.hobbies}/>
        </div>
      </div>
    )
  }
}


class HobbyList extends Component {
  render() {

    let hobbyList = _.map(this.props.hobbies, hobby => {
      return <li> {hobby} </li>
    });

    return (
      <ul className="hobby-list">
        {hobbyList}
      </ul>
    )
  }
}


export default Profile;
