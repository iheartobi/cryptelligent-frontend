import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Container, Row, Image, Col, Table } from "react-bootstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, coinbank, bg_url, img_url, teams } = this.props.user.user.user;

    const styles = {
      jumbo: {
        backgroundImage: `url(${bg_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    };

    const userTeams = (
        <div>
            {/* {this.props.user.map(u =>  )} */}
        </div>
    )

    const userPhoto = (
      <div className="photo-container">
        <Container>
          <div className="jumbotron" style={styles.jumbo}>
            <Row>
              <Col xs={6} md={3}>
                <center>
                  <Image
                    src={img_url}
                    height="200px"
                    width="150px"
                    alt="profile-photo"
                    roundedCircle
                    thumbnail
                  />
                </center>
                <center>
                  <h5>Welcome Back, {name}</h5>
                </center>
              </Col>
              <Col xs={6} md={5}>
                <br></br>
                <br></br>
                <center>
                  {" "}
                  <strong>
                    {" "}
                    <h3>Coin Bank:</h3>{" "}
                  </strong>
                  <br></br>
                  <h1>{coinbank}</h1>{" "}
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

    const teamStats = (
      <div>
        <Container>
          <Table  striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>W-L-T</th>
                <th>PF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
    return (
      <div>
        <NavBar />
        <br></br>
        {userPhoto}
        <br></br>
        <br></br>
        {teamStats}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Profile);
