import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../HOCs";
import SignupForm from "../components/signupForm/SignupForm";


class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="description">
        <br/>
        <ul>
        <li>Follow your interests</li>
        <li>See what people are saying</li>
        <li>Share what's new on your timeline</li>
        <br/>
        </ul>
        </div>
        <SignupForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
