import React, { Component } from "react";
import "../AutoCompleteSearch.css";

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

  render() {
    return <div className="Table">{this.drawTable()}</div>;
  }
}

export default TableGenerator;
