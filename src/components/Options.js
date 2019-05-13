import React, { Component } from "react";

class Options extends Component {
  state = {};

  highlightSort = value => {
    if (this.props.options.sort === value) {
      return "buttonSort highlighted";
    } else {
      return "buttonSort notHighlighted";
    }
  };

  highlightLevel = value => {
    if (this.props.options.highestLevel === value) {
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
            className={this.highlightSort("cp")}
            onClick={() => this.props.changeSort("cp")}
          >
            CP
          </button>
          <button
            className={this.highlightSort("iv")}
            onClick={() => this.props.changeSort("iv")}
          >
            IV
          </button>
          <button
            className={this.highlightSort("atk")}
            onClick={() => this.props.changeSort("atk")}
          >
            ATK
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
          <button
            className={this.highlightToggle(this.props.options.toggle.color)}
            onClick={this.props.toggleColor}
          >
            Colored Rows
          </button>
        </div>
        <div className="Box">
          <div className="OptionsHeader">CP Filter</div>
          <button
            className={this.highlightToggle(this.props.options.cpfilter)}
            onClick={this.props.toggleCPFilter}
          >
            Show Only CP:
          </button>
          <br />
          <input
            value={this.props.filterCP}
            onChange={this.props.onFilterChanged}
            type="number"
          />
        </div>
        <div className="Box">
          <div className="OptionsHeader">Highest Level:</div>
          <button
            className={this.highlightLevel(40)}
            onClick={() => this.props.changeHighestLevel(40)}
          >
            Level 40
          </button>
          <button
            className={this.highlightLevel(35)}
            onClick={() => this.props.changeHighestLevel(35)}
          >
            Level 35
          </button>
          <button
            className={this.highlightLevel(30)}
            onClick={() => this.props.changeHighestLevel(30)}
          >
            Level 30
          </button>
        </div>
      </div>
    );
  }
}

export default Options;
