import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import SocialAppService from "../../socialAppService";
import "./SuggestedUsers.css"
import SuggestedUserCard from "../suggestedUserCard/SuggestedUserCard"

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";


class SuggestedUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestedUsers: []
    }
  }

  render() {
    return (
      <Card className="card">
        <CardContent>
          <Typography
            className="title"
            color="textSecondary"
            gutterBottom
          >
            Suggested Users
          </Typography>
          <Divider variant="middle" />
          <SuggestedUserCard />
          <SuggestedUserCard />
          <SuggestedUserCard />
          <SuggestedUserCard />
          <SuggestedUserCard />
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(SuggestedUsers);
