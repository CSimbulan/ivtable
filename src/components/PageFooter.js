import React, { Component } from "react";

class PageFooter extends Component {
  state = {};
  render() {
    return (
      <footer>
        <hr />
        Version {this.props.version}
      </footer>
    );
  }
}

export default PageFooter;
