import React, { Component } from 'react';
import { userIsNotAuthenticated } from "../../HOCs";
class Profile extends Component {
    constructor(props) {
        super(props);
        this.client = new Profile()
        this.state = {


        }

    }
    render() {
        return (
            <div>
                <div>username:{}</div>
                <div>displayName:{}</div>
                <div>about:{}</div>
            </div>

        )
    }



}




export default Profile;