import React, { Component } from "react";
// import { userIsNotAuthenticated } from "../../HOCs";
import BlueService from '../../blueService';
import { Redirect } from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            redirect: false,
            messageError: "",
            formUpdate: {
                about: "",
                password: "",
                name: ""
            },
        };
    }


    submitMessage = (event) => {
        event.preventDefault();

        console.log(this.state.formUpdate.text);

        this.client.updateUser(this.state.formUpdate.text)
            .then((response) => {
                console.log(response)

                // this.getMessages();

                this.setState({
                    messageError: "",
                    formUpdate: {
                        text: "",
                    }
                });
            }).catch((error) => {
                console.log(error)
            });

    }

    submitMessageStrap = (event) => {
        event.preventDefault();

        // console.log(this.state.formUpdate.about);
        // console.log(this.state.formUpdate.name);
        // console.log(this.state.formUpdate.password);

        this.client.updateUser(this.state.formUpdate.about, this.state.formUpdate.name, this.state.formUpdate.password)
            .then((response) => {
                console.log(response)

                // let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
                // let loggedInUsername = tempLoginInfo.result.username;


                console.log("hey i just did this thin%^&*")
                this.setState({
                    redirect: true,
                })
                // render() {
                // return <Redirect to={"/profile/" + loggedInUsername} />
                // }
                // console.log("this shoujld not hit@#@$@$@")

            })
            .catch((error) => {
                console.log(error)
            });
    }

    handleChangeMessageStrap = (event) => {
        // console.log(event.target.id);
        // console.log(event.target.value);
        let formUpdate = this.state.formUpdate;
        formUpdate[event.target.id] = event.target.value;
        this.setState({ formUpdate });
    }

    handleChangeMessage = (event) => {
        let formUpdate = this.state.formUpdate;
        formUpdate[event.target.name] = event.target.value;
        // console.log(formUpdate[event.target.name]);
        this.setState({ formUpdate });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={"/"} />)
        }

        return (
            <Container>

                <Form onSubmit={this.submitMessageStrap}>

                    <Form.Group controlId="about">
                        <Form.Label>Status</Form.Label>
                        <Form.Control onChange={this.handleChangeMessageStrap} placeholder="Ink" />
                        <Form.Text className="text-muted">
                            Current Ink
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control onChange={this.handleChangeMessageStrap} placeholder="Ink" />
                        <Form.Text className="text-muted">
                            Spill Some Ink
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" onChange={this.handleChangeMessageStrap} placeholder="Ink" />
                        <Form.Text className="text-muted">
                            New Ink
                            </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>

            </Container>
        )
    }



}



export default UserForm;