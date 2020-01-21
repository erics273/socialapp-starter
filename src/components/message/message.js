import React from "react";
// import { Link } from "react-router-dom";
// import { userIsNotAuthenticated } from "../../HOCs";
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

    componentDidMount() {
        this.getNewMessage();
    }

    render() {
        if (this.state.data.message) {
            return (
                <div>
                    <div>
                        message: {this.state.data.message.text}
                    </div>
                    <div>
                        username: {this.state.data.message.username}
                    </div>
                    <div>
                        date: {this.state.data.message.createdAt}
                    </div>
                </div>
            )} 
        else {
            return (
                <div>
                    
                </div>
            )}

        // return (
        //     <div>
        //         <div>
        //             Name: {}
        //         </div>
        //         <div>
        //             content: {}
        //         </div>
        //         <div>
        //             date: {}
        //         </div>
        //     </div>
        // );
    }

}



export default Message;