import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class UserTable extends Component {
  constructor(props) {
    super(props);

    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function() {
    const allowed = ["id", "name", "price", "created_at"];

    const filtered = Object.keys(this.props.data[0])
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: this.props.data[0][key]
        };
      }, {});
    return Object.keys(filtered);
  };

  getHeader = function() {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return (
        <th className="coin-header" key={key}>
          {key.toUpperCase()}
        </th>
      );
    });
  };

  getRowsData = function() {
    const items = this.props.data;
    var keys = this.getKeys();

    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
          <button
            className="sell-button"
            key={index}
            value={row}
            onClick={(e) => this.props.handleButtonClick(e, row)}
          >
            Sell Coin
          </button>
        </tr>
      );
    });
  };

  render() {
    if (!this.props.data[0]) {
      return (
        <center>
          <h3>{"You Don't Have any Transactions Yet!"}</h3>
          <Nav.Link href="/market">{"GET COINS NOW"}</Nav.Link>
        </center>
      );
    } else {
      return (
        <>
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()} </tbody>
        </>
      );
    }
  }
}
const RenderRow = props => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};

export default UserTable;
