import React, { Component } from 'react';
import _ from 'lodash';
// TODO: import our profile styles
// import './profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-name">
          <b> Name: </b> {this.props.name}
        </div>
        <div>
          <b> Hobbies: </b>
          <ul className="hobby-list">
            TODO: Display the list of hobbies here
          </ul>
        </div>
      </div>
    );
  }
}

// TODO: define a component to represent out list of hobbies with a profile
// class HobbyList extends Component {
//   render() {

//     let hobbyList = _.map(this.props.hobbies, hobby => {
//       return <li> - {hobby} </li>
//     });

//     return (
//       <ul className="hobby-list">
//         {hobbyList}
//       </ul>
//     );
//   }
// }

export default Profile;
