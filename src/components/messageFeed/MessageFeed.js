import React, { Component } from 'react';
import Message from '../message/Message'
import SocialAppService from "../../socialAppService";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

class MessageFeed extends Component {

    constructor(props) {
        super(props)
        this.client = new SocialAppService;
        this.state = {
            messageData: []
        }
    }

    getMessageList() {
        return this.client.getMessagesList(25).then(result => {
            this.setState({
                messageData: result.data.messages
            })
        })
    }

    componentDidMount() {
        this.getMessageList()
    }

    render() {
        const { classes } = this.props;
        
        let messages = this.state.messageData.map((message) => {
            return (
                <React.Fragment key={message.id}>
                    <Message
                        username={message.username}
                        text={message.text}
                        likes={message.likes}
                    />
                    <Divider variant="inset" component="li" />
                </React.Fragment>)
        })
        return (
            <div>
                <List className={classes.root}>
                    {messages}
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(MessageFeed)
