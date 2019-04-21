import React, { Component } from "react";
import "../AutoCompleteSearch.css";

class TableGenerator extends Component {
  getRowClass = row => {
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

  sortFunction = (a, b) => {
    const sortDict = {
      cp20: 0,
      cp25: 2,
      iv: 4
    };
    var index = sortDict[this.props.options.sort];
    if (this.props.options.toggle.lvl15) {
      index += 2;
    }
    if (parseFloat(a[index]) === parseFloat(b[index])) {
      if (parseFloat(a[index + 4]) === parseFloat(b[index + 4])) {
        return 0;
      } else {
        return parseFloat(a[index + 4]) > parseFloat(b[index + 4]) ? -1 : 1;
      }
    } else {
      return parseFloat(a[index]) > parseFloat(b[index]) ? -1 : 1;
    }
  };

  drawTable() {
    var stats_raw = [...this.props.stats];
    var stats_temp = [];
    var stats = [];
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

    if (!this.props.options.toggle.under90) {
      for (var i = 0; i < stats_raw.length; i++) {
        if (stats_raw[i][6] > 90) {
          stats_temp.push(stats_raw[i]);
        }
        if (i === stats_raw.length - 1) {
          if (this.props.options.toggle.nundo) {
            stats_temp.push(stats_raw[i]);
          }
        }
      }
    } else {
      stats_temp = stats_raw;
    }

    if (!this.props.options.toggle.lvl15) {
      headers.shift();
      headers.shift();
      for (i = 0; i < stats_temp.length; i++) {
        stats.push(stats_temp[i].slice(2, stats_temp[i].length));
      }
    } else {
      stats = stats_temp;
    }

    stats.sort(this.sortFunction);

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
