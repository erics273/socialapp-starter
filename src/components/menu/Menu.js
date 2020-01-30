import React from "react";
import { Redirect } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../HOCs";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Menu extends React.Component {

  handleLogout = event => {
    this.props.logout();
    return <Redirect to={"/"} />
  };

  render() {
    // new "menue"
    let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
    if (tempLoginInfo.result) {
      let loggedInUsername = tempLoginInfo.result.username;

      return (
        <Navbar bg="primary" >
          <Navbar.Brand>Blue Ink</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="/message">Message</Nav.Link> */}
            <Nav.Link href={"/profile/" + loggedInUsername}>Profile</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
            {/* <Nav.Link href="/messageform">messageForm</Nav.Link> */}
            <Nav.Link href="/messagesfeed">Inks</Nav.Link>

            {/*  bellow line no longer needed */}
            {/* <Nav.Link href="/messagepage/1">MessagePage</Nav.Link> */}

            <Nav.Link href="/userspage">Users</Nav.Link>

            <Nav.Link href="/userform">Update User</Nav.Link>

            <Button onClick={this.handleLogout}>Logout</Button>
          </Nav>

        </Navbar>
      )
    }
    else {
      return (
        <Navbar bg="primary" >
        <Navbar.Brand>Blue Ink</Navbar.Brand>
        <Nav className="mr-auto">



        </Nav>

      </Navbar>
      )
    }


    // return (
    //   <Navbar bg="primary" >
    //     <Navbar.Brand>Blue Ink</Navbar.Brand>
    //     <Nav className="mr-auto">
    //       {/* <Nav.Link href="/message">Message</Nav.Link> */}
    //       {/* <Nav.Link href={"/profile/" + loggedInUsername}>Profile</Nav.Link> */}
    //       <Nav.Link href="/registration">Registration</Nav.Link>
    //       {/* <Nav.Link href="/messageform">messageForm</Nav.Link> */}
    //       <Nav.Link href="/messagesfeed">Inks</Nav.Link>

    //       {/*  bellow line no longer needed */}
    //       {/* <Nav.Link href="/messagepage/1">MessagePage</Nav.Link> */}

    //       <Nav.Link href="/userspage">Users</Nav.Link>

    //       <Nav.Link href="/userform">Update User</Nav.Link>

    //       <Button onClick={this.handleLogout}>Logout</Button>
    //     </Nav>

    //   </Navbar>
    // )

    // old "menue"
    // return (
    //   <div id="menu">
    //     <h1>Kwitter</h1>
    //     {this.props.isAuthenticated && (
    //       <div id="menu-links">
    //         <Link to="/message">Message</Link>
    //         {/* temp fo profile */}
    //         <Link to="/profile">Profile</Link>
    //         {/* temp for registration */}
    //         <Link to="/registration">Registration</Link>
    //         {/* temp for message */}
    //         {/* <Link to="/message">message</Link> */}
    //         {/* temp for messageForm */}
    //         <Link to="/messageform">Message Form</Link>
    //         <Link to="/messagepage/1">MessagePage</Link>

    //         <Link to="/" onClick={this.handleLogout}>
    //           Logout
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    // );


  }
}

export default withAsyncAction("auth", "logout")(Menu);
