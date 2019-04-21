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
      cp: 0,
      iv: 4
    };
    var index = sortDict[this.props.options.sort];
    var index2 = 0; /*Secondary sort index.*/
    var index3 = 0; /*Tertiary sort index.*/
    if (this.props.options.sort === "iv") {
      index2 = 8; /*If primary sort is by IV, secondary sort is by CP@40.*/
      index3 = 9; /*If primary sort is by IV, tertiary sort is by HP@40.*/
    } else {
      index2 = 8; /*If primary sort is by CP@20, secondary sort is by CP@40.*/
      index3 = 4; /*If primary sort is by IV, secondary sort is by IV.*/
    }
    if (this.props.options.toggle.lvl15) {
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
