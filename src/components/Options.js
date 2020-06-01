import React, { Component } from "react";

class Options extends Component {
  state = {};

  highlightSort = (value) => {
    if (this.props.options.sort === value) {
      return "buttonSort highlighted";
    } else {
      return "buttonSort notHighlighted";
    }
  };

  highlightLevel = (value) => {
    if (this.props.options.highestLevel === value) {
      return "buttonSort highlighted";
    } else {
      return "buttonSort notHighlighted";
    }
  };

  highlightToggle = (opt) => {
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
          <div className="OptionsHeader">Encounter Level</div>
          <br></br>
          <select
            className="levelSelect"
            onChange={this.props.onLevelChanged}
            defaultValue="20"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
          </select>
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
          <div className="OptionsHeader">Highest Level</div>
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
