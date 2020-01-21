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
      console.log(result)

      //this.setState({
      //   data: result.data[0]
      //  })

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
          <div>username:{}</div>
          <div>displayName:{}</div>
          <div>about:{}</div>
        </div>
        <h2>Profile</h2>
      </>
    );
  }



}

export default userIsAuthenticated(Profile);
