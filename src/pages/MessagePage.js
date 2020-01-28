import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService";
import DisplayMessage from "../components/displayMessage/displayMessage";
import DisplayLike from "../components/displayLike/DisplayLike";

import 'bootstrap/dist/css/bootstrap.min.css';


class MessagePage extends React.Component {

    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            data: {},


        }
    }

    // should be like this.props.messageID
    // want to pass via link
    getParticularMessage(messageID) {
        return this.client.gitMessageSpecific(messageID).then(result => {
            this.setState({
                data: result.data
            })
        })
    }

    componentDidMount() {
        this.getParticularMessage(this.props.match.params.messageID);
    }

   

    render() {
        console.log(this.state.data)
        if (this.state.data.message) {

            let likeArray = [];
            for(let i = 0; i < this.state.data.message.likes.length; i++){
                likeArray.push(
                    <DisplayLike
                    key={this.state.data.message.likes[i].id} 
                    username={this.state.data.message.likes[i].username}
                    date={this.state.data.message.likes[i].createdAt}
                    />
                )
            }

            return (
                <>
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <div>
                        MessagePage! {this.props.match.params.messageID}
                        <DisplayMessage
                            key={this.state.data.message.id}
                            message={this.state.data.message.text}
                            username={this.state.data.message.username}
                            data={this.state.data.message.createdAt}
                        />
                        {likeArray}
                    </div>
                </>
            );
        }
        return (
            <>
                test
            </>
        )
    }

}

export default userIsAuthenticated(MessagePage);