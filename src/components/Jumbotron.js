import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

class Jumbotron extends Component {
  render() {
    console.log(this.props.data)
    const styles = {
      jumbo: {
        backgroundImage: `url(${this.props.data.bg_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    };

    return (
      <div className="jumbotron" style={styles.jumbo}>
        <Row>
          <Col xs={6} md={3}>
            <center>
              <Image
                src={this.props.data.img_url}
                height="200px"
                width="150px"
                alt="profile-photo"
                roundedCircle
                thumbnail
              />
            </center>
            <center>
              <h5> Welcome, {this.props.data.name}</h5>
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
              <h1>$ {this.props.data.coinbank}</h1>{" "}
            </center>
          </Col>
          <Col>{"Percentage Chart Goes Here"}</Col>
        </Row>
      </div>
    );
  }
}
export default Jumbotron;
