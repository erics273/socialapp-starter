import React, { Component } from 'react';
import "./RegistrationForm.css";
import blueService from "../../blueService";



class Registration extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        // this.client = new blueService();
        this.state = {
            submitted: false,
            formData: {
                firstName: '',
                displayName: '',
                password: '' 
            }

        }
        
    }


    handleChange = (event) => {
        const formData = {...this.state.formData};
        formData[event.target.name] = event.target.value;
    
        this.setState({ formData });
    }





    handleSubmit = (event) => {
        event.preventDefault();
        console.log()
        this.setState({
            submitted: true
        });
    }








    render() {
        return (
            <div className="Registration">

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor=""> First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />

                    </div>

                    <div>
                        <label htmlFor=""> Password</label>
                        <input
                            type="text"
                            name="password"
                            value={this.state.formData.password}
                            onChange={this.handleChange}
                        />
                    </div>


                    <div>
                        <label htmlFor=""> Displayname </label>
                        <input
                            type="text"
                            name="displayName"
                            value={this.state.formData.displayName}
                            onChange={this.handleChange}
                        />
                    </div>




                    <button>Submit Registration</button>
                </form>
                
            </div>


        );


    }


    
}











export default Registration;