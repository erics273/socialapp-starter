import React, {Component} from 'react'
import SocialAppService from "../../socialAppService";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./SuggestedUsers.css"
import { render } from "react-dom";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SuggestedUsers extends Component {
  constructor() {
    super()
    this.state = {
      suggestedusers: []
    }
  }
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div className="card2">
            <h2>Suggested Users</h2>
      </div>
    );
  }
}

export default withStyles(styles)(SuggestedUsers);
