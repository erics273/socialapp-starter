import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../HOCs";
import UserInfo from "../components/userInfo/UserInfo";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserInfo/>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
