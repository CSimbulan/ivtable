import React, { Component } from "react";
import "./App.css";
import Options from "./components/Options";
import TableGenerator from "./components/TableGenerator";
import AutoCompleteSearch from "./components/AutoCompleteSearch";
import "./AutoCompleteSearch.css";
import pokemondata from "./components/pokemondata";
import banner from "./ivtable_banner.png";

class App extends Component {
  state = {
    data: [
      {
        id: "names",
        value: pokemondata.map(x => x.split(",")[0])
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
  };

  toggleNundo = () => {
    const state = { ...this.state };
    state.options.toggle.nundo = !state.options.toggle.nundo;
    this.setState(() => ({ state }));
  };

  toggleLvl15 = () => {
    const state = { ...this.state };
    state.options.toggle.lvl15 = !state.options.toggle.lvl15;
    this.setState(() => ({ state }));
  };

  toggleUnder90 = () => {
    const state = { ...this.state };
    state.options.toggle.under90 = !state.options.toggle.under90;
    this.setState(() => ({ state }));
  };

  toggleColor = () => {
    const state = { ...this.state };
    state.options.toggle.color = !state.options.toggle.color;
    this.setState(() => ({ state }));
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
  };

  getImageUrl = () => {
    /*Add special case for castform forms since they aren't in the official assets.*/
    if (this.state.search.selected_number === "351_f2") {
      return "https://cdn.bulbagarden.net/upload/8/89/351Castform-Rainy.png";
    } else if (this.state.search.selected_number === "351_f3") {
      return "https://cdn.bulbagarden.net/upload/8/89/351Castform-Sunny.png";
    } else if (this.state.search.selected_number === "351_f4") {
      return "https://cdn.bulbagarden.net/upload/8/89/351Castform-Snow.png";
    }

    return (
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
      this.state.search.selected_number +
      ".png"
    );
  };

  render() {
    return (
      <div className="App">
        <div className="Container">
          <img src={banner} alt="Pokémon IV Table Generator" />
          <div className="Header">
            <h1>Enter a Pokémon:</h1>
          </div>
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
          <br />
          <hr />
          <h1>{this.state.search.selected}</h1>
          <div className="tableImage">
            <img src={this.getImageUrl()} alt="" />
          </div>

          <TableGenerator
            options={this.state.options}
            stats={this.state.search.statsArray}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <footer>
            <hr />
            Version 1.0.0
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
