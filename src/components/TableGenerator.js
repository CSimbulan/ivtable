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
            <tr className={this.getRowClass(row)}>
              {row.map(column => (
                <td>{column}</td>
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

  getImageUrl = shiny => {
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

    /*Add special case for castform forms since they aren't in the official assets.*/
    /*
    if (this.props.selected_number === "351_f2") {
      return "https://cdn.bulbagarden.net/upload/8/89/351Castform-Rainy.png";
    } else if (this.props.selected_number === "351_f3") {
      return "https://cdn.bulbagarden.net/upload/b/b6/351Castform-Sunny.png";
    } else if (this.props.selected_number === "351_f4") {
      return "https://cdn.bulbagarden.net/upload/f/f9/351Castform-Snowy.png";
    }

    return (
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
      this.props.selected_number +
      ".png"
    );*/
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
          <img src={this.getImageUrl(false)} alt="" />
          <img src={this.getImageUrl(true)} alt="" />
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
