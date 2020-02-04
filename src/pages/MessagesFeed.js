import React from "react";
import DisplayMessage from '../components/displayMessage/displayMessage'
import BlueService from '../blueService';
import MessageForm from '../components/messageForm/MessageForm';
import { withAsyncAction } from "../HOCs";

import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

import Menu from "../components/menu/Menu";

class MessagesFeed extends React.Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            dataMessages: {},
            messageError: "",
            formMessage: {
                message: ""
            },
        };
    }

    // probably get rid of
    submitMessageStrap = (event) => {
        event.preventDefault();

        console.log(this.state.formMessage.message);

        this.client.postMessage(this.state.formMessage.message)
            .then((response) => {
                console.log(response)


                this.setState({
                    messageError: "",
                    formMessage: {
                        message: "",
                    }
                });

                this.getMultipleMessages();
            }).catch((error) => {
                console.log(error)
            });

        
    }

    // probably get rid of
    handleChangeMessageStrap = (event) => {
        // console.log(event.target.id);
        // console.log(event.target.value);
        let {formMessage} = this.state;
        formMessage[event.target.id] = event.target.value;
        this.setState({ formMessage });
    }

    refreshMessages = () => {
        this.getMultipleMessages()
    }


    getMultipleMessages = () => {
        return this.client.getMultipleMessages().then(result => {
            // console.log(result.data.messages)
            this.setState({
                dataMessages: result.data
            })
        })
    }

    postLike = (messageID) => {
        return this.client.postLike(messageID).then(result => {
            // console.log(result.data.likes)
            this.setState({
                data: result.data
            })
            this.getMultipleMessages()
        })
    }


    deleteLike = (likeID) => {
        // let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
        // console.log(tempLoginInfo.result.username)
        return this.client.deleteLike(likeID)
            .then((response) => {
                console.log(response)
                this.getMultipleMessages()
            }).catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        this.getMultipleMessages();
    }

    render() {
        if (this.state.dataMessages.messages) {

            let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
            let loggedInUsername = tempLoginInfo.result.username;
            let messageArray = [];
            let ButtonVarriant = "";
            let ButtonFunction;
            let ButtonFunctionParameter;
            let foundLike = false;
            for (let i = 0; i < this.state.dataMessages.messages.length; i++) {
                foundLike = false;
                for (let j = 0; j < this.state.dataMessages.messages[i].likes.length; j++) {

                    if (loggedInUsername === this.state.dataMessages.messages[i].likes[j].username) {
                        foundLike = true;
                        ButtonFunctionParameter = this.state.dataMessages.messages[i].likes[j].id
                    }
                }

                if (foundLike) {
                    ButtonFunction = this.deleteLike
                    ButtonVarriant = "primary"
                    // ButtonFunctionParameter set in above loop when foundLike was set as true
                }
                else {
                    ButtonFunction = this.postLike
                    ButtonVarriant = "outline-secondary"
                    ButtonFunctionParameter = this.state.dataMessages.messages[i].id
                }

                // console.log(this.props.user)
                if (this.props.user) {
                    if (this.props.user === this.state.dataMessages.messages[i].username) {
                        messageArray.push(
                            <DisplayMessage
                                key={this.state.dataMessages.messages[i].id}
                                id={this.state.dataMessages.messages[i].id}
                                message={this.state.dataMessages.messages[i].text}
                                username={this.state.dataMessages.messages[i].username}
                                date={this.state.dataMessages.messages[i].createdAt}
                                likes={this.state.dataMessages.messages[i].likes.length}
                                likeButtonFunction={ButtonFunction}
                                likeButtonVarriant={ButtonVarriant}
                                likeButtonFunctionParameter={ButtonFunctionParameter}
                            />

                        )
                    }
                }
                else (
                    messageArray.push(
                        <DisplayMessage
                            key={this.state.dataMessages.messages[i].id}
                            id={this.state.dataMessages.messages[i].id}
                            message={this.state.dataMessages.messages[i].text}
                            username={this.state.dataMessages.messages[i].username}
                            date={this.state.dataMessages.messages[i].createdAt}
                            likes={this.state.dataMessages.messages[i].likes.length}
                            likeButtonFunction={ButtonFunction}
                            likeButtonVarriant={ButtonVarriant}
                            likeButtonFunctionParameter={ButtonFunctionParameter}
                        />

                    )
                )

            }

            return (
                <>
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <Container>

                        <br />

                        {/* <Form onSubmit={this.submitMessageStrap}>

                            <Form.Group controlId="message">
                                {/* <Form.Label>Ink</Form.Label> */}
                                {/* <Form.Control value={this.state.formMessage.message} onChange={this.handleChangeMessageStrap} placeholder="Ink" /> */}

                            {/* </Form.Group>
                            <Button variant="primary" type="submit">
                                Spill Ink
                            </Button>           

                        </Form> */}

                        <MessageForm refreshMessages={this.getMultipleMessages}/>

                        <br />

                        {messageArray}

                    </Container>
                    {messageArray}
                </>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }

}



export default withAsyncAction("auth", "logout")(MessagesFeed);