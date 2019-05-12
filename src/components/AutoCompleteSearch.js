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
        <button className="ClearSearch" onClick={this.props.clearSearch}>
          &times;
        </button>
      </div>
    );
  }
}

export default AutoCompleteSearch;
