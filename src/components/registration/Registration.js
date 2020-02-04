import React, { Component } from 'react';
import "./RegistrationForm.css";
import blueService from "../../blueService";
import Button from 'react-bootstrap/Button';

import { Redirect } from "react-router-dom";    

class Registration extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new blueService();
        this.state = {
            redirect: false,
            error: false,
            formData: {
                userName: '',
                displayName: '',
                password: ''
            }

        }

    }



    submitNewUser = (event) => {
        event.preventDefault();

        console.log(this.state.formData.userName);
        console.log(this.state.formData.displayName);
        console.log(this.state.formData.password);

        this.client.postNewUser(this.state.formData.userName,this.state.formData.displayName,this.state.formData.password)
            .then((response) => {
                console.log(response)

               
                this.setState({
                    redirect: true,
                })
                // take this out
                // this.setState({
                //     messageError: "",
                //     formUser: {
                //         text: "",
                //     }
                // });
            }).catch((error) => {
                this.setState({
                    error: true,
                })
                console.log(error)
            });

    }







    handleChange = (event) => {
        const formData = { ...this.state.formData };
        formData[event.target.name] = event.target.value;

        this.setState({ formData });
    }










//     postNewUser() {

//         var bodyParameters = {
//             "username": "string",
//             "displayName": "string",
//             "password": "string"
//         }

//         return this.client.post(this.url + "messages", bodyParameters, config)
//    // }




    render() {

        if (this.state.redirect) {
            
            return (<Redirect to={"/"} />)
        }


        let errorMessage

        if(this.state.error){
            errorMessage = <div>Wups Something Went Wrong</div>
        }
        else{
            errorMessage = <div></div>
        }

        return (
            <div className="Registration">

                <form onSubmit={this.submitNewUser}>
                    <div>
                        <label htmlFor=""> Username</label>
                        <input
                            type="text"
                            name="userName"
                            value={this.state.formData.userName}
                            onChange={this.handleChange}
                        />

                    </div>

                    <div>
                        <label htmlFor=""> Password</label>
                        <input
                            // changed to
                            type="password"
                            // type="text"
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

                    <br/>

                    <Button variant="primary" type="Submit Registration" >
                        Submit Registration
                    </Button>
                    <br/>
                    {errorMessage}
                    {/* <button>Submit Registration</button> */}
                </form>

            </div>


        );


    }



}











export default Registration;