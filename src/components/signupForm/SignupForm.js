import React, { Component } from "react"
import "./SignupForm.css"
import TextField from '@material-ui/core/TextField';

class SignupForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form>
                <TextField
          required
          id="outlined-required"
          label="Username"
          variant="outlined"
        />
                <TextField
          required
          id="outlined-required"
          label="Display Name"
          variant="outlined"
        />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </form>
        )
    }
}

export default SignupForm