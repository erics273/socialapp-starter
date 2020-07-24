import React, { Component } from "react"
import "./SignupForm.css"
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { withAsyncAction } from "../../HOCs";

//import our service
import SocialAppService from "../../socialAppService";

const styles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 350,
      },
    },
  });

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
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root + " signup"} noValidate autoComplete="off" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <div className="h1Element">
                    <h1>Sign up</h1>
                    </div>
                <TextField
                    required
                    id="standard-required"
                    name="username"
                    label="Username"
                    fullWidth="true"
                />
                <TextField
                    required
                    id="standard-required"
                    name="displayName"
                    label="Display Name"
                />
                <TextField
                    required
                    id="standard-required"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <br/>
                <div className="submitButton">
                <button className="submitButton" type="submit">
                    Sign Up
                </button>
                </div> 
            </form>
        )
    }
}

export default withStyles(styles)(withAsyncAction("auth", "login")(SignupForm))