import React, { Component } from "react"
import "./SignupForm.css"
import TextField from '@material-ui/core/TextField';
import { withAsyncAction } from "../../HOCs";

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
        this.setState({ formData });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.client.createNewUser(this.state.formData).then(() =>
            this.props.login({
                username: this.state.formData.username,
                password: this.state.formData.password
            })
        )

        //clear fields for registration && error message
        // this.setState(
        //     { formData: {
        //     username: "",
        //     displayName: "",
        //     password: ""
        // }})
    }

    componentWillUnmount () {
        
    }

    render() {
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
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
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default withAsyncAction("auth", "login")(SignupForm)