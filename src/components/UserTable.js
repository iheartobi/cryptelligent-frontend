import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class UserTable extends Component {
  constructor(props) {
    super(props);
  
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function(){
      return Object.keys(this.props.data[0])
  }

  getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
      return <th key={key}>{key.toUpperCase()}</th>
      })
  }
 
  

  getRowsData = function(){
      const items = this.props.data;
      var keys  = this.getKeys();
      return items.map((row, index)=>{
      return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
  }

  render() {
      if(!this.props.data[0]){
          return (
                  <center>
                    <h3>{"You Don't Have any Transactions Yet!"}</h3>
                     <Nav.Link href="/market">{"GET COINS NOW"}</Nav.Link>
                    </center>
          )}else{
  return (
  <div>
  <table>
  <thead>
  <tr>{this.getHeader()}</tr>
  </thead>
  <tbody>
  {this.getRowsData()}
  </tbody>
  </table>
  </div>

  )};
  }
  }
  const RenderRow = (props) =>{
      return props.keys.map((key, index)=>{
          return <td key={props.data[key]}>{props.data[key]}</td>
          })
  }



export default UserTable;
