import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Container, Table } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { getUserInfo } from "../services/backend";
import UserTable from "../components/UserTable";

const TRANS_API = "http://localhost:3000/transactions/";
const USER_API = "http://localhost:3000/users/";
class Profile extends Component {
  state = {
    user: {},
    loading: true
  };

  handleButtonClick = (e, props) => {
    e.preventDefault();
    if (this.props.user.coins.filter(coin => coin.id === props.id)) {
      console.log(props.price);
      console.log(this.state.user.id);
      const cId = props.id;
      const uId = this.state.user.id;
      const removeTrans = { user_id: uId, coin_id: cId };
      const newCoinBank = {
        coinbank: this.state.user.coinbank + props.price
      };
      fetch(`${TRANS_API}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
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
        });

      fetch(`${USER_API}${uId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCoinBank)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            user: this.state.user,
            ...this.state.user.coinbank,
            data
          });
        });
    }
  };

  async componentDidMount() {
    if (localStorage.hasOwnProperty("user")) {
      let userId = JSON.parse(localStorage.getItem("user"));
      await getUserInfo(userId.user.id).then(data => {
        this.props.dispatch({ type: "GET_USER", data });
        this.setState({ user: data, loading: false });
        console.log(this.state.user);
      });
    }
  }

  render() {
    const { loading, user } = this.state;

    const userTable = (
      <Table className="user-table" striped bordered hover>
        <UserTable
          handleButtonClick={this.handleButtonClick}
          data={user.coins}
        />
      </Table>
    );
    if (loading) {
      return (
        <div className="coin-loading">
          <h4>Loading Profile...</h4>
          <br></br>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar/>
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
