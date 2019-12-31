import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "../src/pages/Profile";
import history from "../src/services/history";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./components/Home";
import Market from "./components/Market";
import Coins from "./components/Coins";
import Transactions from "./components/Transactions";
import Sell from "./components/Sell";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/market" render={() => <Market />} />
          <Route exact path="/coins" render={() => <Coins />} />
          <Route exact path="/sell-coin" render={() => <Sell />} />
          <Route exact path="/transactions" render={() => <Transactions />} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
