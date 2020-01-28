import React from "react";
import DisplayMessage from '../displayMessage/displayMessage'
import DisplayLike from '../displayLike/DisplayLike';
import BlueService from '../../blueService';

import Accordion from 'react-bootstrap/Accordion'

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            dataMessages: {},
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
                dataMessages: result.data
            })
        })
    }

    postLikes() {
        return this.client.postLikes().then(result => {
            console.log(result.data.likes)
            this.setState({
                data: result.data
            })
        })
    }

    componentDidMount() {
        this.getMultipleMessages();
    }

    render() {
        if (this.state.dataMessages.messages) {

            let messageArray = [];
            let tempLikesArray = []
            for (let i = 0; i < this.state.dataMessages.messages.length; i++) {
                tempLikesArray = [];
                for (let j = 0; j < this.state.dataMessages.messages[i].likes.length; j++) {
                    tempLikesArray.push(
                        <DisplayLike
                            key={this.state.dataMessages.messages[i].likes[j].id}
                            username={this.state.dataMessages.messages[i].likes[j].username}
                            date={this.state.dataMessages.messages[i].likes[j].createdAt}
                        />
                    );
                }

                messageArray.push(
                    <DisplayMessage
                        key={this.state.dataMessages.messages[i].id}
                        message={this.state.dataMessages.messages[i].text}
                        username={this.state.dataMessages.messages[i].username}
                        date={this.state.dataMessages.messages[i].createdAt}
                        likes={this.state.dataMessages.messages[i].likes.length}
                        likeArray={tempLikesArray}
                    />
                )
            }

            return (
                <Accordion >
                    {/* {this.state.dataMessages.messages.map((message)=>{
                        return <DisplayMessage
                            key={message.id}
                            message={message.text}
                            username={message.username}
                            data={message.createdAt}
                            likes={message.likes.length}
                        />
                    })} */}
                    {messageArray}
                </Accordion>
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