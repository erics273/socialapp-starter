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
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <SignupForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
