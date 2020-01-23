import React from "react";
import Menu from "../components/Menu";
import { userIsAuthenticated } from "../HOCs";
import BlueService from "../blueService"


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


  componentDidMount() {
    this.getProfile();
  }

  render() {
    return (
      
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
          <div>username:{this.state.data.username}</div>
          <div>displayName:{this.state.data.displayName}</div>
          <div>about:{this.state.data.about}</div>
        </div>
        <h2>Profile</h2>
        <button onClick={this.state.data.user}>Delete User</button>
      </>  

    );
  }



}

export default userIsAuthenticated(Profile);
