import { Component } from "react";
import React from "react";
import { addNewUser } from "../services/backend";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import history from "../services/history";
import bg from "../assets/Top-5-Benefits-of-Business-Loans-that-can-Help-to-Expand-Your-Business-DY605074.jpg";

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

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      newName: "",
      newUsername: "",
      newEmail: "",
      newPassword: "",
      loading: false
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const values = {
      name: this.state.newName,
      username: this.state.newUsername,
      email: this.state.newEmail,
      password: this.state.newPassword
    };
    addNewUser(values)
      .then(data => {
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          localStorage.setItem("userId", data.user.id);
          localStorage.setItem("user", JSON.stringify(data));

          // getUserInfo(data.user.id);
          this.setState({ loading: false });
          this.setState({ user: data });
          this.props.dispatch({ type: "ADD_USER", data });
          history.push("/profile");
          console.log(data);
        } else {
          alert("Incorrect Username or Password");
          history.push("/");
          this.setState({ loading: false });
        }
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  render() {
    const signUpForm = (
      <div className="signUp-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupNewName">
            <Form.Control
              onChange={this.handleChange}
              name="newName"
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group controlId="formGroupNewUsername">
            <Form.Control
              onChange={this.handleChange}
              name="newUsername"
              type="text"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group controlId="formGroupNewEmail">
            <Form.Control
              onChange={this.handleChange}
              name="newEmail"
              type="text"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group controlId="formGroupNewPassword">
            <Form.Control
              onChange={this.handleChange}
              name="newPassword"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
        <div className="sign-up-link">
          <h4>
            <Link to="/login">Already Have an Account? Login</Link>
          </h4>
        </div>
      </div>
    );

    return (
      <div style={styles.backgroundContainer}>
       <div className="site-name">
         <center><h1> Cryptelligent </h1></center> 
          <h4> Stack Your Coins Intelligently</h4>
        </div>
        <br></br>
        <br></br>
        <div>{signUpForm}</div>;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user.user };
};

export default connect(mapStateToProps)(SignUp);
