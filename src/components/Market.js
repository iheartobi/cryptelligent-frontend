import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoins, getUserInfo } from '../services/backend';
import NavBar from './NavBar';
import { Container, Spinner } from 'react-bootstrap';
import CoinList from './CoinList';
import Jumbotron from './Jumbotron';

const TRANS_API = 'https://whispering-hamlet-76141.herokuapp.com/transactions/';
const USER_API = 'https://whispering-hamlet-76141.herokuapp.com/users/';

class Market extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      coin: {},
      user: {},
      loading: true,
      value: ''
    };
  }

  componentDidMount() {
    getCoins().then(data => {
      this.setState({ coins: data, loading: false });
      this.props.dispatch({ type: 'GET_COINS', data });
    });
    if (localStorage.hasOwnProperty('user')) {
      let userId = JSON.parse(localStorage.getItem('user'));
      getUserInfo(userId.user.id).then(data => {
        this.setState({ user: data });
        this.props.dispatch({ type: 'GET_USER', data });
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
    if (this.state.coins.filter(coin => coin.id === id)) {
      const uId = this.state.user.id;
      const cId = id.coin.id;
      const newTrans = { user_id: uId, coin_id: cId };
      const coinBank = { coinbank: this.state.user.coinbank - id.coin.price };
      let newCoinBank = this.state.user.coinbank - id.coin.price;
      this.setState(state => ({
        user: {
          ...state.user,
          coinbank: newCoinBank
        }
      }));

      fetch(`${TRANS_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTrans)
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            user: this.state.user,
            ...this.state.user.coins,
            data
          });
        })
        .catch(err => alert(err));

      fetch(`${USER_API}${uId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(coinBank)
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => alert(err));
    }
  };

  filterInput() {
    return this.state.coins.filter(coins =>
      coins.name.toLowerCase().includes(this.state.value)
    );
  }

  render() {
    const { loading, user } = this.state;
    console.log(user);

    if (loading) {
      return (
        <Spinner
          className="coin-loading"
          animation="border"
          role="status"
        ></Spinner>
      );
    } else {
      return (
        <div>
          <NavBar handleChange={this.handleChange} />
          <br></br>
          <br></br>
          <Container>
            <Jumbotron data={user} />
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
