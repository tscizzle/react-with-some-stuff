import React, { Component } from 'react';

import './board.css'

class Board extends Component {
  render() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  };
}

class BoardSwitcher extends Component {

  constructor(props) {
    super(props)
    this.state = {selectedIdx: 0}
  }
  
  onToggleBoard() {
    var s = 0;

    if (this.state.selectedIdx+1 < parseInt(this.props.numBoards, 10)) {
       s = this.state.selectedIdx+1;
     }
     
     this.setState({selectedIdx: s})
  }
  
  render() {
    var boards = [];
    for (var ii = 0; ii < parseInt(this.props.numBoards, 10); ii++) {
      var isSelected = ii === this.state.selectedIdx;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    
    return (
      <div>
        <h1>Boards</h1>
        <div>Active board: {this.state.selectedIdx}</div>  
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleBoard.bind(this)}>Toggle</button>
      </div>
    );
  };
}

export default BoardSwitcher;
