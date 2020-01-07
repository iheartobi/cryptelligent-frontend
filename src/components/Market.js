import React, { Component } from "react";
import { connect } from "react-redux";
import { getCoins, getUserInfo } from "../services/backend";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import coin_img from "../assets/quarter.gif";
import CoinList from "./CoinList";
import Jumbotron from "./Jumbotron";

const TRANS_API = 'http://localhost:3000/transactions/'


class Market extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      coin: {},
      user: {},
      loading: true,
      value: ""
    };
  }
  componentDidMount() {
    getCoins().then(data => {
      this.setState({ coins: data, loading: false });
      this.props.dispatch({ type: "GET_COINS", data });
    })
    if(localStorage.hasOwnProperty("user")){
     let userId = JSON.parse(localStorage.getItem("user"))
     getUserInfo(userId.user.id).then(data => {
       this.setState({user: data})
       this.props.dispatch({type: 'GET_USER', data})
       console.log(this.state.user)
       
     });
    } 
  }


  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  handleClick = (e, id) => {
    e.preventDefault();
    if (this.state.coins.filter(coin => coin.id === id)) {
      const uId = this.state.user.id
      const cId = id.coin.id
      const newTrans = {user_id: uId, coin_id: cId}
      fetch(`${TRANS_API}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(newTrans)
      }).then(res => res.json())
      .then(data => {
        console.log(data.coin)
        console.log(this.state.user)
        this.setState({ user: this.state.user, ...this.state.user.coins, data})
      
    })

    } 
  };

  filterInput() {
    return this.state.coins.filter(coins =>
      coins.name.toLowerCase().includes(this.state.value)
    );
  }

  render() {
    const { loading } = this.state;
    
    if (loading) {
      return (
        <div className="coin-loading">
          <h4>Loading Most Recent Market Data</h4>
          <br></br>
          <img alt="coin" src={coin_img} />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar handleChange={this.handleChange} />
          <br></br>
          <br></br>
          <Container>
            <Jumbotron data={this.state.user} />
            <CoinList
              handleClick={this.handleClick}
              coins={this.filterInput()}
              coin={this.state.coin}
            />
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { coins: state.data.coins, user: state.user };
};
export default connect(mapStateToProps)(Market);
