import React, { Component } from "react";
import banner from "../ivtable_banner.png";

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={banner} alt="Pokémon IV Table Generator" />
        <div className="Header">
          <h1>Enter a Pokémon:</h1>
        </div>
      </div>
    );
  }
}

export default PageHeader;
