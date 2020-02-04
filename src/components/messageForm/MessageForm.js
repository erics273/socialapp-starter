import React, { Component } from "react";
// import { userIsNotAuthenticated } from "../../HOCs";
import BlueService from '../../blueService';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';

// This file might be Depricated

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            messageError: "",
            formMessage: {
                message: ""
            },
        };
    }


    // submitMessage = (event) => {
    //     event.preventDefault();

    //     console.log(this.state.formMessage.text);

    //     this.client.postMessage(this.state.formMessage.text)
    //         .then((response) => {
    //             console.log(response)

    //             this.getMessages();

    //             this.setState({
    //                 messageError: "",
    //                 formMessage: {
    //                     text: "",
    //                 }
    //             });
    //         }).catch((error) => {
    //             console.log(error)
    //         });

    // }

    submitMessageStrap = (event) => {
        event.preventDefault();
        
        console.log(this.state.formMessage.message);

        this.client.postMessage(this.state.formMessage.message)
            .then((response) => {
                console.log(response)

                // likely get rid of
                // this.getMessages();

                this.props.refreshMessages();

                this.setState({
                    messageError: "",
                    formMessage: {
                        text: "",
                    }
                });
            }).catch((error) => {
                console.log(error)
            });
    }

    handleChangeMessageStrap = (event) => {
        console.log(event.target.id);
        console.log(event.target.value);
        let formMessage = this.state.formMessage;
        formMessage[event.target.id] = event.target.value;
        this.setState({formMessage});
    }

    // handleChangeMessage = (event) => {
    //     let formMessage = this.state.formMessage;
    //     formMessage[event.target.name] = event.target.value;
    //     console.log(formMessage[event.target.name]);
    //     this.setState({ formMessage });
    // }

    render() {


        return (
            <Container>

                <Form onSubmit={this.submitMessageStrap}>

                    <Form.Group controlId="message">
                        {/* <Form.Label>Ink</Form.Label> */}
                        <Form.Control onChange={this.handleChangeMessageStrap} placeholder="Ink" />

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Spill Ink
                    </Button>

                </Form>

            </Container>
        )
    }



}



export default MessageForm;