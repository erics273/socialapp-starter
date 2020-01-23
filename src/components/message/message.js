import React from "react";
import DisplayMessage from '../displayMessage/displayMessage'
import BlueService from '../../blueService';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            data: {},
        };
    }

    getNewMessage() {
        return this.client.getMessage().then(result => {
            console.log(result.data)
            this.setState({
                data: result.data
            })
        })
    }

    getMultipleMessages() {
        return this.client.getMultipleMessages().then(result => {
            console.log(result.data.messages)
            this.setState({
                data: result.data
            })
        })
    }


    componentDidMount() {
        this.getMultipleMessages();
    }

    render() {
        if (this.state.data.messages) {
            return (
                <div>
                    {this.state.data.messages.map((message)=>{
                        return <DisplayMessage
                            key={message.id}
                            message={message.text}
                            username={message.username}
                            data={message.createdAt}
                        />
                    })}
                </div>
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



export default Message;