import React, { Component } from "react";
import NavBar from "./NavBar";
import { Card, Container, Image, Row, Col } from "react-bootstrap";
import coin_img from "../assets/quarter.gif";

const API = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=";
const key =
  "{e404419234ea0de2d6ecd4c1c17b081b8f8061edcec686541c9bee35f0e58094}";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      newsFeed: [],
      error: null
    };
  }

  componentDidMount() {
    fetch(API + key)
      .then(res => res.json())
      .then(data => {
        this.setState({ newsFeed: data, isLoaded: true });
      });
  }

  render() {
    const { isLoaded, newsFeed } = this.state;
    const data = JSON.parse(localStorage.getItem("user"));

    const styles = {
      jumbo: {
        backgroundImage: `url(${data.user.bg_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    };
    if (!isLoaded) {
      return (
        <div className="coin-loading">
          <img alt="coin" src={coin_img} />
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
                  <h5>Top Stories For You {data.user.name}</h5>
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
            <div className="news-feed">
              {newsFeed.Data.map(news => (
                <Card style={{ width: "18rem" }} key={news.id}>
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {news.categories}
                    </Card.Subtitle>
                    <Card.Img variant="top" src={news.imageurl} />
                    <Card.Text>{news.body}</Card.Text>
                    <Card.Link href={news.url}>Go to Site</Card.Link>
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

export default Home;
