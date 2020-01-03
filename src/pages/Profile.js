import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Container, Table} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Modal from "react-responsive-modal";
import Jumbotron from '../components/Jumbotron'

class Profile extends Component {
  state = {
    open: false
  };

  onOpenModal = (id, e) => {
    if (id) {
      console.log(e.target);
      this.setState({ open: true });
    }
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const bg = {
      overlay: {
        background: "transparent"
      }
    };
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data)
    const userTrans = data.user.coins.map((coin, index) => {
      const {
        id,
        price,
        name,
        created_at,
        market_cap,
        high,
        logo_url,
        rank,
        circulating_supply,
        currency
      } = coin;
      const { open } = this.state;
      let sellPrice = (price - (price * 10) / 100).toFixed(2);

      return (
        <>
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
          <tr onClick={e => this.onOpenModal(id, e)} key={index}>
            <td>{id}</td>
            <td>{created_at}</td>
            <td>{name}</td>
            <td>{price.toFixed(2)}</td>
          </tr>
        </>
      );
    });


    const userTable = (
      
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Coin #</th>
              <th>Transaction Date</th>
              <th>Coin Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.user.coins.length > 0 ? (
              <>{userTrans}</>
            ) : (
              <center>
                <h3>{"You Don't Have any Transactions Yet!"}</h3>
                <Nav.Link href="/market">{"GET COINS NOW"}</Nav.Link>
              </center>
            )}
          </tbody>
        </Table>
      
    );

    return (
      <div>
        <NavBar />
        <br></br>
        <br></br>
        <Container>
        <Jumbotron data={data}/>
        {userTable}
        </Container>  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, coins: state.data.coins };
};

export default connect(mapStateToProps)(Profile);
