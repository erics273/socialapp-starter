import React, { Component } from 'react'
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import SocialAppService from "../../socialAppService";
import { withStyles } from "@material-ui/core/styles";
import "./SuggestedUsers.css"


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
          <Typography className="title" color="textSecondary" gutterBottom>
            Suggested Users
          </Typography>
          <Divider variant="middle"/>


        </CardContent>
      </Card>
    );
  }
}

export default withRouter (SuggestedUsers);
