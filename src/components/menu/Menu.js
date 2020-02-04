import React from "react";
import { Redirect } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../HOCs";

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Menu extends React.Component {

  constructor(props) {
    super(props);
    // this.client = new BlueService();
    this.state = {
      redirect: false,
      // dataUsers: []

    }
  }

  handleLogout = event => {
    this.props.logout();
    
    this.setState({
      redirect: true,
    })
    // return <Redirect to={"/"} />
  };

  render() {
    // new "menue"
    // console.log(this.props)
    let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
    if (this.state.redirect) {
            
      return (<Redirect to={"/"} />)
    } 
    if (tempLoginInfo.result) {
      let loggedInUsername = tempLoginInfo.result.username;

      return (
        <Navbar bg="primary" >
          <Navbar.Brand>Blue Ink</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="/message">Message</Nav.Link> */}
            <Nav.Link href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/profile/" + loggedInUsername}>Profile</Nav.Link>
            {/* <Nav.Link href="/registration">Registration</Nav.Link> */}
            {/* <Nav.Link href="/messageform">messageForm</Nav.Link> */}
            <Nav.Link href="/messagesfeed">Inks</Nav.Link>

            {/*  bellow line no longer needed */}
            {/* <Nav.Link href="/messagepage/1">MessagePage</Nav.Link> */}

            <Nav.Link href="/userspage">Users</Nav.Link>

            {/* <Nav.Link href="/userform">Update User</Nav.Link> */}

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
        <Nav.Link href={"/"}>Home</Nav.Link>


          {/* <Nav.Link href="/userform">Update User</Nav.Link> */}

          {/* <Nav.Link href="/registrationpage">Registration Page</Nav.Link> */}


          {/* <Button onClick={this.handleLogout}>Logout</Button> */}
        </Nav>

      </Navbar>
      )
    }


 

   


  }
}

export default withAsyncAction("auth", "logout")(Menu);
