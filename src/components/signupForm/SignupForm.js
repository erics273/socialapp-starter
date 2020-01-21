import React, { Component } from "react"
import "./SignupForm.css"
import TextField from '@material-ui/core/TextField';

//import our service
import SocialAppService from "../../socialAppService";

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.client = new SocialAppService();
        this.state = {
            formData: {
                username: "",
                displayName: "",
                password: ""
            }
        }
    }

    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        return this.client.createNewUser(this.state.formData)
    }

    render() {
        return (
            <form className='signup' onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <TextField
                    required
                    className="outlined-required"
                    name="username"
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    required
                    className="outlined-required"
                    name="displayName"
                    label="Display Name"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default SignupForm