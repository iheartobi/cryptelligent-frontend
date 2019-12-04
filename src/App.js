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
import Draft from "./components/Draft";
import Coins from "./components/Coins";
import Transactions from "./components/Transactions";
import TeamCard from './components/TeamCard'

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
          <Route exact path="/draft" render={() => <Draft />} />
          <Route exact path="/coins" render={() => <Coins />} />
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
