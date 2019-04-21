import React, { Component } from "react";
import "../AutoCompleteSearch.css";

class Options extends Component {
  state = {};

  highlightSort = value => {
    if (this.props.options.sort === value) {
      return "buttonSort highlighted";
    } else {
      return "buttonSort notHighlighted";
    }
  };

  highlightToggle = opt => {
    if (opt) {
      return "buttonSort highlighted";
    } else {
      return "buttonSort notHighlighted";
    }
  };

  render() {
    return (
      <div className="Options">
        <div className="Box">
          <div className="OptionsHeader">Sort By</div>
          <button
            className={this.highlightSort("cp20")}
            onClick={() => this.props.changeSort("cp20")}
          >
            CP @ 20
          </button>
          <br />
          <button
            className={this.highlightSort("cp25")}
            onClick={() => this.props.changeSort("cp25")}
          >
            CP @ 25
          </button>
          <br />
          <button
            className={this.highlightSort("iv")}
            onClick={() => this.props.changeSort("iv")}
          >
            IV
          </button>
        </div>
        <div className="Box">
          <div className="OptionsHeader">Toggle</div>
          <button
            className={this.highlightToggle(this.props.options.toggle.nundo)}
            onClick={this.props.toggleNundo}
          >
            Nundo (66.7%)
          </button>
          <button
            className={this.highlightToggle(this.props.options.toggle.lvl15)}
            onClick={this.props.toggleLvl15}
          >
            Level 15
          </button>
          <button
            className={this.highlightToggle(this.props.options.toggle.under90)}
            onClick={this.props.toggleUnder90}
          >
            Under 90%
          </button>
        </div>
      </div>
    );
  }
}

export default Options;
