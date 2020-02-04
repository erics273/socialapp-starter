import React from "react";
import Menu from "../components/menu/Menu";
// import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService"
// import ProfileDisplay from "../components/profileDisplay/ProfileDisplay"
// import Message from "../components/message/message"
// import MessageForm from "../components/messageForm/MessageForm";
import { withAsyncAction } from "../HOCs";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
import Card from "react-bootstrap/Card";
class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.client = new BlueService();
    this.state = {
      dataUsers: []

    }
  }



  getMultipleUsers() {
    return this.client.getUsers().then(result => {
      // console.log(result.data.users)
      this.setState({
        dataUsers: result.data.users
      })
    })
  }

  componentDidMount() {
    this.getMultipleUsers();
  }



  render() {
    // let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
    // console.log(tempLoginInfo);

    let usersArray = [];
    for (let i = 0; i < this.state.dataUsers.length; i++) {
      // console.log(this.state.dataUsers[i].username)
      usersArray.push(
        <div key={i}>
         

          <Nav.Link href={"/profile/" + this.state.dataUsers[i].username}>{this.state.dataUsers[i].username}</Nav.Link>
        </div>



      )

    }




    return (
      <Card border="primary" >


        <>
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <Container>
            <Row>
              <Col>

              {usersArray}

              </Col>

            </Row>
          </Container>
        </>
      </Card>

    );
  }



}

export default withAsyncAction("auth", "logout")(Profile);
