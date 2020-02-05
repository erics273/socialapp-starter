import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../HOCs";
import "./LoginForm.css";

import Nav from 'react-bootstrap/Nav';

class LoginForm extends React.Component {
  state = {
    
    username: "",
    password: "",
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>

          {/* 
          
          ECS: you should be binding the value from state to the appropriate input

          e.g.
          value={this.state.username}

          */}
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <br/>
          <button type="submit" disabled={loading}>
            Login
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        <br/>
        {/* 
        
        ECS: you should be using <Link> here from react-router-dom to 
        naviagate links through the router and not make a new request
        reloading your app

        */}
        <Nav.Link href={"/registrationpage"}>New Inker</Nav.Link>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
