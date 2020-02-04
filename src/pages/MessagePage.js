import React from "react";
import Menu from "../components/menu/Menu";
// import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService";
import DisplayMessage from "../components/displayMessage/displayMessage";
import DisplayLike from "../components/displayLike/DisplayLike";
import { withAsyncAction } from "../HOCs";

// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

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

    postLike = (messageID) => {
        return this.client.postLike(messageID).then(result => {
            console.log(result.data.likes)
            this.setState({
                data: result.data
            })
            this.getParticularMessage(this.props.match.params.messageID)
        })
    }


    deleteLike = (likeID) => {
        // let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
        // console.log(tempLoginInfo.result.username)
        return this.client.deleteLike(likeID)
            .then((response) => {
                console.log(response)
                this.getParticularMessage(this.props.match.params.messageID)
            }).catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        this.getParticularMessage(this.props.match.params.messageID);
    }



    render() {
        if (this.state.data.message) {

            let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
            
            let loggedInUsername = tempLoginInfo.result.username;

            let ButtonVarriant = "";
            let ButtonFunction;
            let ButtonFunctionParameter;
            let foundLike = false;

            let likeArray = [];
            for (let i = 0; i < this.state.data.message.likes.length; i++) {

                if (loggedInUsername === this.state.data.message.likes[i].username){
                    foundLike = true;
                    ButtonFunctionParameter = this.state.data.message.likes[i].id
                }

                

                likeArray.push(
                    <DisplayLike
                        likeInfo={this.state.data.message.likes[i]}
                        key={this.state.data.message.likes[i].id}
                    />
                )
            }

            if(foundLike){
                ButtonFunction = this.deleteLike
                ButtonVarriant = "primary"
                // ButtonFunctionParameter set in above loop when foundLike was set as true
            }
            else{
                ButtonFunction = this.postLike
                ButtonVarriant = "outline-secondary"
                ButtonFunctionParameter = this.state.data.message.id
            }

            return (
                <>
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                    <Container>
                        <br />
                        <DisplayMessage
                            key={this.state.data.message.id}
                            id={this.state.data.message.id}
                            message={this.state.data.message.text}
                            username={this.state.data.message.username}
                            data={this.state.data.message.createdAt}
                            likes={this.state.data.message.likes.length}
                            likeButtonFunction={ButtonFunction}
                            likeButtonVarriant={ButtonVarriant}
                            likeButtonFunctionParameter={ButtonFunctionParameter}
                        />

                        <Container>
                            {likeArray}
                        </Container>
                    </Container>
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

export default withAsyncAction("auth", "logout")(MessagePage);