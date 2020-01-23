import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <h1>Kwitter</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/message">Message</Link>
            {/* temp fo profile */}
            <Link to="/profile">Profile</Link>
            {/* temp for registration */}
            <Link to="/registration">Registration</Link>
            {/* temp for message */}
            {/* <Link to="/message">message</Link> */}
            {/* temp for messageForm */}
            <Link to="/messageform">Message Form</Link>
            <Link to="/messagepage/1">MessagePage</Link>

            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
