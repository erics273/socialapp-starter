import React from "react";
import DisplayMessage from '../displayMessage/displayMessage'
import BlueService from '../../blueService';

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
        // fixing logout
        let tempLoginInfo = JSON.parse(localStorage.getItem("login"));

        if (this.state.dataMessages.messages && tempLoginInfo.result) {

            // let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
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
                if(this.props.user){
                    if(this.props.user === this.state.dataMessages.messages[i].username){
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
                else(
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



export default Message;