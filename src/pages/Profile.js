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

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.client = new BlueService();
    this.state = {
      dataUser: {},


    }
  }

  getProfile() {
    console.log(this.props.match.params.username)
    return this.client.getUserName(this.props.match.params.username)
    .then(result => {

      console.log(result.data.user.username)
      console.log(result.data.user.displayName)
      console.log(result.data.user.about)


      this.setState({
        dataUser: result.data.user
      })

    })
  }

  deleteUser = () => {
    let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
    console.log(tempLoginInfo.result.username)
    return this.client.deleteUser(tempLoginInfo.result.username)
      .then((response) => {
        console.log(response)



      }).catch((error) => {
        console.log(error)
      });






  }

  componentDidMount() {
    this.getProfile();
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

            <ProfileDisplay
              username={this.state.dataUser.username}
              displayName={this.state.dataUser.displayName}
              about={this.state.dataUser.about}
            />
            <h2>Profile</h2>
            <button onClick={this.deleteUser}>Delete User</button>

          </Col>
          <Col>
            <MessageForm/>
            <Message/>
          </Col>

          </Row>
        </Container>
      </>

    );
  }



}

export default userIsAuthenticated(Profile);
