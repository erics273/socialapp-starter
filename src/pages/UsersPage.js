import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService"
import ProfileDisplay from "../components/profileDisplay/ProfileDisplay"
import Message from "../components/message/message"
import MessageForm from "../components/messageForm/MessageForm";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.client = new BlueService();
    this.state = {
      dataUsers: {},


    }
  }

  getUsers(users) {
    return this.client.getUsers(users).then(result => {
        this.setState({
            data: result.data
        })
    })
}

getMultipleUsers() {
  return this.client.getMultipleUsers().then(result => {
      console.log()
  })
}
  render() {
    let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
    console.log(tempLoginInfo);
    return (

      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Container>
          <Row>
            <Col>


             
            </Col>
            <Col>
              
          
          </Col>
          </Row>
        </Container>
      </>

    );
  }



}

export default userIsAuthenticated(Profile);
