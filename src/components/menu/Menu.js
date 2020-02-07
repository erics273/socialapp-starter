/*

ECS: I wold consider revisiting how you are redirecting after logout.
This functionality is already built in if you lever the HOC's. Look at the
code in the original starter

*/

import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../HOCs";

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from "react-router-bootstrap";
// import LinkContainer from "react-router-bootstrap/LinkContainer";


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

    // this.setState({
    //   redirect: true,
    // })
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
            {/* 
        
            ECS: you should be using <Link> here from react-router-dom to 
            naviagate links through the router and not make a new request
            reloading your app

            */}

            {/* 
            
            CG: I don't understand the completely what you are talking about 
            Link from "react-router-dom"
            and
            Nav.Link from "react-bootstrap/Nav"
            My understanding is that it has to do with React wanting to be a "single-page" App
            and that the Link does not issue a "reload" while maybe the Nav.Link does
            Want: to do investigation of how I would have known this
              -look at Nav.Link documentation 
              -maybe there is something under inpect that would make me see this
            
            Conclusion:
              -using Link I see that it does not refresh the page while Nav.Link does
              -what i wanted to use with "react-bootstrap" is 
                LinkContainer from "react-router-bootstrap"
            */}


            <ButtonToolbar>
            
              <LinkContainer to="/">
                <Button>Home</Button>
              </LinkContainer>

              <LinkContainer to="/messagesfeed">
                <Button>Inks</Button>
              </LinkContainer>
              
              <LinkContainer to="/userspage">
                <Button>Users</Button>
              </LinkContainer>

              <LinkContainer onClick={this.handleLogout} to="/">
                <Button>Logout</Button>
              </LinkContainer>
            </ButtonToolbar>


            {/* <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link> */}

            {/* before grading */}

            {/* <Nav.Link href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/profile/" + loggedInUsername}>Profile</Nav.Link>
            <Nav.Link href="/messagesfeed">Inks</Nav.Link>
            <Nav.Link href="/userspage">Users</Nav.Link>
            <Button onClick={this.handleLogout}>Logout</Button> */}

          </Nav>

        </Navbar>
      )
    }
    else {
      return (
        <Navbar bg="primary" >
          <Navbar.Brand>Blue Ink</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href={"/"}>Home</Nav.Link> */}
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>


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
