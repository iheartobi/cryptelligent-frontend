import React, { Component } from "react";
import { Nav, Button } from "react-bootstrap";
import CoinModal from "./CoinModal";

class UserTable extends Component {
  constructor(props) {
    super(props);

    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.state = {
        open: false
    }
   
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
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  getRowsData = function() {
    const items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow
            onClick={() => this.onOpenModal}
            key={index}
            data={row}
            keys={keys}
          />
          {/* <CoinModal onClick={() => this.onOpenModal} data={row} /> */}
          {/* <Button variant="secondary"
          onclick={() => this.setState({open: true})}></Button> */}
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
          <tbody>{this.getRowsData()}</tbody>
        </>
      );
    }
  }
}
const RenderRow = props => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}
        <CoinModal onClick={() => this.onOpenModal()}  />
    </td>;
  });
};

export default UserTable;
