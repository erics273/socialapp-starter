import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService"
import ProfileDisplay from "../components/profileDisplay/ProfileDisplay"

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.client = new BlueService();
    this.state = {
      data: {},


    }
  }

  getProfile() {
    return this.client.getUserName().then(result => {
      //console.log(result)
      // console.log(result.data)
      // console.log(result.data.user)
      console.log(result.data.user.username)
      console.log(result.data.user.displayName)
      console.log(result.data.user.about)


      this.setState({
        data: result.data.user
      })

    })
  }

  deleteUser=() => {
    let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
    console.log(tempLoginInfo.result.username)
    return this.client.deleteUser(tempLoginInfo.result.username)
      .then((response) => {
        console.log(response)



      }).catch((error) => {
        console.log(error)
      });


   
     

   
  }

  componentDidMount() {
    this.getProfile();
  }

  render() {
    let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
        console.log(tempLoginInfo);
    return (

      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <ProfileDisplay
          username={this.state.data.username}
          displayName={this.state.data.displayName}
          about={this.state.data.about}
        />
        <h2>Profile</h2>
        <button onClick={this.deleteUser}>Delete User</button>
      </>

    );
  }



}

export default userIsAuthenticated(Profile);
