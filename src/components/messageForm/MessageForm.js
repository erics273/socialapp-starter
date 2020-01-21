import React, { Component } from "react";
// import { userIsNotAuthenticated } from "../../HOCs";
import BlueService from '../../blueService';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            messageError: "",
            formMessage: {
                text: ""
            },
        };
    }


    submitMessage = (event) => {
        event.preventDefault();

        console.log(this.state.formMessage.text);

        this.client.postMessage(this.state.formMessage.text)
            .then((response) => {
                console.log(response)

                this.getMessages();

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

    handleChangeMessage = (event) => {
        let formMessage = this.state.formMessage;
        formMessage[event.target.name] = event.target.value;
        console.log(formMessage[event.target.name]);
        this.setState({ formMessage });
    }

    render() {
        
        
        return (
            <div>
                <form onSubmit={this.submitMessage}>

                    <div>
                        <label>Ink:</label>
                        <input
                            onChange={this.handleChangeMessage}
                            type="text"
                            name="text"
                            value={this.state.formMessage.text}
                        />
                    </div>
                    <button>Spill Ink</button>
                    <div>
                        {this.state.messageError}
                    </div>
                </form>
            </div>
        )
    }



}



export default MessageForm;