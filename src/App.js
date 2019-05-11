import React, { Component } from "react";
import "./App.css";
import Options from "./components/Options";
import TableGenerator from "./components/TableGenerator";
import AutoCompleteSearch from "./components/AutoCompleteSearch";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import pokemondata from "./components/pokemondata";
import cpmultipliers from "./components/cpmultipliers";

class App extends Component {
  state = {
    data: {
      names: pokemondata.map(
        x => x.split(",")[0]
      ) /*Get first column from the data.*/,
      cpm: cpmultipliers,
      stats: pokemondata
    },
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
    },
    version_number: "1.1.2"
  };

  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.data.names.sort().filter(v => regex.test(v));
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
    const data = this.state.data.stats;
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
    console.log(this.state.options.selected);
    if (this.state.search.selected) {
      this.generateStatsArray();
    }
  };

  toggleNundo = () => {
    const state = { ...this.state };
    state.options.toggle.nundo = !state.options.toggle.nundo;
    this.setState(() => ({ state }));
    if (this.state.search.selected) {
      this.generateStatsArray();
    }
  };

  toggleLvl15 = () => {
    const state = { ...this.state };
    state.options.toggle.lvl15 = !state.options.toggle.lvl15;
    this.setState(() => ({ state }));
    if (this.state.search.selected) {
      this.generateStatsArray();
    }
  };

  toggleUnder90 = () => {
    const state = { ...this.state };
    state.options.toggle.under90 = !state.options.toggle.under90;
    this.setState(() => ({ state }));
    if (this.state.search.selected) {
      this.generateStatsArray();
    }
  };

  toggleColor = () => {
    const state = { ...this.state };
    state.options.toggle.color = !state.options.toggle.color;
    this.setState(() => ({ state }));
    if (this.state.search.selected) {
      this.generateStatsArray();
    }
  };

  getCPM = level => {
    var cpm = 0;
    const cpmArray = this.state.data.cpm;
    cpm = parseFloat(cpmArray[level * 2 - 2].split(",")[1]);
    return cpm;
  };

  calculateCP = (atk, def, sta, lvl) => {
    return Math.floor(
      (atk * Math.sqrt(def) * Math.sqrt(sta) * Math.pow(this.getCPM(lvl), 2)) /
        10
    );
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
          var cp15 = this.calculateCP(atk + at, def + de, sta + st, 15.0);
          var cp20 = this.calculateCP(atk + at, def + de, sta + st, 20.0);
          var cp25 = this.calculateCP(atk + at, def + de, sta + st, 25.0);
          var cp40 = this.calculateCP(atk + at, def + de, sta + st, 40.0);
          var hp15 = Math.floor((sta + st) * this.getCPM(15.0));
          var hp20 = Math.floor((sta + st) * this.getCPM(20.0));
          var hp25 = Math.floor((sta + st) * this.getCPM(25.0));
          var hp40 = Math.floor((sta + st) * this.getCPM(40.0));
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
    statsArray.sort(this.sortFunction);
    const state = { ...this.state };
    state.search.statsArray = statsArray;
    this.setState(() => ({ state }));
    this.filterStats();
  };

  sortFunction = (a, b) => {
    const sortDict = {
      cp: 2,
      iv: 6
    };
    var index = sortDict[this.state.options.sort];
    var index2 = 0; /*Secondary sort index.*/
    var index3 = 0; /*Tertiary sort index.*/
    if (this.state.options.sort === "iv") {
      index2 = 2; /*If primary sort is by IV, secondary sort is by CP@20.*/
      index3 = 10; /*If primary sort is by IV, tertiary sort is by CP@40.*/
    } else {
      index2 = 10; /*If primary sort is by CP@20, secondary sort is by CP@40.*/
      index3 = 6; /*If primary sort is by IV, teriary sort is by IV.*/
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
    const state = { ...this.state };
    state.search.statsArray = stats;
    this.setState(() => ({ state }));
  };

  render() {
    return (
      <div className="App">
        <div className="Container">
          <PageHeader version={this.state.version_number} />
          <div className="AutoCompleteSearch">
            <AutoCompleteSearch
              items={this.state.data.names}
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
          <PageFooter version={this.state.version_number} />
        </div>
      </div>
    );
  }
}

export default App;
