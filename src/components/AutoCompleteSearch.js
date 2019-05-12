import React, { Component } from "react";

class AutoCompleteSearch extends Component {
  render() {
    return (
      <div>
        <input
          value={this.props.search.text}
          onChange={this.props.onTextChanged}
          type="text"
        />
        <span className="ClearSearch" onClick={this.props.clearSearch}>
          &times;
        </span>
      </div>
    );
  }
}

export default AutoCompleteSearch;
