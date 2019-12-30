import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Container, Row, Image, Col, Table } from "react-bootstrap";
import {Nav} from 'react-bootstrap'


class Profile extends Component {
  
  handleClick = (id, e) => {
    e.preventDefault();
    console.log(e.target, id);
    
  };

  render() {
    const data = JSON.parse(localStorage.getItem("user"));
  
    const styles = {
      jumbo: {
        backgroundImage: `url(${data.user.bg_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    };
    const userTrans = data.user.coins.map((coin, index) => {
      const { id, price, name, created_at } = coin;
      return (
        <tr onClick={(e) => this.handleClick(id, e)} key={id}>
          <td>{id}</td>
          <td>{created_at}</td>
          <td>{name}</td>
          <td>{price}</td>
        </tr>
      );
    });

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
          </div>
        </Container>
      </div>
    );

    const userTable = (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Date</th>
              <th>Coin Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{
            data.user.coins.length > 0 ? <>{userTrans}</> :
           <center>
             <h3>{"You Don't Have any Transactions Yet!"}</h3>
             <Nav.Link href="/market">{"GET COINS NOW"}</Nav.Link>
           </center>  
             }
            
          </tbody>
        </Table>
      </Container>
    );

    
      return (
        <div>
          <NavBar />
          <br></br>
          {userPhoto}
          <br></br>
          {userTable}
        </div>
      );
    
  }
}

const mapStateToProps = state => {
  return { user: state.user, coins: state.data.coins };
};

export default connect(mapStateToProps)(Profile);
