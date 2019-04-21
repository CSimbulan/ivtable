import React, { Component } from "react";

class TxtReader extends Component {
  componentDidMount() {
    fetch("./" + this.props.dataset.filename)
      .then(r => r.text())
      .then(text => {
        var lines = text.split("\n");
        window.addEventListener(
          "load",
          this.props.onLoad(this.props.dataset, lines)
        );
      });
  }

  /*
  readTxtFile(filename) {
    fetch("../text/" + filename)
      .then(r => r.text())
      .then(text => {
        var lines = text.split("\n");
        return lines;
      });
  }*/

  render() {
    return <div />;
  }
}

export default TxtReader;
