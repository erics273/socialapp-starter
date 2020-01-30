import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService"
import ProfileDisplay from "../components/profileDisplay/ProfileDisplay"
import Message from "../components/message/message"
import MessageForm from "../components/messageForm/MessageForm";
import UserForm from "../components/userForm/UserForm"
import { push } from 'connected-react-router'
import { Redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            dataUser: {},


        }
    }

    deleteUser = () => {
        let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
        console.log(tempLoginInfo.result.username)


        return this.client.deleteUser(tempLoginInfo.result.username)
            .then((response) => {
                console.log(response)
                localStorage.clear(tempLoginInfo.result.username);
                return <Redirect to={"/"}/>
            }).catch((error) => {
                console.log(error)
            });

    }


    render() {
        let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
        console.log(tempLoginInfo);
        return (

            <>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <Container>
                    <UserForm />
                    {/* <button onClick={this.deleteUser}>Delete User</button> */}
                    {/* <Nav.Link variant="primary" onSelect={this.deleteUser}></Nav.Link> */}
                    <br/>
                    <Button variant="primary" type="delete user" onClick={this.deleteUser}>
                        Delete User
                    </Button>
                </Container>

            </>

        );
    }



}


export default userIsAuthenticated(Profile);

