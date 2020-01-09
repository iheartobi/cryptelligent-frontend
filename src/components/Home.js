import React, { Component } from "react";
import { connect } from "react-redux";
import NewsList from "./NewsList";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import coin_img from "../assets/quarter.gif";
import Jumbotron from "../components/Jumbotron";
import { getUserInfo } from '../services/backend'

const API = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=";
const key = "{REACT_APP_NEWS_KEY}";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      newsFeed: [],
      error: null,
      value: " ", 
      user: {}
    };
  }

  async componentDidMount() {
    fetch(API + key)
      .then(res => res.json())
      .then(data => {
        this.setState({ newsFeed: data, loading: false });
        this.props.dispatch({ type: "ALL_NEWS", data });
      })
      if (localStorage.hasOwnProperty("user")) {
        let userId = JSON.parse(localStorage.getItem("user"));
       await getUserInfo(userId.user.id).then(data => {
          this.props.dispatch({ type: "GET_USER", data });
          this.setState({ user: data });
          console.log(this.state.user);
        });
      }
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  

  filterInput() {
    return this.state.newsFeed.Data.filter(
      news =>
        news.title.toLowerCase().includes(this.state.value) ||
        news.categories.toLowerCase().includes(this.state.value) ||
        news.body.toLowerCase().includes(this.state.value)
    );
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return (
        <div className="coin-loading">
          <img alt="coin" src={coin_img} />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar  handleChange={this.handleChange} />
          <br></br>
          <br></br>
          <Container>
            <Jumbotron data={this.state.user} />
            <NewsList news={this.filterInput()} />
          </Container>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return { news: state.data.news, user: state.user };
};

export default connect(mapStateToProps)(Home);
