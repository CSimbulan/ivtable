import React, { Component } from "react";
import "./App.css";
import Options from "./components/Options";
import TableGenerator from "./components/TableGenerator";
import AutoCompleteSearch from "./components/AutoCompleteSearch";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import "./AutoCompleteSearch.css";
import pokemondata from "./components/pokemondata";

class App extends Component {
  state = {
    data: [
      {
        id: "names",
        value: pokemondata.map(
          x => x.split(",")[0]
        ) /*Get first column from the data.*/
      },
      { id: "cpm", value: [] },
      { id: "stats", value: pokemondata }
    ],
    search: {
      selected: "",
      selected_number: "",
      suggestions: [],
      text: "",
      selectedStats: [],
      statsArray: []
    },
    options: {
      id: "options",
      sort: "cp",
      toggle: { nundo: true, lvl15: false, under90: false, color: true }
    }
  };

  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.data[0].value.sort().filter(v => regex.test(v));
    }
    const state = { ...this.state };
    state.search.text = value;
    state.search.suggestions = suggestions;
    this.setState(() => ({ state }));
  };

  suggestionSelected = value => {
    const state = { ...this.state };
    state.search.text = value;
    state.search.suggestions = [];
    state.search.selected = value;
    const data = this.state.data[2].value;
    for (var i = 0; i < data.length; i++) {
      var split = data[i].split(",");
      var x = String(state.search.selected);
      if (split[0] === x) {
        state.search.selectedStats = split.slice(0, 4);
        state.search.selected_number = split[4];
      }
    }
    this.setState(() => ({ state }));
    this.generateStatsArray();
  };

  renderSuggestions = () => {
    let state = { ...this.state };
    if (state.search.suggestions.length === 0) {
      return null;
    }
    if (state.search.suggestions.length > 5) {
      state.search.suggestions = state.search.suggestions.slice(0, 5);
    }
    return (
      <ul>
        {state.search.suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  changeSort = value => {
    const state = { ...this.state };
    state.options.sort = value;
    this.setState(() => ({ state }));
    this.generateStatsArray();
  };

  toggleNundo = () => {
    const state = { ...this.state };
    state.options.toggle.nundo = !state.options.toggle.nundo;
    this.setState(() => ({ state }));
    this.generateStatsArray();
  };

  toggleLvl15 = () => {
    const state = { ...this.state };
    state.options.toggle.lvl15 = !state.options.toggle.lvl15;
    this.setState(() => ({ state }));
    this.generateStatsArray();
  };

  toggleUnder90 = () => {
    const state = { ...this.state };
    state.options.toggle.under90 = !state.options.toggle.under90;
    this.setState(() => ({ state }));
    this.generateStatsArray();
  };

  toggleColor = () => {
    const state = { ...this.state };
    state.options.toggle.color = !state.options.toggle.color;
    this.setState(() => ({ state }));
    this.generateStatsArray();
  };

  generateStatsArray = () => {
    var atk = parseInt(this.state.search.selectedStats[1]);
    var def = parseInt(this.state.search.selectedStats[2]);
    var sta = parseInt(this.state.search.selectedStats[3]);
    var statsArray = [];
    for (var at = 15; at > 9; at--) {
      for (var de = 15; de > 9; de--) {
        for (var st = 15; st > 9; st--) {
          var iv = ((at + de + st) / 45.0) * 100;
          var cp15 = Math.floor(
            ((atk + at) *
              Math.sqrt(def + de) *
              Math.sqrt(sta + st) *
              Math.pow(0.51739395, 2)) /
              10
          );
          var cp20 = Math.floor(
            ((atk + at) *
              Math.sqrt(def + de) *
              Math.sqrt(sta + st) *
              Math.pow(0.59740001, 2)) /
              10
          );
          var cp25 = Math.floor(
            ((atk + at) *
              Math.sqrt(def + de) *
              Math.sqrt(sta + st) *
              Math.pow(0.667934, 2)) /
              10
          );
          var cp40 = Math.floor(
            ((atk + at) *
              Math.sqrt(def + de) *
              Math.sqrt(sta + st) *
              Math.pow(0.79030001, 2)) /
              10
          );
          var hp15 = Math.floor((sta + st) * 0.51739395);
          var hp20 = Math.floor((sta + st) * 0.59740001);
          var hp25 = Math.floor((sta + st) * 0.667934);
          var hp40 = Math.floor((sta + st) * 0.79030001);
          var newArray = [
            cp15,
            hp15,
            cp20,
            hp20,
            cp25,
            hp25,
            iv.toFixed(1),
            at,
            de,
            st,
            cp40,
            hp40
          ]; /*toFixed rounds to specified amount of decimal places.*/
          statsArray.push(newArray);
        }
      }
    }
    const state = { ...this.state };
    state.search.statsArray = statsArray;
    this.setState(() => ({ state }));
    this.filterStats();
  };

  sortFunction = (a, b) => {
    const sortDict = {
      cp: 0,
      iv: 4
    };
    var index = sortDict[this.state.options.sort];
    var index2 = 0; /*Secondary sort index.*/
    var index3 = 0; /*Tertiary sort index.*/
    if (this.state.options.sort === "iv") {
      index2 = 0; /*If primary sort is by IV, secondary sort is by CP@20.*/
      index3 = 9; /*If primary sort is by IV, tertiary sort is by HP@40.*/
    } else {
      index2 = 8; /*If primary sort is by CP@20, secondary sort is by CP@40.*/
      index3 = 4; /*If primary sort is by IV, teriary sort is by IV.*/
    }
    if (this.state.options.toggle.lvl15) {
      index += 2;
      index2 += 2;
      index3 += 2;
    }
    if (parseFloat(a[index]) === parseFloat(b[index])) {
      if (parseFloat(a[index2]) === parseFloat(b[index2])) {
        if (parseFloat(a[index3]) === parseFloat(b[index3])) {
          return 0;
        } else {
          return parseFloat(a[index3]) > parseFloat(b[index3]) ? -1 : 1;
        }
      } else {
        return parseFloat(a[index2]) > parseFloat(b[index2]) ? -1 : 1;
      }
    } else {
      return parseFloat(a[index]) > parseFloat(b[index]) ? -1 : 1;
    }
  };

  filterStats = () => {
    var stats_raw = [...this.state.search.statsArray];
    var stats_temp = [];
    var stats = [];

    if (!this.state.options.toggle.under90) {
      for (var i = 0; i < stats_raw.length; i++) {
        if (stats_raw[i][6] > 90) {
          stats_temp.push(stats_raw[i]);
        }
        if (i === stats_raw.length - 1) {
          if (this.state.options.toggle.nundo) {
            stats_temp.push(stats_raw[i]);
          }
        }
      }
    } else {
      stats_temp = stats_raw;
    }

    if (!this.state.options.toggle.lvl15) {
      for (i = 0; i < stats_temp.length; i++) {
        stats.push(stats_temp[i].slice(2, stats_temp[i].length));
      }
    } else {
      stats = stats_temp;
    }
    stats.sort(this.sortFunction);
    const state = { ...this.state };
    state.search.statsArray = stats;
    this.setState(() => ({ state }));
  };

  render() {
    return (
      <div className="App">
        <div className="Container">
          <PageHeader />
          <div className="AutoCompleteSearch">
            <AutoCompleteSearch
              items={this.state.data[0]}
              search={this.state.search}
              onTextChanged={this.onTextChanged}
              renderSuggestions={this.renderSuggestions}
            />
            {this.renderSuggestions()}
          </div>
          <br />
          <Options
            options={this.state.options}
            changeSort={value => this.changeSort(value)}
            toggleNundo={this.toggleNundo}
            toggleLvl15={this.toggleLvl15}
            toggleUnder90={this.toggleUnder90}
            toggleColor={this.toggleColor}
          />
          <TableGenerator
            options={this.state.options}
            stats={this.state.search.statsArray}
            selected={this.state.search.selected}
            selected_number={this.state.search.selected_number}
          />
          <PageFooter />
        </div>
      </div>
    );
  }
}

export default App;
