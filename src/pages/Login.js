import { Component } from "react";
import React from "react";
import { getAuthToken } from "../services/backend";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../assets/crypto-currency-3130381_1920.jpg";
import history from "../services/history";

const styles = {
  backgroundContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // width: `calc(100vw + 48px)`,
    margin: -24,
    height: 900
  }
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loading: false
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleLogin = event => {
  //   event.preventDefault();
  //   getAuthToken({
  //     username: this.state.username,
  //     password: this.state.password
  //   })
  // };

  handleLogin = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const values = {
      username: this.state.username,
      password: this.state.password
    };
    getAuthToken(values)
      .then(data => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          localStorage.setItem("userId", data.user.id);
          // getUserInfo(data.user.id);
          this.setState({ loading: false });
          this.setState({ user: data });
          this.props.dispatch({ type: "LOGIN_USER", data });
          history.push("/profile");
          console.log(data);
        } else {
          alert("Incorrect Username or Password");
          history.push("/login");
          this.setState({ loading: false });
        }
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      })
      ;
  };
  render() {
    const loginForm = (
      <div className="login-form">
        <Form onSubmit={this.handleLogin}>
          <Form.Group controlId="formGroupUserName">
            <Form.Control
              onChange={this.handleChange}
              name="username"
              type="text"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
        <div className="login-link">
          <h4>
            <Link to="/signUp">Don't Have an Account? Signup</Link>
          </h4>
        </div>
      </div>
    );

    return (
      <div style={styles.backgroundContainer}>
        <div>{loginForm}</div>;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, coin: state.data.coin, coins: state.data.coins };
};

export default connect(mapStateToProps)(Login);
