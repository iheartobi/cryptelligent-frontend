import React, { Component} from 'react';
import Modal from "react-responsive-modal";


function Modal(props) {

    <Modal open={open} onClose={this.onCloseModal} styles={bg} center>
    <img alt="logo" height="60px" width="60px" src={logo_url} />
    <h2>Rank: {rank ? rank : "No Data"}</h2>
    <h2>Price: {price ? price.toFixed(2) : "No Data"}</h2>
    <h2>Currency: {currency ? currency : " No Data"}</h2>
    <h2>
      Circulating Supply:{" "}
      {circulating_supply ? circulating_supply : "No Data"}
    </h2>
    <h2>Market Cap: {market_cap ? market_cap : " No Data"}</h2>
    <h2>Market High: {high ? high : " No Data"}</h2>
    <Nav.Link href="/sell-coin">
      {"SELL COIN"}
      {"  "} <h2>${sellPrice}</h2>{" "}
    </Nav.Link>
  </Modal>

}

export default Modal