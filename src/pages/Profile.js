import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Container, Row, Image, Col } from "react-bootstrap";
import coin_img from '../assets/quarter.gif';

class Profile extends Component {

  state = {
    loading: true
  }

  handleClick = (id, e) => {
    e.preventDefault();
    console.log(e.target, id);
  };


  render() {
    const {loading} = this.state;
    const data = JSON.parse(localStorage.getItem("user"));
    const styles = {
      jumbo: {
        backgroundImage: `url(${data.user.bg_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    };

    const userPhoto = (
      <div className="photo-container">
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
                  <h5>Welcome Back, {data.user.name}</h5>
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
        </Container>
      </div>
    );

    if (!loading){
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
        {userPhoto}
        <br></br>
      </div>
    );
  }
}
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Profile);
