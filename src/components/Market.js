import React, { Component } from "react";
import { connect } from "react-redux";
import { getCoins } from "../services/backend";
import NavBar from "./NavBar";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import coin_img from "../assets/quarter.gif";

class Market extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      loading: true,
      currentPage: 1,
      coinsPerPage: 25
    };
  }
  componentDidMount() {
    getCoins().then(data => {
      this.setState({ coins: data, loading: false });
      this.props.dispatch({ type: "GET_COINS", data });
      console.log(data);
    });
  }

  render() {
    const { loading, coins } = this.state;
    const data = JSON.parse(localStorage.getItem("user"));
    const styles = {
        jumbo: {
          backgroundImage: `url(${data.user.bg_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }
      };
    if (loading) {
      return (
        <div className="coin-loading">
            <h4>Loading Most Recent Market Data</h4>
          <img alt="coin" src={coin_img} />
          <h5>This may take a minute.....</h5>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <br></br>
          <br></br>
          <Container>
          <div className="jumbotron" style={styles.jumbo}>
            <Row>
              <Col xs={6} md={3}>
                <center>
                  <Image
                    src={data.user.img_url}
                    height="200px"
                    width="150px"
                    alt="profile-photo"
                    roundedCircle
                    thumbnail
                  />
                </center>
                <center>
                  <h5>{data.user.name}, Based on Your Buying Trends</h5>
                </center>
              </Col>
              <Col xs={6} md={5}>
                <br></br>
                <br></br>
                <center>
                  {" "}
                  <strong>
                    {" "}
                    <h2>Earnings:</h2>{" "}
                  </strong>
                  <br></br>
                  <h1>{data.user.coinbank}</h1>{" "}
                </center>
              </Col>
            </Row>
            <Row>
              <></>
            </Row>
          </div>
            <div className="coin-feed">
              {coins.map(coin => (
                <Card
                  variant="dark"
                  key={coin.id}
                  style={{ width: "16rem", height: "32rem" }}
                >
                  <br></br>
                  <img
                    height="60px"
                    width="60px"
                    alt="coin"
                    src={coin.logo_url}
                  />
                  <Card.Body>
                    <Card.Title>{coin.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {coin.symbol}
                      {"   "} Rank:{coin.rank}
                    </Card.Subtitle>
                    <Card.Text>
                      Market Cap: {coin.market_cap}
                      <hr></hr>
                      Price Date: {coin.price_date}
                      <hr></hr>
                      Maximum Supply: {coin.max_supply}
                      <hr></hr>
                      Circulating Supply: {coin.circulating_supply}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </div>
      );
    }
  }
}

// name: c['name'],
// currency: c['currency'],
// symbol: c['symbol'],
// logo_url: c['logo_url'],
// price: c['price'],
// rank: c['rank'],
// price_date: c['price_date'],
// market_cap: c['market_cap'],
// circulating_supply: c['circulating_supply'],
// max_supply: c['max_supply'],
// high: c['high'],
// high_timestamp: c['high_timestamp']

const mapStateToProps = state => {
  return { coins: state.data.coins };
};
export default connect(mapStateToProps)(Market);
