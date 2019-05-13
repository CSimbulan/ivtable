import React, { Component } from "react";
import "./App.css";
import Options from "./components/Options";
import TableGenerator from "./components/TableGenerator";
import AutoCompleteSearch from "./components/AutoCompleteSearch";
import Instructions from "./components/Instructions";
import PageFooter from "./components/PageFooter";
import pokemondata from "./data/pokemondata";
import cpmultipliers from "./data/cpmultipliers";
import typeCounters from "./data/typeCounters";
import typeResistances from "./data/typeResistances";
import weatherBoosts from "./data/weatherBoosts";

function getinitialState() {
  return {
    data: {
      names: getNames(),
      cpm: cpmultipliers,
      stats: pokemondata
    },
    search: {
      selected: "",
      selected_number: "",
      suggestions: [],
      text: "",
      selectedStats: [],
      statsArray: [],
      typing: [],
      counters: [],
      resistances: [],
      weather: []
    },
    options: {
      id: "options",
      sort: "cp",
      toggle: { nundo: true, lvl15: false, under90: false, color: true },
      cpfilter: false,
      filtervalue: "",
      highestLevel: 40
    },
    version_number: "1.5.0"
  };
}

function getNames() {
  const names = pokemondata.map(
    x => x.split(",")[0]
  ); /*Get first column from the data.*/
  const namesWithNumbers = pokemondata.map(
    x => x.split(",")[4].slice(0, 3) + " " + x.split(",")[0]
  );
  const namesWithNumbersNoZero = pokemondata.map(
    x => parseInt(x.split(",")[4].slice(0, 3)) + " " + x.split(",")[0]
  );
  const temp = namesWithNumbers.concat(namesWithNumbersNoZero.slice(0, 115));
  return names.concat(temp);
}

class App extends Component {
  state = getinitialState();

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

  pad = (num, size) => {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  };

  suggestionSelected = value => {
    const state = { ...this.state };
    state.search.text = value;
    state.search.suggestions = [];
    const test = value.split(" ");
    if (test.length > 1) {
      if (isNaN(test[0])) {
        state.search.selected = value;
      } else state.search.selected = test.slice(1).join(" ");
    } else state.search.selected = value;
    const data = this.state.data.stats;
    for (var i = 0; i < data.length; i++) {
      var split = data[i].split(",");
      var x = String(state.search.selected);
      if (split[0] === x) {
        state.search.selectedStats = split.slice(1, 4);
        state.search.selected_number = split[4];
        var types = [];
        types.push(split[5]);
        if (split[6] !== "None") {
          types.push(split[6]);
        }
        state.search.typing = types;
      }
    }
    this.setState(() => ({ state }));
    this.generateStatsArray();
    this.getCounters();
    this.getWeather();
  };

  renderSuggestions = () => {
    let state = { ...this.state };
    if (state.search.suggestions.length === 0) {
      return null;
    }
    /*
    if (state.search.suggestions.length > 5) {
      state.search.suggestions = state.search.suggestions.slice(0, 5);
    }*/
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
    if (this.state.search.selected) {
      this.generateStatsArray();
    }
  };

  changeHighestLevel = value => {
    const state = { ...this.state };
    state.options.highestLevel = value;
    this.setState(() => ({ state }));
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

  toggleCPFilter = () => {
    const state = { ...this.state };
    state.options.cpfilter = !state.options.cpfilter;
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
    var atk = parseInt(this.state.search.selectedStats[0]);
    var def = parseInt(this.state.search.selectedStats[1]);
    var sta = parseInt(this.state.search.selectedStats[2]);
    var statsArray = [];
    for (var at = 15; at > 9; at--) {
      for (var de = 15; de > 9; de--) {
        for (var st = 15; st > 9; st--) {
          var iv = ((at + de + st) / 45.0) * 100;
          var cp15 = this.calculateCP(atk + at, def + de, sta + st, 15.0);
          var cp20 = this.calculateCP(atk + at, def + de, sta + st, 20.0);
          var cp25 = this.calculateCP(atk + at, def + de, sta + st, 25.0);
          var cpHigh = this.calculateCP(
            atk + at,
            def + de,
            sta + st,
            this.state.options.highestLevel
          );
          var hp15 = Math.floor((sta + st) * this.getCPM(15.0));
          var hp20 = Math.floor((sta + st) * this.getCPM(20.0));
          var hp25 = Math.floor((sta + st) * this.getCPM(25.0));
          var hpHigh = Math.floor(
            (sta + st) * this.getCPM(this.state.options.highestLevel)
          );
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
            cpHigh,
            hpHigh
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
      iv: 6,
      atk: 7
    };
    var index = sortDict[this.state.options.sort];
    var index2 = 0; /*Secondary sort index.*/
    var index3 = 0; /*Tertiary sort index.*/
    if (this.state.options.sort === "iv") {
      index2 = 2; /*If primary sort is by IV, secondary sort is by CP@20.*/
      index3 = 10; /*If primary sort is by IV, tertiary sort is by CP@40.*/
    } else if (this.state.options.sort === "cp") {
      index2 = 10; /*If primary sort is by CP@20, secondary sort is by CP@40.*/
      index3 = 6; /*If primary sort is by IV, teriary sort is by IV.*/
    } else {
      index2 = 6; /*If primary sort is by ATK, secondary sort is by IV.*/
      index3 = 10; /*If primary sort is by IV, teriary sort is by IV.*/
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

    if (this.state.options.cpfilter && this.state.options.filtervalue) {
      var temp2 = [];
      const filtervalue = parseInt(this.state.options.filtervalue);
      for (i = 0; i < stats_temp.length; i++) {
        if (
          (stats_temp[i][0] === filtervalue &&
            this.state.options.toggle.lvl15) ||
          stats_temp[i][2] === filtervalue ||
          stats_temp[i][4] === filtervalue ||
          stats_temp[i][10] === filtervalue
        ) {
          temp2.push(stats_temp[i]);
        }
      }
      stats_temp = temp2;
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

  onFilterChanged = e => {
    const value = e.target.value;
    const state = { ...this.state };
    state.options.filtervalue = value;

    this.setState(() => ({ state }));
    if (this.state.options.cpfilter && this.state.search.selected) {
      this.generateStatsArray();
    }
  };

  reset = () => {
    this.setState(getinitialState());
  };

  clearSearch = () => {
    const state = { ...this.state };
    state.search.text = "";
    this.setState(() => ({ state }));
  };

  removeDuplicates = (item, index, inputArray) => {
    return inputArray.indexOf(item) === index;
  }; /*Remove duplicates*/

  getCounters = () => {
    const typings = this.state.search.typing;
    let counters = [];
    let resistances = [];

    for (var i in typings) {
      counters = counters.concat(typeCounters[typings[i]]);
      counters = counters.filter(this.removeDuplicates);
      resistances = resistances.concat(typeResistances[typings[i]]);
      resistances = resistances.filter(this.removeDuplicates);
    }
    for (var j in resistances) {
      for (var k = counters.length - 1; k >= 0; k--) {
        if (counters[k] === resistances[j]) {
          counters.splice(k, 1);
        }
      }
    }
    const state = { ...this.state };
    state.search.counters = counters;
    state.search.resistances = resistances;
    this.setState(() => ({ state }));
  };

  getWeather = () => {
    const types = this.state.search.typing;
    var boosts = [];
    for (var i in types) {
      boosts.push(weatherBoosts[types[i]]);
    }
    boosts = boosts.filter(this.removeDuplicates);
    const state = { ...this.state };
    state.search.weather = boosts;
    this.setState(() => ({ state }));
  };

  render() {
    return (
      <div className="App">
        <div className="Container">
          <Instructions version={this.state.version_number} />
          <div className="AutoCompleteSearch">
            <AutoCompleteSearch
              items={this.state.data.names}
              search={this.state.search}
              onTextChanged={this.onTextChanged}
              renderSuggestions={this.renderSuggestions}
              clearSearch={this.clearSearch}
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
            toggleCPFilter={this.toggleCPFilter}
            filterCP={this.state.options.filtervalue}
            onFilterChanged={this.onFilterChanged}
            changeHighestLevel={value => this.changeHighestLevel(value)}
          />
          <TableGenerator
            options={this.state.options}
            stats={this.state.search.statsArray}
            selected={this.state.search.selected}
            selected_number={this.state.search.selected_number}
            selected_stats={this.state.search.selectedStats}
            onClickReset={this.reset}
            typing={this.state.search.typing}
            counters={this.state.search.counters}
            resistances={this.state.search.resistances}
            weather={this.state.search.weather}
          />
          <PageFooter version={this.state.version_number} />
        </div>
      </div>
    );
  }
}

export default App;
