import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { Container, Table, Spinner } from 'react-bootstrap';
import Jumbotron from '../components/Jumbotron';
import { getUserInfo } from '../services/backend';
import UserTable from '../components/UserTable';

const TRANS_API = 'https://whispering-hamlet-76141.herokuapp.com/transactions/';
const USER_API = 'https://whispering-hamlet-76141.herokuapp.com/users/';
class Profile extends Component {
  state = {
    user: {},
    loading: true
  };

  componentDidMount() {
    if (localStorage.hasOwnProperty('user')) {
      let userId = JSON.parse(localStorage.getItem('user'));
      getUserInfo(userId.user.id).then(data => {
        this.props.dispatch({ type: 'GET_USER', data });
        this.setState({ user: data, loading: false });
      });
    }
  }

  handleButtonClick = (e, props) => {
    console.log(this.props);
    if (this.state.user.coins.filter(coin => coin.id === props.id)) {
      const newCoinArr = this.props.user.coins.filter(coin => {
        return coin.id !== props.id;
      });
      const newCoinBank = this.state.user.coinbank + props.price;
      const cId = props.id;
      const uId = this.state.user.id;
      const coinBank = { coinbank: this.state.user.coinbank + props.price };

      const removeTrans = { user_id: uId, coin_id: cId };
      this.setState(state => ({
        user: {
          ...state.user,
          coinbank: newCoinBank,
          coins: newCoinArr
        }
      }));

      console.log(props.id);
      console.log(this.state.user.coins);

      fetch(`${TRANS_API}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(removeTrans)
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
        .then(data => {
          console.log(data.coinbank);
          this.setState(state => ({
            user: {
              ...state.user,
              coinbank: data.coinbank,
              coins: data.coins
            }
          }));
        });
      console.log(this.state.user);
    }
  };

  render() {
    const { loading, user } = this.state;

    const userTable = (
      <Table
        {...this.state.user.coins}
        className="user-table"
        striped
        bordered
        hover
      >
        <UserTable
          handleButtonClick={this.handleButtonClick}
          data={user.coins}
        />
      </Table>
    );
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
          <NavBar />
          <br></br>
          <br></br>
          <Container>
            <Jumbotron data={user} />
            {userTable}
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user.user, coins: state.data.coins };
};

export default connect(mapStateToProps)(Profile);
