import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService"


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
            console.log(result.data)
              this.setState({
            data: result.data
              })
        })
    }

    componentDidMount() {
        console.log(this.props.match.params.messageID)
        // this.getParticularMessage();
    }

    render(){
        // console.log(this.props.match.params.messageID);
        return(
            <>
                <Menu isAuthenticated={this.props.isAuthenticated} />
                <div>
                    MessagePage! {this.props.messageID}
                </div>
            </>
        );
    }

}

export default userIsAuthenticated(MessagePage);