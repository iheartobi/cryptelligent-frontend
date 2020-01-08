import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Container, Table } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { getUserInfo } from "../services/backend";
import UserTable from "../components/UserTable";

class Profile extends Component {
  state = {
   open: false,
    user: {},
    loading: true
  };
  // onOpenModal = () => {
  //   this.setState({ open: true });
  // };

  // onCloseModal = () => {
  //   this.setState({ open: false });
  // };
  

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
    const { loading, user, open } = this.state;

    const userTable = (
      <Table className="user-table" striped bordered hover>
        <UserTable open={open} onClick={this.props.onOpenModal} data={user.coins} />
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
