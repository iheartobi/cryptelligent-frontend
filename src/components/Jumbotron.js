import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ToolTip from "./ToolTip";

class Jumbotron extends Component {
  render() {
    const value = this.props.data.coinbank;
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
          <Col xs={6} md={4}>
            <center>
              <Image
                src={this.props.data.img_url}
                height="250px"
                width="150px"
                alt="profile-photo"
                roundedCircle
                thumbnail
              />
            </center>
            <center>
              <br></br>

              <h5> Welcome, {this.props.data.name}</h5>
            </center>
          </Col>
          <Col xs={6} md={4}>
            <br></br>
            <br></br>
            <center>
              {" "}
              <strong>
                {" "}
                <h2>Earnings:</h2>{" "}
              </strong>
              <br></br>
              <h1 className="earning-amount">
                $ {this.props.data.coinbank}
              </h1>{" "}
            </center>
          </Col>
          <Col xs={6} md={3}>
            <center>
              <CircularProgressbar
                value={value}
                minValue={0}
                maxValue={value / 10}
                text={`${value / 10} %`}
                styles={{
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `rgba(255, 255, 255, ${value / 1000})`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",
                    // Customize transition animation
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    // Rotate the path
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center"
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    // '#d6d6d6'
                    stroke: "red",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "round",
                    // Rotate the trail
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center"
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: "white",
                    // Text size
                    fontSize: "18px"
                  },
                  // Customize background - only used when the `background` prop is true
                  background: {
                    fill: "#3e98c7"
                  }
                }}
              />
            </center>
            <center>
              <h5>{"Percentage"}</h5>
            </center>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Jumbotron;
