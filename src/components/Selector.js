import React, { Component } from "react";

class Selector extends Component {
  test() {
    fetch("bastestats.txt")
      .then(r => r.text())
      .then(text => {
        console.log(text);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.pokemon}</h1>
        <button onClick={() => this.test()}>TEST</button>
      </div>
    );
  }
}

export default Selector;
