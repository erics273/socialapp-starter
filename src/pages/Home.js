import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../HOCs";

import Container from 'react-bootstrap/Container'

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <Container>
          <br/>
          <h2>Come and Spill Some Ink</h2>
          <LoginForm />
          <br />
        </Container>

      </>
        );
      }
    }
    
    export default userIsNotAuthenticated(Home);
