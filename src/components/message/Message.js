import React, { Component } from 'react';

//import our service
import SocialAppService from "../../socialAppService";

class Message extends Component {

    constructor(props) {
        super(props)
        this.client = new SocialAppService;
    }
    
    
}

export default Message