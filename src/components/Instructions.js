import React, { Component } from "react";
import banner from "../ivtable_banner.png";
import Popup from "reactjs-popup";

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={banner} alt="Pokémon IV Table Generator" />
        <div className="Header">
          <div className="Instructions">
            <p>
              <strong>How it works:</strong> Start typing a Pokémon (species
              name or number) in the text box below. Select the Pokémon you want
              to generate a table for from the drop down box. Use the sorting
              and toggle buttons to customize the table. These tables are used
              as reference sheets for quickly checking a Pokémon's IVs based on
              their CP value for indicated level. Useful encounters are from a
              normal raid (Level 20), weather boosted raid (Level 25), research
              task (Level 15), rocket battle (Level 8), and weather boosted
              rocket battle (Level 13).
            </p>
            Click on this button for a more detailed user manual:{"     "}
            <Popup
              trigger={<button className="buttonManual">User Manual</button>}
              modal
            >
              {(close) => (
                <div className="modal">
                  <span className="close" onClick={close}>
                    &times;
                  </span>
                  <div className="header">
                    <h1>
                      Pokémon GO IV Table Generator Ver {this.props.version}
                    </h1>
                  </div>
                  <div className="content">
                    <br />
                    This app lets you create an IV table for any Pokémon.
                    <br />
                    To use it, start typing a Pokémon species or number in the
                    text bar. A dropdown menu will appear allowing you to select
                    a species.
                    <br />A table will automatically be generated. You can
                    choose the following settings:
                    <br />
                    <h2>Sort Settings</h2>
                    <ul>
                      <li>
                        Sort by CP at the encounter level. in descending order.
                        If two CPs are equal then it will next sort by CP at the
                        highest level shown, followed by IV percentage.
                      </li>
                      <li>
                        Sort by IV percentage in descending order. If two IVs
                        are equal then it will next sort by CP at the encounter
                        level, follow by CP at the highest level shown.
                      </li>
                      <li>
                        Sort by ATK IV in descending order. If two ATK IVs are
                        equal then it will next sort by IV percentage, followed
                        by CP at the highest level shown.
                      </li>
                    </ul>
                    <h2>Toggle Settings</h2>
                    <ul>
                      <li>
                        Nundo: this will show the stats for an IV percentage of
                        66.7% (10/10/10), which the lowest you can get from a
                        raid / egg hatch. If this setting is toggled ON then it
                        will show even if the Under 90 setting is OFF.
                      </li>
                      <li>
                        Under 90%: this will show all combinations of thats from
                        66.7% (10/10/10) to 100% (15/15/15). The nundo stats
                        will show even if this setting is OFF.
                      </li>
                      <li>
                        Colored rows: this will toggle ON/OFF the coloring of
                        table rows.
                      </li>
                    </ul>
                    <h2>Encounter Level</h2>
                    <ul>
                      <li>
                        Select what level to show the CP for. The indicated
                        level + 5 will also be shown for weather boosts. Note
                        that certain encounters such as from a research task
                        cannot be weather boosted.
                      </li>
                    </ul>
                    <h2>CP Filter</h2>
                    <ul>
                      <li>
                        Show Only CP: the table will only show IV combinations
                        that produce a CP matched with the value entered here.
                      </li>
                    </ul>
                    <h2>Highest Level</h2>
                    <ul>
                      <li>
                        Select which level the last two columns will show CP and
                        HP for.
                      </li>
                    </ul>
                    <h2>Export As CSV File</h2>
                    This button will export the table data to a csv file. Note
                    that all the values will be wrapped in double quotation
                    marks. This is how the library used to export does it. There
                    is supposed to be a way to remove the quotes but it does not
                    seem to be working.
                    <h2>Reset</h2>
                    Clears the table and resets all settings to default.
                  </div>
                  <div className="actions">
                    <button
                      className="buttonManual"
                      onClick={() => {
                        close();
                      }}
                    >
                      Got It!
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <h1>Select a Pokémon:</h1>
        </div>
      </div>
    );
  }
}

export default PageHeader;
