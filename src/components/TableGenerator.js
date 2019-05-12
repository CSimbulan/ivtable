import React, { Component } from "react";
import { CSVLink } from "react-csv";

class TableGenerator extends Component {
  getRowClass = row => {
    if (!this.props.options.toggle.color) {
      return null;
    }

    const pairs = {
      97.8: "ninetyEight",
      95.6: "ninetySix",
      93.3: "ninetyThree",
      91.1: "ninetyOne",
      100.0: "hundo",
      66.7: "nundo"
    };
    var index = 0;
    if (!this.props.options.toggle.lvl15) {
      index = 4;
    } else {
      index = 6;
    }

    if (row[index] === "100.0") {
      return "hundo";
    }
    return pairs[row[index]];
  };

  generateRandomKey = () => {
    return Math.random() * 100 + 1;
  };

  drawTable() {
    var headers = this.getHeaders();
    const stats = this.props.stats;
    return (
      <table>
        <thead>
          <tr>
            {headers.map(head => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stats.map(row => (
            <tr className={this.getRowClass(row)} key={row.join()}>
              {row.map(column => (
                <td key={this.generateRandomKey()}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  getFileName = () => {
    var filename = "";
    filename += this.props.selected.toLowerCase();
    filename += "_sortby" + this.props.options.sort;
    filename += ".csv";
    return filename;
  };

  getPkmnImagePath = shiny => {
    if (this.props.selected === "") {
      return "";
    }

    let dexNumber = this.props.selected_number;
    if (dexNumber.length === 3) {
      dexNumber += "_00";
    }
    if (shiny) {
      dexNumber += "_shiny";
    }
    return (
      process.env.PUBLIC_URL +
      "/pokemon_icons/pokemon_icon_" +
      dexNumber +
      ".png"
    );
  };

  getTypeImagePath = type => {
    if (this.props.selected === "") {
      return "";
    }

    return (
      process.env.PUBLIC_URL + "/type_icons/Badge_Type_" + type + "_01.png"
    );
  };

  getWeatherImagePath = weather => {
    if (this.props.selected === "") {
      return "";
    }

    return (
      process.env.PUBLIC_URL +
      "/weather_icons/weatherIcon_small_" +
      weather +
      ".png"
    );
  };

  getHeaders = () => {
    var headers = [
      "CP@15",
      "HP@15",
      "CP@20",
      "HP@20",
      "CP@25",
      "HP@25",
      "IV%",
      "ATK",
      "DEF",
      "STA",
      "CP@40",
      "HP@40"
    ];

    if (!this.props.options.toggle.lvl15) {
      headers.shift();
      headers.shift();
    }

    return headers;
  };

  getName = () => {
    let header = "";
    if (this.props.selected) {
      header += "#";
    }

    return (
      header +
      this.props.selected_number.slice(0, 3) +
      " " +
      this.props.selected
    );
  };

  getImageClass = () => {
    if (this.props.selected) {
      return "tableImage";
    } else {
      return "tableImageHide";
    }
  };

  render() {
    return (
      <div>
        <br />
        <hr />
        <h1>{this.getName()}</h1>
        <div className={this.getImageClass()}>
          <div className="Block" id="BlockLeft">
            <strong>
              <i>
                <u>Base Stats</u>
              </i>
            </strong>
            <br />
            <i>Attack: {this.props.selected_stats[0]}</i>
            <br />
            <i>Defense: {this.props.selected_stats[1]}</i>
            <br />
            <i>Stamina: {this.props.selected_stats[2]}</i>
          </div>
          <div className="Block">
            <img src={this.getPkmnImagePath(false)} alt="" />
          </div>
          <div className="Block">
            <img src={this.getPkmnImagePath(true)} alt="" />
          </div>
          <div className="Block" id="BlockRight">
            <strong>
              <i>
                <u>Typing:</u>
              </i>
            </strong>
            <br />
            {this.props.typing.map(type => (
              <img
                className="TypeIcon"
                src={this.getTypeImagePath(type)}
                alt={type}
                key={type}
              />
            ))}
            <br />
            <strong>
              <i>
                <u>Counters:</u>
              </i>
            </strong>
            <br />
            {this.props.counters.map(type => (
              <img
                className="TypeIcon"
                src={this.getTypeImagePath(type)}
                alt={type}
                key={type}
              />
            ))}
            <br />

            <strong>
              <i>
                <u>Weather Boosts:</u>
              </i>
            </strong>
            <br />
            {this.props.weather.map(weather => (
              <img
                className="TypeIcon"
                src={this.getWeatherImagePath(weather)}
                alt={weather}
                key={weather}
              />
            ))}
          </div>
        </div>
        <div className="Table">{this.drawTable()}</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <CSVLink
          data={this.props.stats}
          filename={this.getFileName()}
          enclosingCharacter={`;`}
          headers={this.getHeaders()}
        >
          <button className="buttonExport">Export As CSV File</button>
        </CSVLink>
        <br />
        <br />
        <button className="buttonReset" onClick={this.props.onClickReset}>
          Reset
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default TableGenerator;
