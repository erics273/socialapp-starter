import React, { Component } from "react"
import "./SignupForm.css"

class SignupForm extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
        <form>
            <input value="Username"/>
            <label>Display Name</label>
            <label>Password</label>
        </form>
        )
    }
}

export default SignupForm